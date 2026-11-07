import urllib.request
import json

base_url = "http://127.0.0.1:5000"

# 1. Test HTML Pages & Direct File URLs
pages = ["/", "/index.html", "/about", "/about.html", "/services", "/services.html", "/contact", "/contact.html"]
for page in pages:
    url = base_url + page
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as resp:
        code = resp.getcode()
        body = resp.read().decode('utf-8')
        assert code == 200, f"Page {page} returned code {code}"
        assert "OSCA" in body and "INDIA" in body, f"Page {page} missing OSCA INDIA"
        assert "6200177076" in body, f"Page {page} missing phone number 6200177076"
        assert "https://share.google/KetARk5s5CUDVXaoO" in body, f"Page {page} missing Google My Business link"
        assert "theme-toggle-btn" in body, f"Page {page} missing theme toggle button"
        assert "mobile-bottom-nav" in body, f"Page {page} missing mobile bottom navigation bar"
        print(f"PASS: {page} (Status: {code}, Length: {len(body)})")

# 1.1 Test Root Assets (CSS, JS, SVG) & Legacy Static Routing
assets = ["/style.css", "/app.js", "/invoice.js", "/reviews-data.js", "/favicon.svg", "/static/index.html", "/static/style.css"]
for asset in assets:
    url = base_url + asset
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as resp:
        code = resp.getcode()
        assert code == 200, f"Asset {asset} returned code {code}"
        print(f"PASS Asset: {asset} (Status: {code})")

# 2. Test Services API
with urllib.request.urlopen(base_url + "/api/services") as resp:
    data = json.loads(resp.read().decode('utf-8'))
    services = data.get("services", [])
    assert len(services) >= 10, f"Expected >= 10 services, got {len(services)}"
    print(f"PASS: /api/services returned {len(services)} services")

# 3. Test Order Creation API
order_payload = json.dumps({
    "customer": {
        "name": "Rohan Sharma",
        "phone": "+916200177076",
        "email": "rohan@example.com",
        "brand": "OSCA Brand Test"
    },
    "items": [
        {
            "id": "poster-insta-single",
            "title": "Instagram / FB High-Impact Creative",
            "category_name": "Social Media Posters",
            "price": 299,
            "quantity": 2
        }
    ],
    "subtotal": 598,
    "discount": 0,
    "total": 598,
    "coupon_code": None
}).encode('utf-8')

req = urllib.request.Request(base_url + "/api/orders", data=order_payload, headers={"Content-Type": "application/json"})
with urllib.request.urlopen(req) as resp:
    order_res = json.loads(resp.read().decode('utf-8'))
    assert order_res.get("success") == True, "Order creation failed"
    assert "916200177076" in order_res.get("whatsapp_url", ""), "WhatsApp URL missing 916200177076"
    assert order_res.get("order", {}).get("total") == 598, "Total mismatch"
    print(f"PASS: /api/orders created successfully (ID: {order_res.get('order', {}).get('order_id')})")

# 4. Test Contact / Inquiry API
contact_payload = json.dumps({
    "name": "Sameer Khan",
    "phone": "+916200177076",
    "service_type": "YouTube Thumbnails & Logo",
    "message": "Need urgent YouTube thumbnails for tech channel"
}).encode('utf-8')

req = urllib.request.Request(base_url + "/api/contact", data=contact_payload, headers={"Content-Type": "application/json"})
with urllib.request.urlopen(req) as resp:
    contact_res = json.loads(resp.read().decode('utf-8'))
    assert contact_res.get("success") == True, "Contact submission failed"
    assert "916200177076" in contact_res.get("whatsapp_url", ""), "WhatsApp URL missing in contact inquiry"
    print(f"PASS: /api/contact created inquiry successfully")

print("\nALL VERIFICATION TESTS PASSED 100%!")
