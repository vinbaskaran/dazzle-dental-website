from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Email notification helpers (loaded AFTER load_dotenv so the API key is picked up)
from email_service import send_booking_notification, send_contact_notification  # noqa: E402

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Dazzle Dental & Cosmetic Studio API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class AppointmentCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=6, max_length=20)
    email: Optional[EmailStr] = None
    service_category: str  # Teeth | Skin | Hair
    service: Optional[str] = None
    preferred_date: str  # ISO date string YYYY-MM-DD
    preferred_time: str  # e.g. "10:00 AM"
    notes: Optional[str] = ""


class Appointment(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    service_category: str
    service: Optional[str] = None
    preferred_date: str
    preferred_time: str
    notes: Optional[str] = ""
    status: str = "pending"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactMessageCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: Optional[str] = None
    message: str = Field(min_length=2, max_length=2000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Dazzle Dental & Cosmetic Studio API", "status": "ok"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    obj = StatusCheck(**input.model_dump())
    doc = obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/appointments", response_model=Appointment, status_code=201)
async def create_appointment(payload: AppointmentCreate, background_tasks: BackgroundTasks):
    if payload.service_category not in {"Teeth", "Skin", "Hair"}:
        raise HTTPException(status_code=400, detail="service_category must be Teeth, Skin, or Hair")
    obj = Appointment(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.appointments.insert_one(doc)
    # Fire-and-forget email to the clinic; never blocks the API response.
    background_tasks.add_task(send_booking_notification, obj.model_dump())
    return obj


@api_router.get("/appointments", response_model=List[Appointment])
async def list_appointments():
    rows = await db.appointments.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


@api_router.post("/contact", response_model=ContactMessage, status_code=201)
async def create_contact_message(payload: ContactMessageCreate, background_tasks: BackgroundTasks):
    obj = ContactMessage(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_messages.insert_one(doc)
    background_tasks.add_task(send_contact_notification, obj.model_dump())
    return obj


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages():
    rows = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


@api_router.get("/services")
async def get_services():
    """Static catalog used by the frontend booking form."""
    return {
        "Teeth": [
            "Teeth Whitening",
            "Veneers & Crowns",
            "Dental Implants",
            "Root Canals",
            "Invisible Braces",
            "Braces (Orthodontics)",
            "Dentures & Bridges",
            "Cosmetic Procedures",
            "Teeth Reshaping",
            "Teeth Cleaning",
            "Fillings & Sealants",
            "Extractions",
            "Oral Surgery",
            "Paediatric Dentistry",
            "Emergency Care",
            "Check-ups & X-ray",
        ],
        "Skin": [
            "Hydra Facial",
            "Chemical Peeling",
            "Microdermabrasion",
            "Acne & Scar Treatment",
            "Dark Circle Removal",
            "Melasma Treatment",
            "Skin Tag & Wart Removal",
            "Lip Peel",
            "Microblading",
            "Skin PRP",
        ],
        "Hair": [
            "Hair PRP",
            "Advanced PRP",
        ],
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

import httpx

class RootCanalLead(BaseModel):
    name: str
    phone: str
    area: str
    tooth: str
    duration: str
    visit: str

@api_router.post("/leads", status_code=201)
async def save_lead(payload: RootCanalLead):
    try:
        # Save to MongoDB
        doc = payload.model_dump()
        doc['created_at'] = datetime.now(timezone.utc).isoformat()
        doc['source'] = 'root-canal'
        await db.leads.insert_one(doc)

        # Save to Google Sheets
        params = {
            "name": payload.name,
            "phone": payload.phone,
            "area": payload.area,
            "tooth": payload.tooth,
            "duration": payload.duration,
            "visit": payload.visit,
            "date": datetime.now().strftime("%d/%m/%Y %H:%M"),
        }
        async with httpx.AsyncClient() as client:
            await client.get(
                "https://script.google.com/macros/s/AKfycbz6wDB8f81J1I1HEWIsnwzh8jZM13Le-G-u6Ixp3OPII5M4ef6DotzUs7s_w5SU3M1KEA/exec",
                params=params,
                follow_redirects=True,
                timeout=10.0
            )
        return {"status": "ok"}
    except Exception as e:
        logger.error(f"Lead save error: {e}")
        return {"status": "ok"}
@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
