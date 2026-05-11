"""Backend API tests for Dazzle Dental & Cosmetic Studio"""
import os
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://smile-builder-4.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


# Root health
def test_root_ok():
    r = requests.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "ok"


# Services catalog
def test_services_catalog():
    r = requests.get(f"{API}/services")
    assert r.status_code == 200
    data = r.json()
    for cat in ["Teeth", "Skin", "Hair"]:
        assert cat in data
        assert isinstance(data[cat], list)
        assert len(data[cat]) > 0


# Appointments
class TestAppointments:
    def test_create_appointment_valid(self):
        payload = {
            "name": "TEST_John Doe",
            "phone": "+919876543210",
            "email": "test_john@example.com",
            "service_category": "Teeth",
            "service": "Teeth Whitening",
            "preferred_date": "2026-06-15",
            "preferred_time": "10:00 AM",
            "notes": "Test booking",
        }
        r = requests.post(f"{API}/appointments", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str)
        assert data["status"] == "pending"
        assert data["service_category"] == "Teeth"
        assert "_id" not in data

    def test_create_appointment_invalid_category(self):
        payload = {
            "name": "TEST_Bad",
            "phone": "+919876543210",
            "service_category": "Foot",
            "preferred_date": "2026-06-15",
            "preferred_time": "10:00 AM",
        }
        r = requests.post(f"{API}/appointments", json=payload)
        assert r.status_code == 400

    def test_create_appointment_missing_fields(self):
        r = requests.post(f"{API}/appointments", json={"name": "TEST"})
        assert r.status_code == 422

    def test_list_appointments_no_id_leak(self):
        r = requests.get(f"{API}/appointments")
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        for row in rows:
            assert "_id" not in row
            assert "id" in row


# Contact
class TestContact:
    def test_create_contact_valid(self):
        payload = {
            "name": "TEST_Jane",
            "email": "test_jane@example.com",
            "phone": "+919812345670",
            "message": "Hello, please contact me.",
        }
        r = requests.post(f"{API}/contact", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["email"] == "test_jane@example.com"
        assert "id" in data
        assert "_id" not in data

    def test_create_contact_invalid_email(self):
        payload = {"name": "TEST_X", "email": "not-an-email", "message": "hello there"}
        r = requests.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_list_contact_no_id_leak(self):
        r = requests.get(f"{API}/contact")
        assert r.status_code == 200
        rows = r.json()
        for row in rows:
            assert "_id" not in row
