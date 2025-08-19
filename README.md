# Kitmon360 – Playwright POM Smoke Tests

Minimal, respectful UI checks for **https://kitmon360.de** using **Playwright** and a clean **Page Object Model (POM)**.  
Perfect as a portfolio repo: tiny, stable, and easy to run locally.

---

## What’s covered

- ✅ **Homepage loads** and renders the hero content  
- ✅ **Header navigation**: each top-level menu item opens successfully  
- ✅ **“Jetzt buchen”** CTA leads to the booking page

All tests are **read-only** (no forms submitted, no side effects).

---

## Tech stack

- **Node.js** (LTS)
- **Playwright Test** (Chromium, Firefox, WebKit)
- **TypeScript**
- **POM** (page objects for Home, Header, Booking)

---

## Requirements

- **Windows / macOS / Linux**
- **Node.js LTS** (e.g., v20+)

> Windows quick install (PowerShell):
```powershell
winget install OpenJS.NodeJS.LTS
