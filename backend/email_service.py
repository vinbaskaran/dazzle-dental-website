"""Email helpers for sending transactional notifications via Resend.

All sends are non-blocking and silent on failure — the API caller never
sees an email error; booking/contact records are always persisted.
"""
from __future__ import annotations

import asyncio
import logging
import os
from typing import Any, Dict, Optional

import resend

logger = logging.getLogger(__name__)

_API_KEY = os.environ.get("RESEND_API_KEY", "")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
SENDER_NAME = os.environ.get("SENDER_NAME", "Dazzle Bookings")
CLINIC_EMAIL = os.environ.get("CLINIC_EMAIL", "dazzledentalcosmetic@gmail.com")
CLINIC_PHONE = os.environ.get("CLINIC_PHONE", "+91 94426 45111")

if _API_KEY:
    resend.api_key = _API_KEY

BRAND_NAVY = "#1F4E79"
BRAND_TEAL = "#5BA9A8"
BRAND_LIGHT = "#FDFDFB"
BRAND_SAND = "#F5F5F0"


def _from_addr() -> str:
    return f"{SENDER_NAME} <{SENDER_EMAIL}>"


async def _send(params: Dict[str, Any]) -> Optional[str]:
    """Send via Resend in a thread; return email id or None on failure."""
    if not _API_KEY:
        logger.warning("RESEND_API_KEY not configured — skipping email send")
        return None
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        email_id = result.get("id") if isinstance(result, dict) else None
        logger.info("Resend email sent: id=%s subject=%s", email_id, params.get("subject"))
        return email_id
    except Exception as exc:  # noqa: BLE001
        logger.error("Resend email failed: %s", exc)
        return None


def _wrap(body_html: str, preheader: str = "") -> str:
    """Wrap inner HTML with a brand-styled, email-safe table layout."""
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dazzle Dental & Cosmetic Studio</title>
</head>
<body style="margin:0;padding:0;background:{BRAND_SAND};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#0F172A;">
  <span style="display:none !important;opacity:0;color:transparent;visibility:hidden;height:0;width:0;overflow:hidden;">{preheader}</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:{BRAND_SAND};padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 8px 32px rgba(31,78,121,0.10);">
          <tr>
            <td style="background:{BRAND_NAVY};padding:28px 32px;color:#ffffff;">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:1.2;letter-spacing:0.3px;">Dazzle Dental &amp; Cosmetic Studio</div>
              <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:{BRAND_TEAL};margin-top:6px;">Teeth · Skin · Hair</div>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              {body_html}
            </td>
          </tr>
          <tr>
            <td style="background:{BRAND_LIGHT};padding:20px 32px;border-top:1px solid #EAEAE3;font-size:12px;color:#64748B;text-align:center;">
              First Floor, 76A/2, Kelambakkam–Vandalur Road, Melakottaiyur, Chennai 600127<br/>
              <a href="tel:+919442645111" style="color:{BRAND_NAVY};text-decoration:none;font-weight:600;">+91 94426 45111</a> · <a href="mailto:{CLINIC_EMAIL}" style="color:{BRAND_NAVY};text-decoration:none;font-weight:600;">{CLINIC_EMAIL}</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>"""


def _row(label: str, value: str) -> str:
    if not value:
        return ""
    return (
        f'<tr><td style="padding:10px 0;border-bottom:1px solid #EFEFEA;font-size:13px;color:#64748B;width:140px;vertical-align:top;">{label}</td>'
        f'<td style="padding:10px 0;border-bottom:1px solid #EFEFEA;font-size:14px;color:#0F172A;font-weight:500;">{value}</td></tr>'
    )


def render_booking_email(b: Dict[str, Any]) -> Dict[str, str]:
    """Return {subject, html} for a new booking notification to the clinic."""
    name = b.get("name", "")
    phone = b.get("phone", "")
    email = b.get("email") or "—"
    cat = b.get("service_category", "")
    svc = b.get("service") or "Consultation"
    date = b.get("preferred_date", "")
    time_str = b.get("preferred_time", "")
    notes = (b.get("notes") or "").strip() or "—"

    body = f"""
      <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:{BRAND_TEAL};margin-bottom:8px;">New booking request</div>
      <h1 style="font-family:Georgia,'Times New Roman',serif;font-size:26px;margin:0 0 6px;color:{BRAND_NAVY};line-height:1.2;">{name} wants to book a visit</h1>
      <p style="margin:0 0 22px;color:#475569;font-size:14px;line-height:1.6;">Call the patient back within 30 minutes to confirm the slot.</p>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #EFEFEA;">
        {_row("Patient name", name)}
        {_row("Phone", f'<a href="tel:{phone}" style="color:{BRAND_NAVY};text-decoration:none;">{phone}</a>')}
        {_row("Email", f'<a href="mailto:{email}" style="color:{BRAND_NAVY};text-decoration:none;">{email}</a>' if email != "—" else "—")}
        {_row("Category", cat)}
        {_row("Treatment", svc)}
        {_row("Preferred date", date)}
        {_row("Preferred time", time_str)}
        {_row("Notes", notes.replace(chr(10), "<br/>"))}
      </table>

      <div style="margin-top:28px;">
        <a href="tel:{phone}" style="display:inline-block;background:{BRAND_NAVY};color:#ffffff;padding:14px 28px;border-radius:999px;text-decoration:none;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Call {name.split(' ')[0] if name else 'patient'}</a>
        <a href="https://wa.me/{phone.replace('+','').replace(' ','').replace('-','')}" style="display:inline-block;background:#25D366;color:#ffffff;padding:14px 28px;border-radius:999px;text-decoration:none;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;margin-left:8px;">WhatsApp</a>
      </div>
    """
    return {
        "subject": f"🦷 New booking · {name} · {cat} · {date} {time_str}",
        "html": _wrap(body, f"New booking request from {name} for {cat} on {date} at {time_str}"),
    }


def render_contact_email(c: Dict[str, Any]) -> Dict[str, str]:
    """Return {subject, html} for a new contact message notification to the clinic."""
    name = c.get("name", "")
    email = c.get("email", "")
    phone = c.get("phone") or "—"
    message = (c.get("message") or "").strip()

    body = f"""
      <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:{BRAND_TEAL};margin-bottom:8px;">New website message</div>
      <h1 style="font-family:Georgia,'Times New Roman',serif;font-size:26px;margin:0 0 6px;color:{BRAND_NAVY};line-height:1.2;">{name} sent you a message</h1>
      <p style="margin:0 0 22px;color:#475569;font-size:14px;line-height:1.6;">Reply within 24 hours to keep response times tight.</p>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #EFEFEA;">
        {_row("From", name)}
        {_row("Email", f'<a href="mailto:{email}" style="color:{BRAND_NAVY};text-decoration:none;">{email}</a>')}
        {_row("Phone", f'<a href="tel:{phone}" style="color:{BRAND_NAVY};text-decoration:none;">{phone}</a>' if phone != "—" else "—")}
      </table>

      <div style="margin-top:22px;background:{BRAND_LIGHT};border-left:3px solid {BRAND_TEAL};padding:18px 22px;border-radius:6px;font-size:14px;line-height:1.7;color:#0F172A;white-space:pre-wrap;">{message.replace(chr(10), '<br/>')}</div>

      <div style="margin-top:28px;">
        <a href="mailto:{email}" style="display:inline-block;background:{BRAND_NAVY};color:#ffffff;padding:14px 28px;border-radius:999px;text-decoration:none;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Reply to {name.split(' ')[0] if name else 'sender'}</a>
      </div>
    """
    return {
        "subject": f"💬 New message · {name}",
        "html": _wrap(body, f"New website message from {name}"),
    }


async def send_booking_notification(booking: Dict[str, Any]) -> None:
    """Fire-and-forget booking email to the clinic admin."""
    payload = render_booking_email(booking)
    await _send(
        {
            "from": _from_addr(),
            "to": [CLINIC_EMAIL],
            "reply_to": booking.get("email") or None,
            "subject": payload["subject"],
            "html": payload["html"],
        }
    )


async def send_contact_notification(message: Dict[str, Any]) -> None:
    """Fire-and-forget contact-message email to the clinic admin."""
    payload = render_contact_email(message)
    await _send(
        {
            "from": _from_addr(),
            "to": [CLINIC_EMAIL],
            "reply_to": message.get("email"),
            "subject": payload["subject"],
            "html": payload["html"],
        }
    )
