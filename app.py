import os
import json
import uuid
import urllib.parse
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=ROOT_DIR, static_url_path="")
CORS(app)

ORDERS_FILE = os.path.join(ROOT_DIR, "orders.json")
INQUIRIES_FILE = os.path.join(ROOT_DIR, "inquiries.json")

# Helper functions for JSON storage
def load_json(filepath):
    if not os.path.exists(filepath):
        return []
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return []

def save_json(filepath, data):
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

# Seed Services Catalog
SERVICES = [
    {
        "id": "poster-insta-single",
        "category": "social",
        "category_name": "Social Media Posters",
        "title": "Instagram / FB High-Impact Creative",
        "description": "Scroll-stopping social media poster (1080x1080 & 1080x1350) designed for high engagement, brand promotion, or product launches.",
        "price": 299,
        "delivery_time": "24 Hours",
        "revisions": "Unlimited revisions",
        "badge": "Bestseller",
        "features": [
            "1080x1080 & 1080x1350 HD formats",
            "Custom brand colors & fonts",
            "Commercial usage rights",
            "Ready-to-post PNG & JPEG",
            "Source file included (PSD/Canva)"
        ],
        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "poster-festival-promo",
        "category": "social",
        "category_name": "Social Media Posters",
        "title": "Festival & Promotional Event Poster",
        "description": "Vibrant Indian festival greetings (Diwali, Eid, Holi, New Year) or business discount/sale offer posters tailored to your brand.",
        "price": 399,
        "delivery_time": "24 Hours",
        "revisions": "3 Free Revisions",
        "badge": "Popular",
        "features": [
            "Indian festival & festive sale themes",
            "Brand logo & contact details integration",
            "Ultra HD 4K resolution output",
            "Story & Post sizes included",
            "Ready for WhatsApp status & ads"
        ],
        "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "poster-carousel-master",
        "category": "social",
        "category_name": "Social Media Posters",
        "title": "Instagram Carousel Master (5-7 Slides)",
        "description": "Multi-slide seamless carousel design crafted to maximize saves, shares, and educational storytelling for LinkedIn & Instagram.",
        "price": 899,
        "delivery_time": "48 Hours",
        "revisions": "Unlimited revisions",
        "badge": "High Engagement",
        "features": [
            "Seamless slide-to-slide continuous flow",
            "5 to 7 high-retention graphic slides",
            "Call-to-action & swipe cues",
            "Custom infographics & icons",
            "Editable source files"
        ],
        "image": "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "poster-linkedin-header",
        "category": "social",
        "category_name": "Social Media Posters",
        "title": "LinkedIn & Twitter Executive Banner",
        "description": "Professional header and banner for LinkedIn personal profiles, company pages, and Twitter/X profiles to establish authority.",
        "price": 499,
        "delivery_time": "24 Hours",
        "revisions": "Unlimited revisions",
        "badge": "Corporate",
        "features": [
            "Exact platform safe-zone alignment",
            "Personal branding tagline & accolades",
            "High-DPI sharp typography",
            "Desktop & mobile responsive",
            "PNG + Source vector files"
        ],
        "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "thumb-viral-click",
        "category": "thumbnails",
        "category_name": "YouTube & Video Thumbnails",
        "title": "Viral High-CTR YouTube Thumbnail",
        "description": "High-click-through thumbnail engineered with emotional facial cutouts, glowing strokes, punchy 3D typography, and vivid contrast.",
        "price": 349,
        "delivery_time": "12-24 Hours",
        "revisions": "Unlimited revisions",
        "badge": "Trending",
        "features": [
            "1280x720 HD optimized for mobile",
            "Expression enhancement & neon glow",
            "Bold typography with 3D depth",
            "Psychological CTR color theory",
            "Photoshop PSD source file"
        ],
        "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "thumb-5-pack",
        "category": "thumbnails",
        "category_name": "YouTube & Video Thumbnails",
        "title": "YouTube Pro Creator 5-Thumbnail Pack",
        "description": "Bundle of 5 high-performing thumbnails for your weekly videos or podcast episodes. Perfect for active YouTubers & streamers.",
        "price": 1499,
        "delivery_time": "48 Hours",
        "revisions": "Unlimited revisions",
        "badge": "Value Deal",
        "features": [
            "5 Custom crafted thumbnails",
            "Consistent channel branding identity",
            "A/B test variations included",
            "Fast turnaround per release schedule",
            "Dedicated designer access"
        ],
        "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "thumb-reels-shorts",
        "category": "thumbnails",
        "category_name": "YouTube & Video Thumbnails",
        "title": "Instagram Reels & YT Shorts Cover Art",
        "description": "Aesthetic 9:16 vertical cover that blends flawlessly with your profile grid while grabbing eyes on the explore feed.",
        "price": 249,
        "delivery_time": "24 Hours",
        "revisions": "Unlimited revisions",
        "badge": "Essential",
        "features": [
            "9:16 vertical layout (1080x1920)",
            "1:1 Instagram grid safe-zone preview",
            "Minimalist modern aesthetic",
            "Instant attention-grabbing text",
            "Ready-to-upload high-res JPEG"
        ],
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "logo-minimalist",
        "category": "logos",
        "category_name": "Logo & Brand Identity",
        "title": "Modern Minimalist Vector Logo",
        "description": "Timeless, clean, and memorable geometric or monogram logo tailored for startups, creator brands, and enterprises.",
        "price": 799,
        "delivery_time": "48 Hours",
        "revisions": "Unlimited revisions",
        "badge": "Signature",
        "features": [
            "2 Unique original concept designs",
            "Vector AI, EPS, SVG, PDF, PNG, JPG",
            "Transparent background variations",
            "Black & white monochromatic versions",
            "100% vector scalability without quality loss"
        ],
        "image": "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "logo-3d-mascot",
        "category": "logos",
        "category_name": "Logo & Brand Identity",
        "title": "3D Mascot & Premium Emblem Logo",
        "description": "Dynamic, illustrative, or 3D metallic textured logo for gaming clans, sports teams, luxury hospitality, or consumer brands.",
        "price": 1499,
        "delivery_time": "72 Hours",
        "revisions": "Unlimited revisions",
        "badge": "Premium",
        "features": [
            "3 Custom mascot / 3D emblem concepts",
            "Photorealistic 3D mockups included",
            "Full commercial trademark copyright",
            "All source files (AI, PSD, EPS, SVG)",
            "Favicon & social profile ready"
        ],
        "image": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "branding-full-suite",
        "category": "logos",
        "category_name": "Logo & Brand Identity",
        "title": "Complete Brand Identity Master Suite",
        "description": "Comprehensive corporate visual identity kit: Logo, Typography, Color Palette, Business Card, Letterhead, Social Kit & Brand Guidelines.",
        "price": 3499,
        "delivery_time": "4-5 Days",
        "revisions": "Unlimited revisions",
        "badge": "Complete Solution",
        "features": [
            "Primary + Secondary Logo + Submarks",
            "Brand Style Guide PDF (Typography & Colors)",
            "Double-sided Business Card & Letterhead",
            "Social Media Kit (Avatar, Banners, Templates)",
            "All master vector source files"
        ],
        "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "print-business-card",
        "category": "print",
        "category_name": "Commercial & Print Media",
        "title": "Luxury Double-Sided Business Card",
        "description": "Sleek, print-ready premium business card with QR code integration, bleed margins, and spot-UV / gold-foil mockup options.",
        "price": 399,
        "delivery_time": "24 Hours",
        "revisions": "Unlimited revisions",
        "badge": "Print Ready",
        "features": [
            "Double-sided custom layout",
            "Interactive QR code for contact/vCard/UPI",
            "CMYK 300 DPI print-ready PDF",
            "Bleed & cut margin guidelines",
            "Source files included"
        ],
        "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80"
    },
    {
        "id": "print-flyer-brochure",
        "category": "print",
        "category_name": "Commercial & Print Media",
        "title": "Commercial Flyer & Product Brochure",
        "description": "High-converting single page or tri-fold marketing brochures and flyers for real estate, clinics, events, and restaurants.",
        "price": 699,
        "delivery_time": "48 Hours",
        "revisions": "Unlimited revisions",
        "badge": "Marketing",
        "features": [
            "Single sheet or Bi-fold / Tri-fold format",
            "Custom illustrations & icons",
            "CMYK print-ready high resolution",
            "Digital PDF version for email & WhatsApp",
            "Master editable files"
        ],
        "image": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=700&q=80"
    }
]

# Static Page Routes for Individual Pages (Root Single Folder Layout)
@app.route("/")
@app.route("/index.html")
def home_page():
    return send_from_directory(ROOT_DIR, "index.html")

@app.route("/about")
@app.route("/about.html")
def about_page():
    return send_from_directory(ROOT_DIR, "about.html")

@app.route("/services")
@app.route("/services.html")
def services_page():
    return send_from_directory(ROOT_DIR, "services.html")

@app.route("/contact")
@app.route("/contact.html")
def contact_page():
    return send_from_directory(ROOT_DIR, "contact.html")

@app.route("/favicon.ico")
@app.route("/favicon.svg")
def favicon():
    return send_from_directory(ROOT_DIR, "favicon.svg", mimetype="image/svg+xml")

@app.route("/static/<path:filename>")
def serve_legacy_static(filename):
    basename = os.path.basename(filename)
    if os.path.exists(os.path.join(ROOT_DIR, basename)):
        return send_from_directory(ROOT_DIR, basename)
    return send_from_directory(ROOT_DIR, "index.html")

@app.route("/<path:filename>")
def serve_root_file(filename):
    return send_from_directory(ROOT_DIR, filename)

# Health check
@app.route("/api/health")
def health():
    return jsonify({
        "status": "healthy",
        "service": "OSCA INDIA Graphic Design Studio API",
        "version": "2.2.0",
        "brand": "OSCA INDIA",
        "contact_phone": "+916200177076",
        "whatsapp": "+916200177076",
        "currency": "INR"
    })

# Services Catalog
@app.route("/api/services", methods=["GET"])
def get_services():
    category = request.args.get("category")
    if category and category != "all":
        filtered = [s for s in SERVICES if s["category"] == category]
        return jsonify({"services": filtered, "count": len(filtered)})
    return jsonify({"services": SERVICES, "count": len(SERVICES)})

# Order Placement / Saving
@app.route("/api/orders", methods=["POST", "GET"])
def handle_orders():
    if request.method == "GET":
        orders = load_json(ORDERS_FILE)
        return jsonify({"orders": orders, "count": len(orders)})
    
    data = request.get_json(silent=True) or {}
    
    customer = data.get("customer", {})
    items = data.get("items", [])
    
    if not items:
        return jsonify({"success": False, "error": "Cart is empty. Please add services."}), 400
    
    if not customer.get("name") or not customer.get("phone"):
        return jsonify({"success": False, "error": "Customer name and phone number are required."}), 400
        
    order_id = f"OSCA-ORD-{datetime.now().strftime('%Y%m%d')}-{uuid.uuid4().hex[:4].upper()}"
    invoice_id = f"OSCA-INV-{datetime.now().strftime('%Y%m%d')}-{uuid.uuid4().hex[:4].upper()}"
    
    # Calculate order total
    subtotal = sum(item.get("price", 0) * item.get("quantity", 1) for item in items)
    discount = data.get("discount", 0)
    tax = data.get("tax", 0)
    total = max(0, subtotal - discount + tax)
    
    new_order = {
        "order_id": order_id,
        "invoice_id": invoice_id,
        "created_at": datetime.now().isoformat(),
        "created_date_str": datetime.now().strftime("%d %b %Y, %I:%M %p"),
        "customer": customer,
        "items": items,
        "subtotal": subtotal,
        "discount": discount,
        "tax": tax,
        "total": total,
        "status": "Pending Confirmation",
        "payment_method": data.get("payment_method", "WhatsApp / Digital"),
        "payment_status": "Pending Confirmation",
        "official_phone": "6200177076"
    }
    
    orders = load_json(ORDERS_FILE)
    orders.insert(0, new_order)
    save_json(ORDERS_FILE, orders)
    
    # Formatted professional WhatsApp message
    items_lines = []
    for idx, it in enumerate(items, 1):
        line = f"  {idx}. *{it.get('title')}* (Qty: {it.get('quantity', 1)}) — ₹{it.get('price', 0) * it.get('quantity', 1)}"
        items_lines.append(line)
    items_block = "\n".join(items_lines)

    whatsapp_message = (
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        f"🎨 *OSCA INDIA — DESIGN ORDER* 🎨\n"
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"📋 *Order ID:* `{order_id}`\n"
        f"📅 *Date:* {datetime.now().strftime('%d %b %Y, %I:%M %p')}\n\n"
        f"👤 *CLIENT DETAILS:*\n"
        f"• *Name:* {customer.get('name')}\n"
        f"• *Phone:* {customer.get('phone')}\n"
        f"• *Brand / Channel:* {customer.get('brand', 'Personal Brand')}\n"
        f"• *Email:* {customer.get('email', 'N/A')}\n\n"
        f"🛒 *SERVICES ORDERED:*\n"
        f"{items_block}\n\n"
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        f"💰 *TOTAL BILLING SUMMARY:*\n"
        f"• *Subtotal:* ₹{subtotal}\n"
        f"• *Discount:* -₹{discount}\n"
        f"• *GST / Taxes:* ₹0 (Inclusive)\n"
        f"💵 *NET PAYABLE:* *₹{total}*\n"
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"⚡ *DELIVERY COMMITMENT:*\n"
        f"• Turnaround: 24 to 48 Hours\n"
        f"• Unlimited Revisions Included\n"
        f"• Formats: PNG, HD JPG, Vector & PSD Files\n\n"
        f"📝 *CLIENT REQUIREMENTS / NOTES:*\n"
        f"\"{customer.get('notes', 'Standard high quality graphics')}\"\n\n"
        f"💳 *PAYMENT INFO:*\n"
        f"• Direct confirmation on WhatsApp\n\n"
        f"Hello OSCA India team! Please review my order and confirm the delivery timeline. Thank you! 🚀"
    )
    
    encoded_wa = urllib.parse.quote(whatsapp_message)
    
    return jsonify({
        "success": True,
        "order": new_order,
        "whatsapp_url": f"https://wa.me/916200177076?text={encoded_wa}",
        "call_url": "tel:+916200177076",
        "message": "Order registered successfully! Ready for WhatsApp dispatch and PDF download."
    })

# Inquiries / Custom Briefs
@app.route("/api/contact", methods=["POST"])
def submit_contact():
    data = request.get_json(silent=True) or {}
    name = data.get("name")
    phone = data.get("phone")
    message = data.get("message", "")
    service_type = data.get("service_type", "General Inquiry")
    
    if not name or not phone:
        return jsonify({"success": False, "error": "Name and Phone number are required."}), 400
        
    inquiry_id = f"INQ-{uuid.uuid4().hex[:6].upper()}"
    inquiry = {
        "id": inquiry_id,
        "timestamp": datetime.now().isoformat(),
        "date_str": datetime.now().strftime("%d %b %Y, %I:%M %p"),
        "name": name,
        "phone": phone,
        "email": data.get("email", ""),
        "service_type": service_type,
        "budget": data.get("budget", "Flexible"),
        "message": message
    }
    
    inquiries = load_json(INQUIRIES_FILE)
    inquiries.insert(0, inquiry)
    save_json(INQUIRIES_FILE, inquiries)
    
    wa_text = (
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        f"👋 *OSCA INDIA — DESIGN INQUIRY* 👋\n"
        f"━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        f"👤 *Name:* {name}\n"
        f"📞 *Phone:* {phone}\n"
        f"📧 *Email:* {data.get('email', 'N/A')}\n"
        f"🎯 *Service Required:* {service_type}\n"
        f"💵 *Budget:* {data.get('budget', 'Flexible')}\n\n"
        f"💬 *Project Brief / Message:*\n"
        f"\"{message}\"\n\n"
        f"Hello OSCA India! Please share quotation and turnaround for this requirement."
    )
    
    encoded_wa = urllib.parse.quote(wa_text)
    
    return jsonify({
        "success": True,
        "inquiry_id": inquiry_id,
        "whatsapp_url": f"https://wa.me/916200177076?text={encoded_wa}",
        "message": "Inquiry received! We will contact you within 15 minutes."
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
