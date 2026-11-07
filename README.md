# 🎨 OSCA INDIA — Premier Graphic Design Studio
### *Visual Creatives Engineered for Social Media Dominance & Brand Growth*

[![Studio Status](https://img.shields.io/badge/Status-100%25%20Functional%20%26%20Verified-00f0ff?style=for-the-badge)](https://wa.me/916200177076)
[![Google Rating](https://img.shields.io/badge/Google%20Reviews-4.9%20★%20(38%2B%20Reviews)-fabc05?style=for-the-badge)](https://share.google/KetARk5s5CUDVXaoO)
[![Architecture](https://img.shields.io/badge/Architecture-Single%20Folder%20Flat%20Layout-8b5cf6?style=for-the-badge)](#-single-folder-flat-architecture)
[![Hotline](https://img.shields.io/badge/Hotline%20%26%20WhatsApp-+91%206200177076-25d366?style=for-the-badge)](https://wa.me/916200177076)

---

## 📖 About The Project

**OSCA INDIA** is a dedicated creative agency and visual arts studio specializing in high-converting **Social Media Posters**, viral **YouTube Thumbnails (1280x720 HD)**, minimalist **Vector Logos & Brand Identity**, and high-resolution **Commercial Print Media**.

This web platform is designed with a **100% Single-Folder (Zero Subfolder) Architecture**, allowing the entire application to run seamlessly in **any environment** — whether double-clicked directly from your file manager (`file:///`), launched via VS Code Live Server, deployed to GitHub Pages, or powered by the included Flask Python backend.

---

## 🗂️ Single-Folder Flat Architecture

All project files are situated directly inside the root folder (`d:\osca india graphic ddegine\`) with **zero subdirectories**:

```
d:\osca india graphic ddegine\
│
├── index.html            # Primary Homepage (Hero, Floating Platforms, Catalog, Pricing Calculator, 38+ Reviews, FAQ)
├── about.html            # About Us Page (Studio Story, Philosophy, 6-Step Workflow, Software Toolkit)
├── services.html         # Full Services Catalog (12+ Offerings, Category Filters, Instant Add to Cart)
├── contact.html          # Contact Page (Direct Hotline, WhatsApp, Custom Brief Form, Studio Location)
│
├── style.css             # Unified CSS Design System (Dark/Light Variables, Glassmorphism, Zero-Overflow, Mobile Dock)
├── app.js                # Core Application Logic (Shopping Cart, Dynamic Pricing Calculator, Resilient API Client)
├── invoice.js            # Client-Side High-Res A4 PDF Tax Invoice/Bill Generator (jsPDF + autoTable)
├── reviews-data.js       # 38+ Real Verified Google My Business Reviews Data
├── favicon.svg           # Custom OSCA INDIA Vector Brand Emblem
│
├── app.py                # Python Flask REST API Backend & File Server
├── orders.json           # JSON Database for Confirmed Client Orders
├── inquiries.json        # JSON Database for Client Contact Inquiries & Briefs
│
├── run.bat               # 1-Click Windows Starter Launcher
├── requirements.txt      # Python Package Dependencies
├── test_suite.py         # Automated Test Verification Suite (Endpoints, Assets, Orders, Inquiries)
└── README.md             # Complete Project Documentation & Guide
```

---

## ✨ Key Features & Capabilities

### 1. 🌓 Changeable Light & Dark Mode (Instant & Flicker-Free)
- **Toggle Button**: Located right in the top navbar header on desktop and mobile.
- **Dark Mode**: Premium deep space obsidian theme (`#080c14`) with glowing cyan (`#00f0ff`) and purple (`#8b5cf6`) accents.
- **Light Mode**: Clean, high-contrast, modern aesthetic with soft off-white background (`#f8fafc`), crisp dark typography (`#0f172a`), refined borders, and vibrant accents.
- **Zero-Flicker State**: User preference is stored in `localStorage` and read synchronously in the `<head>` before page rendering.

### 2. 📱 100% Mobile & Tablet Responsive with Island Navigation Dock
- **Zero Horizontal Overflow**: Guaranteed 100% viewport fit (`overflow-x: hidden !important`) with ambient light glow enclosed.
- **Tablet Dock (10" to 12" Screens)**: Refined, floating iPad-style dock (`height: 76px`, `max-width: 620px`, `border-radius: 24px`, `22px` icons and `12px` bold labels) with zero content collision.
- **Mobile Bottom Navigation Dock**: Ergonomic bottom navigation dock with quick navigation to *Home*, *Services*, *Google 4.9★ Reviews*, *About*, and *Cart* (with live count badge).
- **Mobile/Tablet Header**: Clean top header displaying Studio Logo, Theme Toggle button, and *Contact* button.
- **Docked Floating Action Buttons**: One-Touch Direct Call (`tel:+916200177076`) and WhatsApp buttons float docked at `bottom: 104px; right: 20px;` safely above the bottom dock.

### 3. ✨ Move Click Animation on "Add to Cart" (Fly-to-Cart)
- **Parabolic Trajectory**: Clicking any Add to Cart button spawns a glowing creative particle that flies in a smooth parabolic curve directly into the Cart icon.
- **Tactile Button Feedback**: Clicked button reacts with scale pulse and temporary `✓ Added!` confirmation.
- **Cart Impact & Badge Pop**: Cart icon performs a 3D bounce (`cartBump`), the badge counter pops with scaling animation (`badgePop`), and celebration sparkles appear.

### 4. ⭐ Real Google My Business Integration (4.9★ & 38+ Reviews)
- Direct link to official Google Business profile: [https://share.google/KetARk5s5CUDVXaoO](https://share.google/KetARk5s5CUDVXaoO).
- Includes all real verified reviews with client names, dates, star ratings, and detailed project feedback.
- Google rating badge displayed in the hero section, navigation dock, and dedicated reviews showcase.

### 5. 🛒 Interactive Shopping Cart & Instant A4 PDF Invoice
- Persistent cart powered by `localStorage` across all pages.
- Add multiple design packages with custom quantities and source file add-ons.
- Coupon engine supporting instant discounts (e.g. `OSCA10`).
- **Instant PDF Invoice Generator**: Generates clean, print-ready A4 Tax Invoices with invoice numbers, client details, itemized table, total, and official verified settlement details.

### 6. 📲 One-Click WhatsApp & Hotline Ordering
- Clicking "Order via WhatsApp" automatically formats a complete, professional order brief and opens WhatsApp with `+91 6200177076`.
- Direct calling support via `tel:+916200177076`.
- Clean UI: Phone numbers and raw UPI handles are kept hidden from button text to maintain modern visual design.

### 7. 🧮 Dynamic Custom Pricing Calculator
- Real-time price estimator on the homepage.
- Select Category (Social Media Poster, YouTube Thumbnail, Minimalist Logo, Business Card, Flyer).
- Slide quantity (1 to 20 designs), select Turnaround Speed (Standard 24-48h, Express 12-24h, Rush 6h), and toggle Master Source Files (`.PSD` / `.AI`).

---

## 🚀 How to Run The Project

### Option A: Direct Double-Click (Zero Setup Needed)
Simply open **`index.html`** in any web browser (Google Chrome, Microsoft Edge, Firefox, Brave).
- All styling, scripts, cart actions, invoice generation, and WhatsApp dispatches work **100% client-side** without needing any server!

### Option B: 1-Click Windows Launcher
Double-click [`run.bat`](file:///d:/osca%20india%20graphic%20ddegine/run.bat) in the project directory.
- Automatically launches the Flask backend and serves the website at `http://127.0.0.1:5000`.

### Option C: Python Server via Terminal
```powershell
cd "d:\osca india graphic ddegine"
python app.py
```
Open your browser and navigate to:
👉 **`http://127.0.0.1:5000`**

### Option D: VS Code Live Server
Right-click `index.html` and select **"Open with Live Server"** (runs on `http://127.0.0.1:5500/index.html`). The front-end automatically connects to the backend API or falls back to internal catalog data seamlessly.

---

## 🧪 Automated Testing & Verification

The project includes an end-to-end automated test suite:
```powershell
python test_suite.py
```

### Verified Test Cases:
- ✅ `GET /` & `GET /index.html` (HTTP 200, branding, phone, GMB link, theme button)
- ✅ `GET /about` & `GET /about.html` (HTTP 200)
- ✅ `GET /services` & `GET /services.html` (HTTP 200)
- ✅ `GET /contact` & `GET /contact.html` (HTTP 200)
- ✅ Root static assets: `style.css`, `app.js`, `invoice.js`, `reviews-data.js`, `favicon.svg` (All HTTP 200)
- ✅ Services API: `GET /api/services` (Returns 12 catalog services)
- ✅ Orders API: `POST /api/orders` (Creates order, generates WhatsApp URL with `916200177076`, writes to `orders.json`)
- ✅ Inquiries API: `POST /api/contact` (Submits design brief, writes to `inquiries.json`)

---

## 📞 Studio Contact & Official Details

| Detail | Information |
| :--- | :--- |
| **Studio Name** | **OSCA INDIA — Graphic Design Studio** |
| **Primary Hotline** | [`+91 6200177076`](tel:+916200177076) |
| **Official WhatsApp** | [`+91 6200177076`](https://wa.me/916200177076) |
| **Official GMB Profile** | [https://share.google/KetARk5s5CUDVXaoO](https://share.google/KetARk5s5CUDVXaoO) |
| **Google Rating** | **4.9 ★★★★★ (38+ Verified Client Reviews)** |
| **Support Email** | `support@oscaindia.com` |
| **Operating Hours** | 24 / 7 Express Turnaround Available |

---

*© 2026 OSCA INDIA Graphic Design Studio. All rights reserved.*
