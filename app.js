/**
 * OSCA INDIA - Application Logic
 * Clean, Simple, High-Performance Graphic Design Platform
 */

// Complete Built-in Catalog Fallback (Guarantees services always load on port 5500, port 5000, or file://)
const DEFAULT_SERVICES = [
  {
    id: "poster-insta-single",
    category: "social",
    category_name: "Social Media Posters",
    title: "Instagram / FB High-Impact Creative",
    description: "Scroll-stopping social media poster (1080x1080 & 1080x1350) designed for high engagement, brand promotion, or product launches.",
    price: 299,
    delivery_time: "24 Hours",
    revisions: "Unlimited revisions",
    badge: "Bestseller",
    features: [
      "1080x1080 & 1080x1350 HD formats",
      "Custom brand colors & fonts",
      "Commercial usage rights",
      "Ready-to-post PNG & JPEG",
      "Source file included (PSD/Canva)"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "poster-festival-promo",
    category: "social",
    category_name: "Social Media Posters",
    title: "Festival & Promotional Event Poster",
    description: "Vibrant Indian festival greetings (Diwali, Eid, Holi, New Year) or business discount/sale offer posters tailored to your brand.",
    price: 399,
    delivery_time: "24 Hours",
    revisions: "3 Free Revisions",
    badge: "Popular",
    features: [
      "Indian festival & festive sale themes",
      "Brand logo & contact details integration",
      "Ultra HD 4K resolution output",
      "Story & Post sizes included",
      "Ready for WhatsApp status & ads"
    ],
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "poster-carousel-master",
    category: "social",
    category_name: "Social Media Posters",
    title: "Instagram Carousel Master (5-7 Slides)",
    description: "Multi-slide seamless carousel design crafted to maximize saves, shares, and educational storytelling for LinkedIn & Instagram.",
    price: 899,
    delivery_time: "48 Hours",
    revisions: "Unlimited revisions",
    badge: "High Engagement",
    features: [
      "Seamless slide-to-slide continuous flow",
      "5 to 7 high-retention graphic slides",
      "Call-to-action & swipe cues",
      "Custom infographics & icons",
      "Editable source files"
    ],
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "poster-linkedin-header",
    category: "social",
    category_name: "Social Media Posters",
    title: "LinkedIn & Twitter Executive Banner",
    description: "Professional header and banner for LinkedIn personal profiles, company pages, and Twitter/X profiles to establish authority.",
    price: 499,
    delivery_time: "24 Hours",
    revisions: "Unlimited revisions",
    badge: "Corporate",
    features: [
      "Exact platform safe-zone alignment",
      "Personal branding tagline & accolades",
      "High-DPI sharp typography",
      "Desktop & mobile responsive",
      "PNG + Source vector files"
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "thumb-viral-click",
    category: "thumbnails",
    category_name: "YouTube & Video Thumbnails",
    title: "Viral High-CTR YouTube Thumbnail",
    description: "High-click-through thumbnail engineered with emotional facial cutouts, glowing strokes, punchy 3D typography, and vivid contrast.",
    price: 349,
    delivery_time: "12-24 Hours",
    revisions: "Unlimited revisions",
    badge: "Trending",
    features: [
      "1280x720 HD optimized for mobile",
      "Expression enhancement & neon glow",
      "Bold typography with 3D depth",
      "Psychological CTR color theory",
      "Photoshop PSD source file"
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "thumb-5-pack",
    category: "thumbnails",
    category_name: "YouTube & Video Thumbnails",
    title: "YouTube Pro Creator 5-Thumbnail Pack",
    description: "Bundle of 5 high-performing thumbnails for your weekly videos or podcast episodes. Perfect for active YouTubers & streamers.",
    price: 1499,
    delivery_time: "48 Hours",
    revisions: "Unlimited revisions",
    badge: "Value Deal",
    features: [
      "5 Custom crafted thumbnails",
      "Consistent channel branding identity",
      "A/B test variations included",
      "Fast turnaround per release schedule",
      "Dedicated designer access"
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "thumb-reels-shorts",
    category: "thumbnails",
    category_name: "YouTube & Video Thumbnails",
    title: "Instagram Reels & YT Shorts Cover Art",
    description: "Aesthetic 9:16 vertical cover that blends flawlessly with your profile grid while grabbing eyes on the explore feed.",
    price: 249,
    delivery_time: "24 Hours",
    revisions: "Unlimited revisions",
    badge: "Essential",
    features: [
      "9:16 vertical layout (1080x1920)",
      "1:1 Instagram grid safe-zone preview",
      "Minimalist modern aesthetic",
      "Instant attention-grabbing text",
      "Ready-to-upload high-res JPEG"
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "logo-minimalist",
    category: "logos",
    category_name: "Logo & Brand Identity",
    title: "Modern Minimalist Vector Logo",
    description: "Timeless, clean, and memorable geometric or monogram logo tailored for startups, creator brands, and enterprises.",
    price: 799,
    delivery_time: "48 Hours",
    revisions: "Unlimited revisions",
    badge: "Signature",
    features: [
      "2 Unique original concept designs",
      "Vector AI, EPS, SVG, PDF, PNG, JPG",
      "Transparent background variations",
      "Black & white monochromatic versions",
      "100% vector scalability without quality loss"
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "logo-3d-mascot",
    category: "logos",
    category_name: "Logo & Brand Identity",
    title: "3D Mascot & Premium Emblem Logo",
    description: "Dynamic, illustrative, or 3D metallic textured logo for gaming clans, sports teams, luxury hospitality, or consumer brands.",
    price: 1499,
    delivery_time: "72 Hours",
    revisions: "Unlimited revisions",
    badge: "Premium",
    features: [
      "3 Custom mascot / 3D emblem concepts",
      "Photorealistic 3D mockups included",
      "Full commercial trademark copyright",
      "All source files (AI, PSD, EPS, SVG)",
      "Favicon & social profile ready"
    ],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "branding-full-suite",
    category: "logos",
    category_name: "Logo & Brand Identity",
    title: "Complete Brand Identity Master Suite",
    description: "Comprehensive corporate visual identity kit: Logo, Typography, Color Palette, Business Card, Letterhead, Social Kit & Brand Guidelines.",
    price: 3499,
    delivery_time: "4-5 Days",
    revisions: "Unlimited revisions",
    badge: "Complete Solution",
    features: [
      "Primary + Secondary Logo + Submarks",
      "Brand Style Guide PDF (Typography & Colors)",
      "Double-sided Business Card & Letterhead",
      "Social Media Kit (Avatar, Banners, Templates)",
      "All master vector source files"
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "print-business-card",
    category: "print",
    category_name: "Commercial & Print Media",
    title: "Luxury Double-Sided Business Card",
    description: "Sleek, print-ready premium business card with QR code integration, bleed margins, and spot-UV / gold-foil mockup options.",
    price: 399,
    delivery_time: "24 Hours",
    revisions: "Unlimited revisions",
    badge: "Print Ready",
    features: [
      "Double-sided custom layout",
      "Interactive QR code for contact/vCard/UPI",
      "CMYK 300 DPI print-ready PDF",
      "Bleed & cut margin guidelines",
      "Source files included"
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "print-flyer-brochure",
    category: "print",
    category_name: "Commercial & Print Media",
    title: "Commercial Flyer & Product Brochure",
    description: "High-converting single page or tri-fold marketing brochures and flyers for real estate, clinics, events, and restaurants.",
    price: 699,
    delivery_time: "48 Hours",
    revisions: "Unlimited revisions",
    badge: "Marketing",
    features: [
      "Single sheet or Bi-fold / Tri-fold format",
      "Custom illustrations & icons",
      "CMYK print-ready high resolution",
      "Digital PDF version for email & WhatsApp",
      "Master editable files"
    ],
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=700&q=80"
  }
];

// Global Theme Management System (Light & Dark Mode)
window.initTheme = function () {
  let saved = null;
  try {
    const params = new URLSearchParams(window.location.search);
    const queryTheme = params.get("theme");
    if (queryTheme === "light" || queryTheme === "dark") {
      localStorage.setItem("osca_theme", queryTheme);
      saved = queryTheme;
    } else {
      saved = localStorage.getItem("osca_theme");
    }
  } catch (e) {}

  if (!saved) {
    saved = "dark"; // Default to dark
  }

  if (saved === "light") {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }

  window.updateThemeToggleUI(saved);
};

window.toggleTheme = function () {
  const isLight = document.documentElement.classList.contains("light");
  const nextTheme = isLight ? "dark" : "light";

  if (nextTheme === "light") {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }

  try {
    localStorage.setItem("osca_theme", nextTheme);
  } catch (e) {}

  window.updateThemeToggleUI(nextTheme);

  if (typeof App !== "undefined" && typeof App.showToast === "function") {
    App.showToast(`Switched to ${nextTheme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}`, "info");
  }
};

window.updateThemeToggleUI = function (theme) {
  const isLight = theme === "light";
  document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
    const icon = btn.querySelector(".theme-icon");
    const label = btn.querySelector(".theme-label");

    if (isLight) {
      if (icon) {
        icon.className = "theme-icon fa-solid fa-moon text-purple-600 text-sm";
      }
      if (label) {
        label.textContent = "Dark";
      }
      btn.setAttribute("title", "Switch to Dark Mode");
      btn.setAttribute("aria-label", "Switch to Dark Mode");
    } else {
      if (icon) {
        icon.className = "theme-icon fa-solid fa-sun text-amber-400 text-sm";
      }
      if (label) {
        label.textContent = "Light";
      }
      btn.setAttribute("title", "Switch to Light Mode");
      btn.setAttribute("aria-label", "Switch to Light Mode");
    }
  });
};

// Run theme detection immediately
if (typeof document !== "undefined") {
  window.initTheme();
}

document.addEventListener("DOMContentLoaded", () => {
  window.initTheme();
  App.init();
});

const App = {
  services: [],
  cart: [],
  discountAmount: 0,
  activeCoupon: null,
  activeCategory: "all",
  officialPhone: "6200177076",
  officialWhatsApp: "916200177076",

  // Smart API Base URL Resolver
  getApiBaseUrl() {
    // If opened via VS Code Live Server (:5500) or other static server or file://
    if (window.location.protocol === "file:" || window.location.port === "5500" || window.location.port === "5501" || window.location.port === "3000" || window.location.port === "8080") {
      return "http://127.0.0.1:5000";
    }
    return "";
  },

  init() {
    this.loadCartFromStorage();
    this.fetchServices();
    this.setupEventListeners();
    this.renderCartUI();
    this.setupCalculator();
  },

  // Load cart from storage (Refreshes / resets on page reload)
  loadCartFromStorage() {
    try {
      // Check if page was refreshed/reloaded
      const navEntries = window.performance?.getEntriesByType?.("navigation");
      const isReload = (navEntries && navEntries[0]?.type === "reload") || (window.performance?.navigation?.type === 1);

      if (isReload) {
        localStorage.removeItem("osca_cart");
        sessionStorage.removeItem("osca_cart");
        this.cart = [];
        return;
      }

      const saved = localStorage.getItem("osca_cart");
      if (saved) {
        this.cart = JSON.parse(saved);
      } else {
        this.cart = [];
      }
    } catch (e) {
      console.error("Cart storage error:", e);
      this.cart = [];
    }
  },

  // Save cart
  saveCartToStorage() {
    try {
      localStorage.setItem("osca_cart", JSON.stringify(this.cart));
    } catch (e) {
      console.error("Save cart error:", e);
    }
  },

  // Fetch Services with Guaranteed Fallback (Zero Failures on any Port)
  async fetchServices() {
    const container = document.getElementById("services-grid");
    if (!container) return;

    let loaded = false;
    const baseUrl = this.getApiBaseUrl();

    // 1. Try local/configured API
    try {
      const primaryUrl = baseUrl ? `${baseUrl}/api/services` : "/api/services";
      const res = await fetch(primaryUrl);
      if (res.ok) {
        const data = await res.json();
        if (data.services && data.services.length > 0) {
          this.services = data.services;
          loaded = true;
        }
      }
    } catch (e) {
      console.warn("Primary API fetch skipped, trying alternate:", e);
    }

    // 2. If primary failed and wasn't using port 5000, try port 5000 directly
    if (!loaded && !baseUrl) {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/services");
        if (res.ok) {
          const data = await res.json();
          if (data.services && data.services.length > 0) {
            this.services = data.services;
            loaded = true;
          }
        }
      } catch (e2) {
        // Fallback below
      }
    }

    // 3. Guaranteed instant fallback to DEFAULT_SERVICES
    if (!loaded || !this.services || this.services.length === 0) {
      this.services = DEFAULT_SERVICES;
    }

    this.renderServices();
  },

  // Render Clean & De-congested Services Grid
  renderServices() {
    const container = document.getElementById("services-grid");
    if (!container) return;

    const filtered = this.activeCategory === "all"
      ? this.services
      : this.services.filter(s => s.category === this.activeCategory);

    if (filtered.length === 0) {
      container.innerHTML = `<div class="col-span-full text-center text-slate-400 py-12">No services found in this category.</div>`;
      return;
    }

    container.innerHTML = filtered.map(service => {
      const inCart = this.cart.some(item => item.id === service.id);
      return `
        <div class="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group">
          <!-- Clean Card Image -->
          <div class="relative h-52 overflow-hidden bg-slate-900">
            <img 
              src="${service.image}" 
              alt="${service.title}" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0f1626] via-transparent to-transparent"></div>
            
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-900/90 backdrop-blur text-cyan-400 border border-slate-700">
              ${service.category_name}
            </span>
          </div>

          <!-- Clean Card Content -->
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <div class="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span class="flex items-center gap-1.5">
                  <i class="fa-solid fa-bolt text-cyan-400 text-[10px]"></i> ${service.delivery_time}
                </span>
                <span class="flex items-center gap-1.5">
                  <i class="fa-solid fa-arrows-rotate text-purple-400 text-[10px]"></i> Unlimited revisions
                </span>
              </div>
              <h3 class="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                ${service.title}
              </h3>
              <p class="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                ${service.description}
              </p>
            </div>

            <!-- Price & Clean Add to Cart Button -->
            <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <span class="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider">Price</span>
                <span class="text-2xl font-black text-cyan-400 font-display">₹${service.price}</span>
              </div>
              
              <button 
                onclick="App.addToCart('${service.id}', event)"
                class="px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                  inCart 
                    ? 'bg-slate-800 text-cyan-400 border border-cyan-400/40' 
                    : 'btn-primary-action'
                }"
              >
                <i class="${inCart ? 'fa-solid fa-check' : 'fa-solid fa-cart-plus'}"></i>
                <span>${inCart ? 'Added (+1)' : 'Add to Cart'}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  // Setup Event Listeners
  setupEventListeners() {
    // Auto-adapt navigation links for VS Code Live Server (:5500) or file:// protocol
    if (window.location.protocol === "file:" || window.location.port === "5500" || window.location.port === "5501") {
      document.querySelectorAll("a[href]").forEach(a => {
        const href = a.getAttribute("href");
        if (href === "/about") a.setAttribute("href", "about.html");
        if (href === "/services") a.setAttribute("href", "services.html");
        if (href === "/contact") a.setAttribute("href", "contact.html");
        if (href === "/") a.setAttribute("href", "index.html");
        if (href === "/#google-reviews") a.setAttribute("href", "index.html#google-reviews");
      });
    }

    // Category Tabs Filter
    const tabs = document.querySelectorAll(".category-tab-btn");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => {
          t.classList.remove("bg-cyan-400", "text-slate-950", "font-bold");
          t.classList.add("bg-slate-900", "text-slate-400");
        });
        tab.classList.remove("bg-slate-900", "text-slate-400");
        tab.classList.add("bg-cyan-400", "text-slate-950", "font-bold");

        this.activeCategory = tab.dataset.category || "all";
        this.renderServices();
      });
    });

    // Cart Drawer Toggle
    const cartToggles = document.querySelectorAll(".btn-open-cart");
    const cartDrawer = document.getElementById("cart-drawer");
    const cartCloseBtn = document.getElementById("btn-close-cart");
    const cartBackdrop = document.getElementById("cart-backdrop");

    const openCart = () => {
      cartDrawer.classList.remove("translate-x-full");
      cartBackdrop.classList.remove("opacity-0", "pointer-events-none");
      document.body.style.overflow = "hidden";
    };

    const closeCart = () => {
      cartDrawer.classList.add("translate-x-full");
      cartBackdrop.classList.add("opacity-0", "pointer-events-none");
      document.body.style.overflow = "auto";
    };

    cartToggles.forEach(btn => btn.addEventListener("click", openCart));
    if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
    if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);

    // Coupon Code
    const btnApplyCoupon = document.getElementById("btn-apply-coupon");
    if (btnApplyCoupon) {
      btnApplyCoupon.addEventListener("click", () => {
        const input = document.getElementById("coupon-code");
        if (!input) return;
        const code = input.value.trim().toUpperCase();
        this.applyCoupon(code);
      });
    }

    // PDF Bill Button inside Drawer
    const btnDownloadPDF = document.getElementById("btn-download-pdf");
    if (btnDownloadPDF) {
      btnDownloadPDF.addEventListener("click", (e) => {
        e.preventDefault();
        this.handleOrderSubmission("pdf");
      });
    }

    // WhatsApp Order Button inside Drawer
    const btnWhatsAppOrder = document.getElementById("btn-whatsapp-order");
    if (btnWhatsAppOrder) {
      btnWhatsAppOrder.addEventListener("click", (e) => {
        e.preventDefault();
        this.handleOrderSubmission("whatsapp");
      });
    }

    // Custom Quote / Contact Form
    const contactForm = document.getElementById("custom-quote-form");
    if (contactForm) {
      contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        await this.handleCustomQuote(contactForm);
      });
    }
  },

  // Trigger Move Click Animation (Fly-to-Cart)
  triggerFlyToCart(sourceEl) {
    try {
      if (!sourceEl) return;
      const rect = sourceEl.getBoundingClientRect();
      if (!rect || rect.width === 0) return;

      // Source origin coordinates (center of button)
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height / 2;

      // Target cart element: prefer visible mobile/tablet bottom dock cart if active, else desktop header cart
      const mobCart = document.getElementById("mob-nav-cart");
      const desktopCart = document.querySelector(".btn-open-cart:not(#mob-nav-cart)");
      let targetCart = desktopCart;

      if (window.innerWidth < 1280 && mobCart && mobCart.offsetParent !== null) {
        targetCart = mobCart;
      } else if (!targetCart && mobCart) {
        targetCart = mobCart;
      }

      if (!targetCart) return;
      const destRect = targetCart.getBoundingClientRect();
      const endX = destRect.left + destRect.width / 2;
      const endY = destRect.top + destRect.height / 2;

      // Create flyer element
      const flyer = document.createElement("div");
      flyer.className = "fly-to-cart-item";
      flyer.innerHTML = `
        <div class="fly-icon-badge">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      `;
      document.body.appendChild(flyer);

      const deltaX = endX - startX;
      const deltaY = endY - startY;

      // Parabolic upward curve offset
      const curveHeight = deltaY > 0 ? -45 : -85;

      const animation = flyer.animate(
        [
          {
            transform: `translate3d(${startX}px, ${startY}px, 0) scale(1) rotate(0deg)`,
            opacity: 1
          },
          {
            transform: `translate3d(${startX + deltaX * 0.45}px, ${startY + deltaY * 0.45 + curveHeight}px, 0) scale(1.2) rotate(15deg)`,
            opacity: 0.95,
            offset: 0.45
          },
          {
            transform: `translate3d(${endX}px, ${endY}px, 0) scale(0.2) rotate(35deg)`,
            opacity: 0.25,
            offset: 0.95
          },
          {
            transform: `translate3d(${endX}px, ${endY}px, 0) scale(0) rotate(45deg)`,
            opacity: 0
          }
        ],
        {
          duration: 620,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          fill: "forwards"
        }
      );

      animation.onfinish = () => {
        flyer.remove();
        // Bump cart icon & badge
        targetCart.classList.remove("cart-bump");
        void targetCart.offsetWidth; // trigger reflow
        targetCart.classList.add("cart-bump");
        setTimeout(() => targetCart.classList.remove("cart-bump"), 550);

        const badge = targetCart.querySelector(".cart-count-badge");
        if (badge) {
          badge.classList.remove("badge-pop");
          void badge.offsetWidth;
          badge.classList.add("badge-pop");
          setTimeout(() => badge.classList.remove("badge-pop"), 450);
        }

        if (window.confetti) {
          const originX = endX / window.innerWidth;
          const originY = endY / window.innerHeight;
          window.confetti({
            particleCount: 16,
            spread: 45,
            startVelocity: 18,
            ticks: 50,
            origin: { x: originX, y: originY }
          });
        }
      };

      // Button tactile feedback animation
      sourceEl.classList.remove("btn-clicked-pop");
      void sourceEl.offsetWidth;
      sourceEl.classList.add("btn-clicked-pop");
      setTimeout(() => sourceEl.classList.remove("btn-clicked-pop"), 350);

      // Temporary checkmark feedback if text button
      const origHtml = sourceEl.innerHTML;
      if (!sourceEl.dataset.animating && (origHtml.includes("Add to Cart") || origHtml.includes("Add Package"))) {
        sourceEl.dataset.animating = "true";
        sourceEl.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i> Added!`;
        setTimeout(() => {
          sourceEl.innerHTML = origHtml;
          delete sourceEl.dataset.animating;
        }, 1100);
      }
    } catch (err) {
      console.warn("Fly to cart error:", err);
    }
  },

  // Add Item to Cart
  addToCart(serviceId, event) {
    const service = this.services.find(s => s.id === serviceId);
    if (!service) return;

    // Detect click source button for move click animation
    const clickEv = event || window.event;
    const btn = clickEv ? (clickEv.currentTarget || (clickEv.target && clickEv.target.closest("button"))) : null;
    if (btn) {
      this.triggerFlyToCart(btn);
    }

    const existingIndex = this.cart.findIndex(item => item.id === serviceId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += 1;
    } else {
      this.cart.push({
        id: service.id,
        title: service.title,
        category: service.category,
        category_name: service.category_name,
        price: service.price,
        delivery_time: service.delivery_time,
        quantity: 1,
        image: service.image
      });
    }

    this.saveCartToStorage();
    this.renderCartUI();
    this.renderServices();
    this.showToast(`Added: ${service.title}`, "success");
  },

  // Update Item Quantity
  updateQuantity(serviceId, delta) {
    const item = this.cart.find(it => it.id === serviceId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(serviceId);
      return;
    }

    this.saveCartToStorage();
    this.renderCartUI();
  },

  // Remove Item from Cart
  removeFromCart(serviceId) {
    const item = this.cart.find(it => it.id === serviceId);
    this.cart = this.cart.filter(it => it.id !== serviceId);
    this.saveCartToStorage();
    this.renderCartUI();
    this.renderServices();
    if (item) {
      this.showToast(`Removed from cart`, "info");
    }
  },

  // Clear Cart
  clearCart() {
    this.cart = [];
    this.discountAmount = 0;
    this.activeCoupon = null;
    try {
      localStorage.removeItem("osca_cart");
      sessionStorage.removeItem("osca_cart");
    } catch (e) {}
    this.saveCartToStorage();
    this.renderCartUI();
    this.renderServices();
    this.showToast("Cart refreshed & cleared", "info");
  },

  // Apply Coupon Code
  applyCoupon(code) {
    const subtotal = this.cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);
    if (subtotal === 0) {
      this.showToast("Your cart is empty", "warning");
      return;
    }

    if (code === "OSCA10") {
      this.discountAmount = Math.round(subtotal * 0.10);
      this.activeCoupon = "OSCA10";
      this.showToast("10% Discount Applied!", "success");
    } else if (code === "FIRST50") {
      this.discountAmount = Math.min(50, subtotal);
      this.activeCoupon = "FIRST50";
      this.showToast("₹50 Discount Applied!", "success");
    } else {
      this.showToast("Invalid coupon. Try: OSCA10", "warning");
      return;
    }

    this.renderCartUI();
  },

  // Render Cart UI
  renderCartUI() {
    const totalItems = this.cart.reduce((sum, it) => sum + it.quantity, 0);
    const badges = document.querySelectorAll(".cart-count-badge");
    badges.forEach(b => {
      b.textContent = totalItems;
      if (totalItems > 0) {
        b.classList.remove("hidden");
      } else {
        b.classList.add("hidden");
      }
    });

    const itemsContainer = document.getElementById("cart-items-list");
    const emptyState = document.getElementById("cart-empty-state");
    const cartFooter = document.getElementById("cart-footer");

    if (!itemsContainer) return;

    if (this.cart.length === 0) {
      itemsContainer.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      if (cartFooter) cartFooter.classList.add("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");
    if (cartFooter) cartFooter.classList.remove("hidden");

    itemsContainer.innerHTML = this.cart.map(item => `
      <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
        <img src="${item.image}" alt="${item.title}" class="w-12 h-12 object-cover rounded-lg bg-slate-800" />
        <div class="flex-1 min-w-0">
          <h4 class="text-xs font-bold text-white truncate">${item.title}</h4>
          <span class="text-[10px] text-cyan-400 block">${item.category_name}</span>
          <div class="flex items-center justify-between mt-1">
            <span class="text-sm font-bold text-white font-display">₹${item.price * item.quantity}</span>
            <div class="flex items-center gap-2 bg-slate-800 px-2 py-0.5 rounded-lg border border-slate-700">
              <button onclick="App.updateQuantity('${item.id}', -1)" class="text-slate-400 hover:text-white px-1 text-xs">-</button>
              <span class="text-xs font-bold text-cyan-400">${item.quantity}</span>
              <button onclick="App.updateQuantity('${item.id}', 1)" class="text-slate-400 hover:text-white px-1 text-xs">+</button>
            </div>
          </div>
        </div>
        <button onclick="App.removeFromCart('${item.id}')" class="text-slate-500 hover:text-red-400 p-2 text-xs transition-colors" title="Delete">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join("");

    const subtotal = this.cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);
    const discount = this.discountAmount || 0;
    const finalTotal = Math.max(0, subtotal - discount);

    const elSubtotal = document.getElementById("cart-subtotal");
    const elDiscount = document.getElementById("cart-discount");
    const elTotal = document.getElementById("cart-total");
    const elCouponRow = document.getElementById("cart-discount-row");

    if (elSubtotal) elSubtotal.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
    if (elDiscount) elDiscount.textContent = `-₹${discount.toLocaleString("en-IN")}`;
    if (elTotal) elTotal.textContent = `₹${finalTotal.toLocaleString("en-IN")}`;

    if (elCouponRow) {
      if (discount > 0) {
        elCouponRow.classList.remove("hidden");
      } else {
        elCouponRow.classList.add("hidden");
      }
    }
  },

  // Handle Order Submission
  async handleOrderSubmission(targetAction = "whatsapp") {
    if (this.cart.length === 0) {
      this.showToast("Cart is empty", "warning");
      return;
    }

    const nameInput = document.getElementById("client-name");
    const phoneInput = document.getElementById("client-phone");
    const brandInput = document.getElementById("client-brand");
    const emailInput = document.getElementById("client-email");
    const notesInput = document.getElementById("client-notes");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const brand = brandInput ? brandInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const notes = notesInput ? notesInput.value.trim() : "";

    if (!name) {
      this.showToast("Please enter your name", "warning");
      if (nameInput) nameInput.focus();
      return;
    }

    if (!phone || phone.length < 10) {
      this.showToast("Please enter a valid 10-digit phone number", "warning");
      if (phoneInput) phoneInput.focus();
      return;
    }

    const subtotal = this.cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);
    const discount = this.discountAmount || 0;
    const total = Math.max(0, subtotal - discount);

    const orderPayload = {
      customer: {
        name,
        phone,
        brand: brand || "Personal Brand",
        email: email || "client@oscaindia.com",
        notes: notes || "Standard high quality design"
      },
      items: this.cart,
      subtotal,
      discount,
      tax: 0,
      total,
      payment_method: "Verified WhatsApp Order"
    };

    try {
      this.showToast("Processing order...", "info");

      let data = null;
      try {
        const baseUrl = this.getApiBaseUrl();
        const apiUrl = baseUrl ? `${baseUrl}/api/orders` : "/api/orders";
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderPayload)
        });
        if (res.ok) {
          data = await res.json();
        }
      } catch (fetchErr) {
        console.warn("Backend order API offline/skipped, executing client fallback:", fetchErr);
      }

      const orderId = (data && data.order && data.order.order_id) || `OSCA-ORD-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      const confirmedOrder = (data && data.order) || {
        ...orderPayload,
        order_id: orderId,
        invoice_id: `OSCA-INV-${Date.now().toString().slice(-6)}`,
        created_date_str: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
        status: "Pending Confirmation"
      };

      if (window.confetti) {
        window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      }

      // Generate PDF Invoice
      if (window.InvoiceGenerator) {
        window.InvoiceGenerator.generatePDF(confirmedOrder);
        this.showToast("PDF Invoice downloaded!", "success");
      }

      // Format WhatsApp URL
      let whatsappUrl = data && data.whatsapp_url;
      if (!whatsappUrl) {
        const itemsLines = this.cart.map((it, idx) => `  ${idx + 1}. *${it.title}* (Qty: ${it.quantity}) — ₹${it.price * it.quantity}`).join("\n");
        const waMsg = (
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `🎨 *OSCA INDIA — DESIGN ORDER* 🎨\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
          `📋 *Order ID:* \`${orderId}\`\n` +
          `📅 *Date:* ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}\n\n` +
          `👤 *CLIENT DETAILS:*\n` +
          `• *Name:* ${name}\n` +
          `• *Phone:* ${phone}\n` +
          `• *Brand:* ${brand || "Personal Brand"}\n\n` +
          `🛒 *SERVICES ORDERED:*\n` +
          `${itemsLines}\n\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `💰 *TOTAL PAYABLE:* *₹${total}*\n` +
          `💳 *Payment:* Direct verification on WhatsApp\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
          `Hello OSCA India team! Please review my order and confirm delivery. Thank you! 🚀`
        );
        whatsappUrl = `https://wa.me/${this.officialWhatsApp}?text=${encodeURIComponent(waMsg)}`;
      }

      // If user clicked WhatsApp
      if (targetAction === "whatsapp") {
        setTimeout(() => {
          window.open(whatsappUrl, "_blank");
        }, 600);
      }

      this.showOrderSuccessModal(confirmedOrder, whatsappUrl);
      this.clearCart();

    } catch (err) {
      console.error("Order error:", err);
      if (window.InvoiceGenerator) {
        window.InvoiceGenerator.generatePDF(orderPayload);
      }
      const waMsg = encodeURIComponent(
        `Hi OSCA India! I want to order design services for ₹${total}. Client: ${name}, Phone: ${phone}. Please confirm!`
      );
      window.open(`https://wa.me/${this.officialWhatsApp}?text=${waMsg}`, "_blank");
    }
  },

  // Show Order Success Modal
  showOrderSuccessModal(order, whatsappUrl) {
    const modal = document.getElementById("success-modal");
    if (!modal) return;

    const elId = document.getElementById("modal-order-id");
    const elAmount = document.getElementById("modal-order-amount");
    const elClient = document.getElementById("modal-client-name");
    const btnWA = document.getElementById("modal-btn-whatsapp");
    const btnPDF = document.getElementById("modal-btn-download-pdf");

    if (elId) elId.textContent = order.order_id || order.invoice_id;
    if (elAmount) elAmount.textContent = `₹${order.total}`;
    if (elClient) elClient.textContent = order.customer.name;

    if (btnWA) {
      btnWA.href = whatsappUrl || `https://wa.me/${this.officialWhatsApp}`;
    }

    if (btnPDF) {
      btnPDF.onclick = () => {
        if (window.InvoiceGenerator) {
          window.InvoiceGenerator.generatePDF(order);
          this.showToast("Invoice downloaded!", "success");
        }
      };
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  },

  // Custom Quote / Contact
  async handleCustomQuote(form) {
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service_type: formData.get("service_type"),
      budget: formData.get("budget"),
      message: formData.get("message")
    };

    try {
      this.showToast("Submitting brief...", "info");
      const baseUrl = this.getApiBaseUrl();
      const apiUrl = baseUrl ? `${baseUrl}/api/contact` : "/api/contact";
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        this.showToast("Redirecting to WhatsApp...", "success");
        form.reset();
        setTimeout(() => {
          window.open(data.whatsapp_url, "_blank");
        }, 600);
      } else {
        this.showToast(data.error || "Submission failed", "warning");
      }
    } catch (err) {
      console.error(err);
      const fallbackMsg = encodeURIComponent(`Hi OSCA India! Design inquiry from ${payload.name} (${payload.phone}). Service: ${payload.service_type}. Details: ${payload.message}`);
      window.open(`https://wa.me/${this.officialWhatsApp}?text=${fallbackMsg}`, "_blank");
    }
  },

  // Clean Package Calculator
  setupCalculator() {
    const calcService = document.getElementById("calc-service");
    const calcQty = document.getElementById("calc-qty");
    const calcQtyVal = document.getElementById("calc-qty-val");
    const calcDelivery = document.getElementById("calc-delivery");
    const calcSource = document.getElementById("calc-source");
    const calcTotal = document.getElementById("calc-total-display");
    const btnAddCalcToCart = document.getElementById("btn-add-calc-to-cart");

    if (!calcService || !calcQty) return;

    const calculate = () => {
      const basePrices = {
        "insta-single": 299,
        "festival-poster": 399,
        "carousel": 899,
        "thumbnail": 349,
        "logo-vector": 799,
        "logo-3d": 1499,
        "business-card": 399
      };

      const selected = calcService.value;
      const base = basePrices[selected] || 299;
      const qty = parseInt(calcQty.value, 10) || 1;
      if (calcQtyVal) calcQtyVal.textContent = qty;

      let total = base * qty;

      if (calcDelivery && calcDelivery.value === "express") {
        total += 199;
      }

      if (calcSource && calcSource.checked) {
        total += 149 * qty;
      }

      if (calcTotal) {
        calcTotal.textContent = `₹${total.toLocaleString("en-IN")}`;
      }

      return { total, base, qty, selected };
    };

    calcService.addEventListener("change", calculate);
    calcQty.addEventListener("input", calculate);
    if (calcDelivery) calcDelivery.addEventListener("change", calculate);
    if (calcSource) calcSource.addEventListener("change", calculate);

    calculate();

    if (btnAddCalcToCart) {
      btnAddCalcToCart.addEventListener("click", () => {
        this.triggerFlyToCart(btnAddCalcToCart);
        const { total, qty, selected } = calculate();
        const titles = {
          "insta-single": "Custom Social Media Poster Bundle",
          "festival-poster": "Festival & Promotional Creative Pack",
          "carousel": "High-Impact Multi-Slide Carousel",
          "thumbnail": "High-CTR YouTube Thumbnails Pack",
          "logo-vector": "Custom Minimalist Brand Logo",
          "logo-3d": "Premium 3D Emblem & Mascot Logo",
          "business-card": "Print-Ready Corporate Stationery"
        };

        const item = {
          id: `custom-${selected}-${Date.now()}`,
          title: titles[selected] || "Custom Design Package",
          category: "custom",
          category_name: "Tailored Custom Pack",
          price: Math.round(total / qty),
          delivery_time: calcDelivery && calcDelivery.value === "express" ? "Express 12 Hours" : "Standard 24-48 Hours",
          quantity: qty,
          image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80"
        };

        this.cart.push(item);
        this.saveCartToStorage();
        this.renderCartUI();
        this.showToast(`Custom bundle added to cart!`, "success");

        const openBtn = document.querySelector(".btn-open-cart");
        if (openBtn) openBtn.click();
      });
    }
  },

  // Simple Toast Notification
  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl shadow-xl text-xs font-semibold backdrop-blur-md border ${
      type === "success" 
        ? "bg-emerald-950/90 text-emerald-300 border-emerald-500/40" 
        : type === "warning" 
        ? "bg-amber-950/90 text-amber-300 border-amber-500/40" 
        : "bg-slate-900/95 text-cyan-300 border-cyan-500/40"
    }`;

    toast.innerHTML = `
      <i class="${type === 'success' ? 'fa-solid fa-circle-check text-emerald-400' : type === 'warning' ? 'fa-solid fa-triangle-exclamation text-amber-400' : 'fa-solid fa-circle-info text-cyan-400'}"></i>
      <span class="flex-1">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-10px)";
        toast.style.transition = "all 0.2s ease";
        setTimeout(() => toast.remove(), 200);
      }
    }, 3000);
  }
};
