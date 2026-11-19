/**
 * OSCA INDIA - Application Logic
 * Clean, Simple, High-Performance Graphic Design Platform
 */

// Clean Address Bar: Remove .html or /index.html dynamically across all pages
(function cleanAddressBar() {
  try {
    if (typeof window === "undefined" || !window.location || window.location.protocol === "file:") return;
    const loc = window.location;
    const path = loc.pathname;
    if (path.endsWith("/index.html") || path === "/index.html") {
      const cleanPath = path.replace(/\/index\.html$/, "/") || "/";
      window.history.replaceState(null, "", cleanPath + loc.search + loc.hash);
    } else if (path.endsWith(".html")) {
      const cleanPath = path.replace(/\.html$/, "");
      window.history.replaceState(null, "", cleanPath + loc.search + loc.hash);
    }
  } catch (e) {}
})();

// Complete Built-in Catalog Fallback (Guarantees services always load on port 5500, port 5000, or file://)
const DEFAULT_SERVICES = [
  {
    "id": "service-political-single",
    "category": "political",
    "category_name": "Political Creatives",
    "title": "Political Leader Daily Poster (1 Slide)",
    "description": "High-impact 1080x1350 HD daily political creative for leaders, karyakartas, and public figures. Includes leader portrait retouching, party symbol, and daily Hindi quote/wishes.",
    "original_price": 399,
    "price": 199,
    "discount_percent": 50,
    "delivery_time": "12-24 Hours",
    "revisions": "Unlimited Revisions",
    "badge": "Leader Daily",
    "features": [
      "1080x1350 & 1080x1080 HD Formats",
      "Leader Portrait Cutout & HD Retouching",
      "Party Symbol, Name & Designation",
      "Daily Hindi Quote / Birthday / Naman",
      "Ready for WhatsApp Status & Social Post"
    ],
    "image": "https://lh3.googleusercontent.com/d/11RGcWS_YPUp6pyg8kGzOhNLHeYnYes7x=w320"
  },
  {
    "id": "service-election-rally",
    "category": "political",
    "category_name": "Political Creatives",
    "title": "Election Campaign & Rally Master Poster",
    "description": "High-energy political rally, pad yatra, jan sabha, and election campaign poster designed to mobilize voters and assert local dominance.",
    "original_price": 599,
    "price": 299,
    "discount_percent": 50,
    "delivery_time": "24 Hours",
    "revisions": "Unlimited Revisions",
    "badge": "Campaign Special",
    "features": [
      "High-Impact Slogans & Election Agenda",
      "Multi-Leader Hierarchy Photo Collage",
      "Rally Date, Venue & Route Map Layout",
      "Flex Banner & Digital Social Sizes Included",
      "Voter Outreach & WhatsApp Viral Design"
    ],
    "image": "https://lh3.googleusercontent.com/d/1kP5aCWlWIFyd4phPhY-pGpieDEDltD-U=w320"
  },
  {
    "id": "service-political-festival",
    "category": "political",
    "category_name": "Political Creatives",
    "title": "Festival & Jayanti Political Greeting",
    "description": "Festive, national day, and great freedom fighter jayanti tribute creative with leader photo, heartfelt regional message, and party branding.",
    "original_price": 499,
    "price": 249,
    "discount_percent": 50,
    "delivery_time": "24 Hours",
    "revisions": "3 Free Revisions",
    "badge": "Bestseller",
    "features": [
      "Vibrant Cultural / Jayanti Tribute Art",
      "Leader Photo & Party Logo Integration",
      "Custom Hindi & Regional Calligraphy",
      "Story (9:16) & Post (4:5) Formats",
      "Ready for Facebook, Twitter & WhatsApp"
    ],
    "image": "https://lh3.googleusercontent.com/d/1yeQhWyQO2a2EUD-Z8RFQB6lN56HImVdF=w320"
  },
  {
    "id": "service-carousel-bundle",
    "category": "social",
    "category_name": "Social Media & Reels",
    "title": "Political Report & Work Carousel (5-7 Slides)",
    "description": "Multi-slide swipeable political report card creative highlighting local development work, vikas yojana achievements, and constituency milestones.",
    "original_price": 999,
    "price": 499,
    "discount_percent": 50,
    "delivery_time": "24-48 Hours",
    "revisions": "Unlimited Revisions",
    "badge": "High Engagement",
    "features": [
      "5 to 7 Continuous Seamless Swipe Slides",
      "Vikas Karya / Work Report Showcase",
      "Infographics, Stats & Progress Highlights",
      "Instagram & Facebook Carousel Optimized",
      "PSD / AI Source File Pack Included"
    ],
    "image": "https://lh3.googleusercontent.com/d/1Y1nY1SjNGUFVU8ZSmyr7SjQTY31hv_q5=w320"
  },
  {
    "id": "service-reel-cover",
    "category": "social",
    "category_name": "Social Media & Reels",
    "title": "Viral Reel & Shorts Cover Art (1 Slide)",
    "description": "Scroll-stopping vertical (9:16) cover thumbnail for Instagram reels, YouTube shorts, and Facebook reels that boosts view-through rates.",
    "original_price": 399,
    "price": 199,
    "discount_percent": 50,
    "delivery_time": "12-24 Hours",
    "revisions": "Unlimited Revisions",
    "badge": "Viral Booster",
    "features": [
      "9:16 Ultra HD Mobile Optimized Dimensions",
      "High-CTR Clickable Hook Headline Text",
      "Leader Expressive Portrait Grading",
      "Safe Zone Guides for Captions & Icons",
      "Instant WhatsApp Status Ready"
    ],
    "image": "https://lh3.googleusercontent.com/d/14LIUgKeQj2FSihH925YM0EqqOLcA_CZg=w320"
  },
  {
    "id": "service-youtube-thumb",
    "category": "social",
    "category_name": "Social Media & Reels",
    "title": "High-CTR YouTube Political Thumbnail",
    "description": "1280x720 HD click-through-rate optimized political thumbnail for speech highlights, debates, press conferences, and sting revelations.",
    "original_price": 499,
    "price": 249,
    "discount_percent": 50,
    "delivery_time": "24 Hours",
    "revisions": "Unlimited Revisions",
    "badge": "High CTR",
    "features": [
      "1280x720 HD Click Magnet Design",
      "High Contrast Typography in Hindi/English",
      "Color Graded Leader Closeups & Glows",
      "A/B Testing Thumbnail Options",
      "Optimized for High Click-Through Rate"
    ],
    "image": "https://lh3.googleusercontent.com/d/1RNnpYR3WSpTT-tW1apYBDB0AKrGztle0=w320"
  },
  {
    "id": "service-birthday-wishes",
    "category": "campaign",
    "category_name": "Press & Events",
    "title": "Leader Birthday & Badhai Poster (बधाई पोस्टर)",
    "description": "Custom birthday congratulations creative with floral garlands, party flags, and heartfelt wishes from supporters and karyakartas.",
    "original_price": 399,
    "price": 199,
    "discount_percent": 50,
    "delivery_time": "12-24 Hours",
    "revisions": "Unlimited Revisions",
    "badge": "Birthday Special",
    "features": [
      "Festive Garland & Floral Typography",
      "Supporter & Karyakarta Name Panel",
      "Heartfelt Hindi Birthday Wishes",
      "Instant WhatsApp & Facebook Sharing",
      "High-Res Printing & Digital File"
    ],
    "image": "https://lh3.googleusercontent.com/d/1vIfkeFduZWoLcfmi6Lm0fb65AQxzi1t_=w320"
  },
  {
    "id": "service-national-day",
    "category": "campaign",
    "category_name": "Press & Events",
    "title": "National Day & Legal Awareness Creative (राष्ट्रीय दिवस)",
    "description": "National awareness, constitution day, legal awareness, and patriotic day creatives carrying official party and public messaging.",
    "original_price": 499,
    "price": 249,
    "discount_percent": 50,
    "delivery_time": "24 Hours",
    "revisions": "Unlimited Revisions",
    "badge": "National Tribute",
    "features": [
      "Tricolor Patriotic Background Styling",
      "Constitutional Quotes & National Symbols",
      "Leader Formal Portrait Integration",
      "WhatsApp & Social Media Sizes",
      "Print Quality 300 DPI Export"
    ],
    "image": "https://lh3.googleusercontent.com/d/1Y6nD4oqx05Lu3PedL_l1ylbcfW__SsXT=w320"
  },
  {
    "id": "service-press-release",
    "category": "campaign",
    "category_name": "Press & Events",
    "title": "Official Press Statement & Media Banner (प्रेस विज्ञप्ति)",
    "description": "Clean, authoritative statement graphic for press notes, media briefings, and official party viewpoints on burning public issues.",
    "original_price": 499,
    "price": 249,
    "discount_percent": 50,
    "delivery_time": "12-24 Hours",
    "revisions": "Unlimited Revisions",
    "badge": "Media Official",
    "features": [
      "Clean Newsroom & Press Layout",
      "Official Spokesperson Photo & Designation",
      "Formatted Bullet Points for Easy Reading",
      "Twitter / X Header & Post Optimized",
      "Printable PDF + PNG Formats"
    ],
    "image": "https://lh3.googleusercontent.com/d/1F3j7PQBY1ebflS7n8cigAIkUErM5YUe5=w320"
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

// 17 Authentic Client Artworks from OSCA INDIA Studio (Flat Single-Folder Architecture)
const SHOWCASE_ARTWORKS = [
  {
    id: "artwork-1",
    src: "https://lh3.googleusercontent.com/d/11RGcWS_YPUp6pyg8kGzOhNLHeYnYes7x=w400",
    title: "Geeta Shakya Ji Mahamantri Poster",
    category: "Political & Leadership Poster",
    price: 299,
    serviceId: "poster-insta-single"
  },
  {
    id: "artwork-2",
    src: "https://lh3.googleusercontent.com/d/15sY_7ai4O79qrTgo7jZgtPetyl4TF7n8=w400",
    title: "Bhagwan Chitragupt Poojan Creative",
    category: "Festival & Devotional Creative",
    price: 399,
    serviceId: "poster-festival-promo"
  },
  {
    id: "artwork-3",
    src: "https://lh3.googleusercontent.com/d/19EoAN7huhxlTGV0RJGLloRJXvfYao4Y7=w400",
    title: "Chitragupt Poojan & Deepawali Greeting",
    category: "Festival & Celebration Poster",
    price: 399,
    serviceId: "poster-festival-promo"
  },
  {
    id: "artwork-4",
    src: "https://lh3.googleusercontent.com/d/1gKXmO4WiQPAa7ZlnNotCP7EiIwWmbwcT=w400",
    title: "Bhai Dooj Sacred Festival Greeting",
    category: "Indian Festive Celebration",
    price: 399,
    serviceId: "poster-festival-promo"
  },
  {
    id: "artwork-5",
    src: "https://lh3.googleusercontent.com/d/14LIUgKeQj2FSihH925YM0EqqOLcA_CZg=w400",
    title: "Virat Kohli Birthday Celebration Creative",
    category: "Sports & Celebrity Creative",
    price: 299,
    serviceId: "poster-insta-single"
  },
  {
    id: "artwork-6",
    src: "https://lh3.googleusercontent.com/d/1L3AfX0ETSeeKS3PruH7XDPxN1V5Gqvm1=w400",
    title: "Acharya J.B. Kripalani Ji Jayanti Naman",
    category: "Freedom Fighter Tribute Poster",
    price: 299,
    serviceId: "poster-insta-single"
  },
  {
    id: "artwork-7",
    src: "https://lh3.googleusercontent.com/d/1Y6nD4oqx05Lu3PedL_l1ylbcfW__SsXT=w400",
    title: "Rashtriya Vidhik Seva Diwas Poster",
    category: "National Law & Awareness Creative",
    price: 299,
    serviceId: "poster-insta-single"
  },
  {
    id: "artwork-8",
    src: "https://lh3.googleusercontent.com/d/1vIfkeFduZWoLcfmi6Lm0fb65AQxzi1t_=w400",
    title: "Tejashwi Yadav Ji Birthday Poster",
    category: "Leadership & Dignitary Creative",
    price: 299,
    serviceId: "poster-insta-single"
  },
  {
    id: "artwork-9",
    src: "https://lh3.googleusercontent.com/d/1kP5aCWlWIFyd4phPhY-pGpieDEDltD-U=w400",
    title: "Tejashwi Yadav Ji - Sangharsh Poster",
    category: "Political Campaign Graphic",
    price: 299,
    serviceId: "poster-insta-single"
  },
  {
    id: "artwork-10",
    src: "https://lh3.googleusercontent.com/d/1Y1nY1SjNGUFVU8ZSmyr7SjQTY31hv_q5=w400",
    title: "Tejashwi Yadav Ji Janseva Creative",
    category: "Leadership & Youth Icon Poster",
    price: 299,
    serviceId: "poster-insta-single"
  },
  {
    id: "artwork-11",
    src: "https://lh3.googleusercontent.com/d/1-gVCc8y5tLgC8Fi4zeX5msD_g8nI7dEV=w400",
    title: "Bali Pratipada evam Diwali Padwa Poster",
    category: "Vibrant Festival Creative",
    price: 399,
    serviceId: "poster-festival-promo"
  },
  {
    id: "artwork-12",
    src: "https://lh3.googleusercontent.com/d/1yeQhWyQO2a2EUD-Z8RFQB6lN56HImVdF=w400",
    title: "Diwali Padwa & Shubh Muhurat Creative",
    category: "Festive Greeting Design",
    price: 399,
    serviceId: "poster-festival-promo"
  },
  {
    id: "artwork-13",
    src: "https://lh3.googleusercontent.com/d/1RNnpYR3WSpTT-tW1apYBDB0AKrGztle0=w400",
    title: "Bhagwan Birsa Munda Ji Jayanti Tribute",
    category: "National Hero Tribute Poster",
    price: 299,
    serviceId: "poster-insta-single"
  },
  {
    id: "artwork-14",
    src: "https://lh3.googleusercontent.com/d/1KcRJQ9N-Qu6IGyunu6K2gBy7mUcX_1Zp=w400",
    title: "Dr. Salim Ali (Birdman of India) Jayanti",
    category: "Memorial & Awareness Graphic",
    price: 299,
    serviceId: "poster-insta-single"
  },
  {
    id: "artwork-15",
    src: "https://lh3.googleusercontent.com/d/1F3j7PQBY1ebflS7n8cigAIkUErM5YUe5=w400",
    title: "Pandit Jawaharlal Nehru Ji Jayanti",
    category: "Bal Diwas & Leader Tribute",
    price: 299,
    serviceId: "poster-insta-single"
  },
  {
    id: "artwork-16",
    src: "https://lh3.googleusercontent.com/d/1iVBH2hG62n-jzxuo25aBpwX_nJmsxYQq=w400",
    title: "Yogi Raj Shri Shambhu Raje Tribute",
    category: "Historical & Devotional Poster",
    price: 399,
    serviceId: "poster-festival-promo"
  },
  {
    id: "artwork-17",
    src: "https://lh3.googleusercontent.com/d/1u7TcAnhmZLlkyBz8OOoWRQ6Ze4PXM16O=w400",
    title: "Dr. APJ Abdul Kalam Inspirational Quote",
    category: "Motivational Quote Graphic",
    price: 299,
    serviceId: "poster-insta-single"
  }
];

// 5 Authentic Product Flash Offers with Verified Discount Coupons (10% to 20% OFF)
const FLASH_OFFERS = [
  {
    id: "offer-youtube",
    badge: "🔥 FLASH DEAL • 15% OFF",
    title: "YouTube Viral Thumbnails",
    code: "THUMB15",
    desc: "Get 15% OFF on high-CTR 3D text & face cutout YouTube thumbnails!",
    iconClass: "fa-brands fa-youtube text-red-500",
    serviceId: "thumb-pack-3"
  },
  {
    id: "offer-poster",
    badge: "⚡ CREATOR SPECIAL • 10% OFF",
    title: "Social Media / Political Poster",
    code: "POSTER10",
    desc: "Flat 10% discount on single HD Instagram & Facebook event graphics.",
    iconClass: "fa-solid fa-wand-magic-sparkles text-cyan-400",
    serviceId: "poster-insta-single"
  },
  {
    id: "offer-retainer",
    badge: "🚀 VIP PLAN • 20% OFF",
    title: "Monthly Dedicated Retainer",
    code: "BRAND20",
    desc: "Flat 20% OFF on 30-day dedicated design retainer for brands & leaders!",
    iconClass: "fa-solid fa-crown text-emerald-400",
    serviceId: "plan-basic-monthly"
  },
  {
    id: "offer-logo",
    badge: "🌟 LOGO BRANDING • 15% OFF",
    title: "Minimalist Vector Logo Suite",
    code: "OSCA15",
    desc: "Get 15% OFF on scalable vector logo, SVG source files & branding guidelines.",
    iconClass: "fa-solid fa-pen-nib text-fuchsia-400",
    serviceId: "logo-minimal-vector"
  },
  {
    id: "offer-festival",
    badge: "🎉 FESTIVAL OFFER • 10% OFF",
    title: "Festival & Event Campaigns",
    code: "OSCA10",
    desc: "Save 10% on vibrant celebration & festival creatives with rapid 24h turnaround.",
    iconClass: "fa-solid fa-bullhorn text-amber-400",
    serviceId: "poster-festival-promo"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  window.initTheme();
  App.init();
  if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
});

const App = {
  services: [],
  cart: [],
  discountAmount: 0,
  activeCoupon: null,
  activeCategory: "all",
  officialPhone: "6200177076",
  officialWhatsApp: "916200177076",
  paymentMethod: "online",
  officialUpiId: "6200177076@ptsbi",
  selectedScreenshotFile: null,
  uploadedScreenshotUrl: null,
  showcaseArtworks: SHOWCASE_ARTWORKS,
  showcaseCurrentIndex: 0,
  showcaseInterval: null,
  showcaseIsPaused: false,

  // Full Retainer Plans Registry for Guaranteed Cart Support
  retainerPlans: [
    {
      id: "plan-basic-monthly",
      category: "monthly",
      category_name: "Monthly Retainer Package",
      title: "Social Media Basic Plan (3 Posters / Day)",
      description: "Daily personal branding for local leaders & public figures. 3 daily posters and content copywriting.",
      price: 1500,
      original_price: 2500,
      discount_percent: 40,
      delivery_time: "Daily Morning Delivery (30 Days)",
      revisions: "Unlimited Revisions",
      image: "https://lh3.googleusercontent.com/d/11RGcWS_YPUp6pyg8kGzOhNLHeYnYes7x=w600"
    },
    {
      id: "plan-standard-monthly",
      category: "monthly",
      category_name: "Monthly Retainer Package",
      title: "Social Media Standard Plan (5 Posters / Day + Reels)",
      description: "Aggressive outreach for Zila Parishad & Vidhansabha leaders. 5 daily posters, 2 weekly video reels, 1 platform distribution.",
      price: 2500,
      original_price: 4000,
      discount_percent: 38,
      delivery_time: "Daily Delivery + Weekly Reels (30 Days)",
      revisions: "Unlimited Revisions",
      image: "https://lh3.googleusercontent.com/d/1kP5aCWlWIFyd4phPhY-pGpieDEDltD-U=w600"
    },
    {
      id: "plan-premium-monthly",
      category: "monthly",
      category_name: "Monthly Retainer Package",
      title: "Social Media Premium Plan (8 Posters / Day + Video Editing)",
      description: "Full political PR war-room management for MLAs and State Leaders. 8 daily posters, 4 weekly reels, daily speech video editing, and 24/7 dedicated designer.",
      price: 5000,
      original_price: 8000,
      discount_percent: 38,
      delivery_time: "Dedicated 24/7 Team (30 Days)",
      revisions: "Unlimited Revisions",
      image: "https://lh3.googleusercontent.com/d/1iVBH2hG62n-jzxuo25aBpwX_nJmsxYQq=w600"
    },
    {
      id: "plan-custom-campaign",
      category: "monthly",
      category_name: "Custom Tailored Package",
      title: "Custom Political Campaign & Brand Retainer",
      description: "Tailored full-scale campaign management for election season, political parties, or high-volume enterprise brands.",
      price: 6999,
      original_price: 9999,
      discount_percent: 30,
      delivery_time: "Tailored Delivery Schedule",
      revisions: "Unlimited Revisions",
      image: "https://lh3.googleusercontent.com/d/1Y1nY1SjNGUFVU8ZSmyr7SjQTY31hv_q5=w600"
    }
  ],

  
  // Synchronize Monthly Pricing Plan Buttons with Active Cart State
  updatePlanButtons() {
    const plans = [
      { id: "plan-basic-monthly", btnId: "btn-plan-basic", origClass: "btn-primary-action" },
      { id: "plan-standard-monthly", btnId: "btn-plan-standard", origClass: "btn-primary-action" },
      { id: "plan-premium-monthly", btnId: "btn-plan-premium", origClass: "bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-extrabold shadow-orange-500/20" },
      { id: "plan-custom-campaign", btnId: "btn-plan-custom", origClass: "btn-secondary-action" }
    ];

    plans.forEach(p => {
      const btns = Array.from(document.querySelectorAll(`button[onclick*="addToCart('${p.id}'"], #${p.btnId}`));
      const cartItem = this.cart.find(it => it.id === p.id);
      
      btns.forEach(btn => {
        if (cartItem) {
          btn.innerHTML = `<i class="fa-solid fa-check text-[10px]"></i> <span>In Cart (${cartItem.quantity})</span>`;
          btn.style.backgroundColor = "#059669";
          btn.style.borderColor = "#10b981";
          btn.style.color = "#ffffff";
          btn.style.boxShadow = "0 6px 20px rgba(16, 185, 129, 0.4)";
          btn.classList.add("plan-in-cart-active");
        } else {
          btn.innerHTML = `<i class="fa-solid fa-cart-plus text-[10px]"></i> <span>Add to Cart</span>`;
          btn.style.backgroundColor = "";
          btn.style.borderColor = "";
          btn.style.color = "";
          btn.style.boxShadow = "";
          btn.classList.remove("plan-in-cart-active");
        }
      });
    });
  },

  // Open & Close Cart Helpers
  openCart() {
    const cartDrawer = document.getElementById("cart-drawer");
    const cartBackdrop = document.getElementById("cart-backdrop");
    const floatingActions = document.querySelector(".floating-actions");
    if (cartDrawer) cartDrawer.classList.remove("translate-x-full");
    if (cartBackdrop) cartBackdrop.classList.remove("opacity-0", "pointer-events-none");
    if (floatingActions) {
      floatingActions.classList.add("hidden-during-cart");
      floatingActions.style.opacity = "0";
      floatingActions.style.pointerEvents = "none";
      floatingActions.style.visibility = "hidden";
    }
    document.body.classList.add("cart-open");
    document.body.style.overflow = "hidden";
  },

  closeCart() {
    const cartDrawer = document.getElementById("cart-drawer");
    const cartBackdrop = document.getElementById("cart-backdrop");
    const floatingActions = document.querySelector(".floating-actions");
    if (cartDrawer) cartDrawer.classList.add("translate-x-full");
    if (cartBackdrop) cartBackdrop.classList.add("opacity-0", "pointer-events-none");
    if (floatingActions) {
      floatingActions.classList.remove("hidden-during-cart");
      floatingActions.style.opacity = "";
      floatingActions.style.pointerEvents = "";
      floatingActions.style.visibility = "";
    }
    document.body.classList.remove("cart-open");
    document.body.style.overflow = "auto";
  },

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
    this.updatePlanButtons();
    this.renderCartUI();
    this.setupCalculator();
    this.initShowcaseSlider();
    this.initArtworkReel();
    this.initFlashOffers();
    this.initAnimations();
  },

  // Load cart from storage (Refreshes / resets on page reload)
  // Load cart from storage (Guaranteed fresh & reset on every refresh, reload & new visit)
  loadCartFromStorage() {
    try {
      localStorage.removeItem("osca_cart");
      sessionStorage.removeItem("osca_cart");
      this.cart = [];
    } catch (e) {
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

  // Initialize Services Instantly with Guaranteed Zero-Latency & Zero-Error
  async fetchServices() {
    const container = document.getElementById("services-grid");
    if (!container) return;

    // Use DEFAULT_SERVICES directly for instantaneous 0ms rendering and zero 404 console errors
    this.services = Array.isArray(DEFAULT_SERVICES) && DEFAULT_SERVICES.length > 0 ? DEFAULT_SERVICES : [];
    this.renderServices();
  },

  // Render Clean & De-congested Services Grid
  renderServices() {
    const container = document.getElementById("services-grid");
    if (!container) return;

    // Detect if we are on services page or homepage
    const isServicesPage = window.location.pathname.toLowerCase().includes("services") || 
                           window.location.href.toLowerCase().includes("services") ||
                           (document.title && document.title.toLowerCase().includes("services"));
    const isHomePage = !isServicesPage;

    let filtered = this.activeCategory === "all"
      ? this.services
      : this.services.filter(s => s.category === this.activeCategory);

    // On homepage, only display 4 items as requested by user; rest can be explored on services.html
    if (isHomePage) {
      filtered = filtered.slice(0, 4);
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div class="col-span-full text-center text-slate-400 py-12">No services found in this category.</div>`;
      return;
    }

    const totalCount = filtered.length;

    container.innerHTML = filtered.map((service, index) => {
      const cartItem = this.cart.find(item => item.id === service.id);
      const inCart = !!cartItem;
      const quantity = cartItem ? cartItem.quantity : 0;
      const origPrice = service.original_price || Math.round(service.price * 1.8);
      const discountPercent = service.discount_percent || Math.round(((origPrice - service.price) / origPrice) * 100);
      const saveAmount = origPrice - service.price;

      // On 2-column mobile screens, if there is a single leftover card, span it full width
      const isOddLast = (index === totalCount - 1) && (totalCount % 2 !== 0);
      const colSpanClass = isOddLast ? "col-span-2 md:col-span-1" : "";

      return `
        <div class="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group ${colSpanClass}">
          <!-- 100% Full-Frame Poster Fit (4:5 Aspect Ratio, Never Cropping Heads or Titles) -->
          <div class="relative aspect-[4/5] overflow-hidden bg-slate-950 flex items-center justify-center p-1.5 sm:p-2 rounded-t-2xl border-b border-slate-800/80">
            <!-- Soft Ambient Glow matching the poster's exact colors (Optimized Lightweight 60px blurred thumbnail) -->
            <img 
              src="${service.image ? (service.image.split('=')[0] + '=w60') : ''}" 
              alt="" 
              class="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-125 pointer-events-none"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
            <!-- 100% Full-Frame Poster (Zero Head Cropping, Zero Text Cropping) -->
            <img src="${(service.image || "").includes("googleusercontent.com") ? (service.image.split("=")[0] + "=w500") : service.image}" alt="${service.title}" width="320" height="400" class="relative z-10 w-full h-full object-contain rounded-xl drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" decoding="async" />
            
            <span class="absolute top-2 sm:top-3 left-2 sm:left-3 z-20 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[8px] sm:text-[10px] font-bold bg-slate-900/90 backdrop-blur-md text-cyan-400 border border-slate-700/80 shadow-md">
              ${service.category_name}
            </span>

            <span class="absolute top-2 sm:top-3 right-2 sm:right-3 z-20 px-1.5 sm:px-2 py-0.5 rounded-md sm:rounded-lg text-[8px] sm:text-[10px] font-black bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md flex items-center gap-1">
              <i class="fa-solid fa-tag text-[7px] sm:text-[8px]"></i>
              <span>${discountPercent}% OFF</span>
            </span>
          </div>

          <!-- Clean Card Content (2-Column Mobile Friendly) -->
          <div class="p-3 sm:p-6 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-4">
            <div>
              <div class="flex items-center justify-between text-[10px] sm:text-xs text-slate-400 mb-1">
                <span class="flex items-center gap-1">
                  <i class="fa-solid fa-bolt text-cyan-400 text-[9px] sm:text-[10px]"></i> ${service.delivery_time}
                </span>
                <a 
                  href="services.html" 
                  class="inline-flex items-center gap-1.5 py-2 px-2.5 min-h-[44px] text-[11px] sm:text-xs text-cyan-400 hover:text-cyan-300 font-bold transition-colors group/link rounded-lg hover:bg-cyan-500/10"
                  title="View full details and package pricing on Services page"
                >
                  <span>Details</span>
                  <i class="fa-solid fa-arrow-right text-[8px] sm:text-[9px] group-hover/link:translate-x-0.5 transition-transform"></i>
                </a>
              </div>
              <h3 class="text-xs sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2">
                ${service.title}
              </h3>
              <p class="text-slate-400 text-[10px] sm:text-xs mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
                ${service.description}
              </p>
            </div>

            <!-- Price with Original MRP, Discount & Final Selling Price -->
            <div class="service-pricing-row pt-2.5 sm:pt-4 border-t border-slate-800/80">
              <div class="service-pricing-info">
                <div class="service-pricing-mrp">
                  <span class="text-[10px] sm:text-xs line-through text-slate-400 font-semibold font-display">₹${origPrice}</span>
                  <span class="text-[8px] sm:text-[9px] font-black text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.5 rounded uppercase tracking-wide">
                    SAVE ₹${saveAmount}
                  </span>
                </div>
                <div class="service-pricing-final">
                  <span class="text-xl sm:text-2xl font-black text-cyan-400 font-display tracking-tight leading-none">₹${service.price}</span>
                  <span class="text-[9px] sm:text-[10px] text-slate-400 font-medium">Offer Price</span>
                </div>
              </div>
              
              <button 
                onclick="App.addToCart('${service.id}', event)"
                class="service-card-cart-btn font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 shrink-0 ${
                  inCart 
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/25' 
                    : 'btn-primary-action'
                }"
                aria-label="${inCart ? 'Item in cart' : 'Add ' + service.title + ' to cart'}"
              >
                <i class="${inCart ? 'fa-solid fa-check text-xs' : 'fa-solid fa-cart-shopping text-xs'}"></i>
                <span class="whitespace-nowrap">${inCart ? `In Cart (${quantity})` : 'Add to Cart'}</span>
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
    const cartCloseBtn = document.getElementById("btn-close-cart");
    const cartBackdrop = document.getElementById("cart-backdrop");

    cartToggles.forEach(btn => btn.addEventListener("click", () => this.openCart()));
    if (cartCloseBtn) cartCloseBtn.addEventListener("click", () => this.closeCart());
    if (cartBackdrop) cartBackdrop.addEventListener("click", () => this.closeCart());

    // Auto-hide floating action buttons when footer is scrolled into view (prevents covering footer buttons)
    try {
      const footerElement = document.querySelector("footer");
      if (footerElement && "IntersectionObserver" in window) {
        const footerObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              document.body.classList.add("footer-in-view");
            } else {
              document.body.classList.remove("footer-in-view");
            }
          });
        }, { threshold: 0.05 });
        footerObserver.observe(footerElement);
      }
    } catch (e) {}

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

      // Button tactile + pop pulse animation
      sourceEl.classList.remove("btn-add-cart-pop", "btn-clicked-pop");
      void sourceEl.offsetWidth;
      sourceEl.classList.add("btn-add-cart-pop");
      setTimeout(() => sourceEl.classList.remove("btn-add-cart-pop"), 450);

      // Temporary checkmark feedback on button
      const origHtml = sourceEl.innerHTML;
      if (!sourceEl.dataset.animating && (origHtml.includes("Add to Cart") || origHtml.includes("Add Package") || origHtml.includes("In Cart"))) {
        sourceEl.dataset.animating = "true";
        sourceEl.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-300"></i> <span>Added! ✓</span>`;
        sourceEl.style.backgroundColor = "#059669";
        sourceEl.style.color = "#ffffff";
        sourceEl.style.borderColor = "#10b981";
        setTimeout(() => {
          sourceEl.style.backgroundColor = "";
          sourceEl.style.color = "";
          sourceEl.style.borderColor = "";
          delete sourceEl.dataset.animating;
        }, 1200);
      }

      const rect = sourceEl.getBoundingClientRect();
      if (!rect || rect.width === 0) return;

      // Source origin coordinates (center of button)
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height / 2;

      // Target cart element: Always target floating cart button directly above Call & WhatsApp
      const floatingCart = document.getElementById("floating-cart-btn");
      const desktopCart = document.querySelector(".btn-open-cart:not(#mob-nav-cart)");
      const mobCart = document.getElementById("mob-nav-cart");
      let targetCart = floatingCart || desktopCart || mobCart;

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
            transform: `translate3d(${startX + deltaX * 0.45}px, ${startY + deltaY * 0.45 + curveHeight}px, 0) scale(1.25) rotate(15deg)`,
            opacity: 0.95,
            offset: 0.45
          },
          {
            transform: `translate3d(${endX}px, ${endY}px, 0) scale(0.25) rotate(35deg)`,
            opacity: 0.3,
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
        // Bump floating cart button directly above Call & WhatsApp
        if (targetCart) {
          targetCart.classList.remove("cart-animate-react", "cart-bump");
          void targetCart.offsetWidth; // trigger reflow
          targetCart.classList.add("cart-animate-react");
          setTimeout(() => targetCart.classList.remove("cart-animate-react"), 750);
        }

        const badge = document.getElementById("floating-cart-badge") || (targetCart && targetCart.querySelector(".cart-count-badge"));
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
            particleCount: 18,
            spread: 50,
            startVelocity: 16,
            ticks: 50,
            origin: { x: originX, y: originY }
          });
        }
      };
    } catch (err) {
      console.warn("Fly to cart error:", err);
    }
  },

  // Add Item to Cart (Fully supporting all 9 Services & all 4 Monthly Retainer Plans)
  addToCart(serviceId, event) {
    let service = this.services.find(s => s.id === serviceId);
    if (!service && this.retainerPlans) {
      service = this.retainerPlans.find(p => p.id === serviceId);
    }
    if (!service) {
      const aliasMap = {
        "plan-basic-monthly": this.retainerPlans ? this.retainerPlans[0] : null,
        "plan-standard-monthly": this.retainerPlans ? this.retainerPlans[1] : null,
        "plan-premium-monthly": this.retainerPlans ? this.retainerPlans[2] : null,
        "plan-custom-campaign": this.retainerPlans ? this.retainerPlans[3] : null,
        "plan-custom-monthly": this.retainerPlans ? this.retainerPlans[3] : null,
        "poster-insta-single": this.services[0],
        "poster-festival-promo": this.services[2]
      };
      service = aliasMap[serviceId];
    }

    if (!service) {
      console.warn("Service not found for ID:", serviceId);
      return;
    }

    // Detect click source button for tactile + fly-to-cart animation
    const clickEv = event || window.event;
    const btn = clickEv ? (clickEv.currentTarget || (clickEv.target && clickEv.target.closest("button"))) : null;
    if (btn) {
      this.triggerFlyToCart(btn);
    }

    this.trackAnalyticsEvent("add_to_cart", {
      item_id: service.id || 'service-item',
      item_name: service.title,
      price: service.price,
      currency: "INR"
    });

    const existingIndex = this.cart.findIndex(item => item.id === service.id);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += 1;
    } else {
      this.cart.push({
        id: service.id,
        title: service.title,
        category: service.category || "monthly",
        category_name: service.category_name || "Monthly Package",
        price: service.price,
        delivery_time: service.delivery_time || "Standard Delivery",
        quantity: 1,
        image: service.image || "https://lh3.googleusercontent.com/d/11RGcWS_YPUp6pyg8kGzOhNLHeYnYes7x=w600"
      });
    }

    this.saveCartToStorage();
    this.renderCartUI();
    this.renderServices();
    this.updatePlanButtons();
    this.showToast(`Added to Cart: ${service.title}`, "success");
    this.bounceFloatingCart();
  },

  // Energetically animate & react the floating cart button directly above Call & WhatsApp
  bounceFloatingCart() {
    const floatingBtn = document.getElementById("floating-cart-btn");
    if (floatingBtn) {
      floatingBtn.classList.remove("cart-animate-react");
      void floatingBtn.offsetWidth;
      floatingBtn.classList.add("cart-animate-react");
      setTimeout(() => floatingBtn.classList.remove("cart-animate-react"), 750);
    }
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

    const cleanCode = (code || "").trim().toUpperCase();
    if (cleanCode === "OSCA10" || cleanCode === "POSTER10") {
      this.discountAmount = Math.round(subtotal * 0.10);
      this.activeCoupon = cleanCode;
      this.showToast("🎉 10% Discount Applied!", "success");
    } else if (cleanCode === "OSCA15" || cleanCode === "THUMB15") {
      this.discountAmount = Math.round(subtotal * 0.15);
      this.activeCoupon = cleanCode;
      this.showToast("🔥 15% Exclusive Discount Applied!", "success");
    } else if (cleanCode === "OSCA20" || cleanCode === "BRAND20") {
      this.discountAmount = Math.round(subtotal * 0.20);
      this.activeCoupon = cleanCode;
      this.showToast("🚀 20% Mega Creator Discount Applied!", "success");
    } else if (cleanCode === "FIRST50") {
      this.discountAmount = Math.min(50, subtotal);
      this.activeCoupon = "FIRST50";
      this.showToast("✨ ₹50 Instant Cashback Applied!", "success");
    } else {
      this.showToast("Invalid coupon. Try: OSCA10, OSCA15, OSCA20", "warning");
      return;
    }

    if (window.confetti) {
      try {
        window.confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}
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

    // Update floating cart action button visibility and badge
    const floatingCartBtn = document.getElementById("floating-cart-btn");
    const floatingBadge = document.getElementById("floating-cart-badge");

    if (floatingCartBtn) {
      floatingCartBtn.style.display = "flex";
      floatingCartBtn.classList.remove("hidden");
      if (totalItems > 0) {
        floatingCartBtn.classList.add("cart-has-items");
      } else {
        floatingCartBtn.classList.remove("cart-has-items");
      }
    }

    if (floatingBadge) {
      floatingBadge.textContent = totalItems;
      floatingBadge.classList.remove("scale-0");
      floatingBadge.classList.add("scale-100");
      if (totalItems > 0) {
        floatingBadge.classList.remove("bg-slate-700", "text-slate-300");
        floatingBadge.classList.add("bg-cyan-400", "text-slate-950");
      } else {
        floatingBadge.classList.remove("bg-cyan-400", "text-slate-950");
        floatingBadge.classList.add("bg-slate-700", "text-slate-300");
      }
    }

    const itemsContainer = document.getElementById("cart-items-list");
    const emptyState = document.getElementById("cart-empty-state");
    const cartFooter = document.getElementById("cart-footer");

    if (!itemsContainer) return;

    if (this.cart.length === 0) {
      itemsContainer.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      if (cartFooter) cartFooter.classList.add("hidden");
      this.updatePlanButtons();
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
        <button onclick="App.removeFromCart('${item.id}')" class="text-slate-400 hover:text-red-400 p-2 text-xs transition-colors" title="Delete">
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

    // Update dynamic UPI QR Code based on cart total
    this.updatePaymentQR(finalTotal);
    this.updatePlanButtons();
  },

  // Set Payment Method (online vs cod)
  setPaymentMethod(method) {
    this.paymentMethod = method;
    const cardOnline = document.getElementById("payment-card-online");
    const cardCod = document.getElementById("payment-card-cod");
    const boxOnline = document.getElementById("online-payment-box");
    const boxCod = document.getElementById("cod-payment-box");
    const btnOrderText = document.getElementById("btn-order-text");
    const radioOnline = document.querySelector('input[name="payment_choice"][value="online"]');
    const radioCod = document.querySelector('input[name="payment_choice"][value="cod"]');

    if (method === "online") {
      if (radioOnline) radioOnline.checked = true;
      if (cardOnline) {
        cardOnline.classList.add("border-cyan-400", "bg-cyan-400/10");
        cardOnline.classList.remove("border-slate-800", "bg-slate-900/60");
      }
      if (cardCod) {
        cardCod.classList.remove("border-amber-400", "bg-amber-400/10");
        cardCod.classList.add("border-slate-800", "bg-slate-900/60");
      }
      if (boxOnline) boxOnline.classList.remove("hidden");
      if (boxCod) boxCod.classList.add("hidden");
      if (btnOrderText) btnOrderText.textContent = "Send Screenshot & Confirm Order on WhatsApp";
    } else {
      if (radioCod) radioCod.checked = true;
      if (cardCod) {
        cardCod.classList.add("border-amber-400", "bg-amber-400/10");
        cardCod.classList.remove("border-slate-800", "bg-slate-900/60");
      }
      if (cardOnline) {
        cardOnline.classList.remove("border-cyan-400", "bg-cyan-400/10");
        cardOnline.classList.add("border-slate-800", "bg-slate-900/60");
      }
      if (boxOnline) boxOnline.classList.add("hidden");
      if (boxCod) boxCod.classList.remove("hidden");
      if (btnOrderText) btnOrderText.textContent = "Confirm COD Order on WhatsApp";
    }
  },

  // Update Dynamic UPI QR Code for exact Cart Total Amount
  updatePaymentQR(total) {
    const upiId = this.officialUpiId || "6200177076@ptsbi";
    const upiUri = `upi://pay?pa=${upiId}&pn=OSCA%20INDIA&am=${total}&cu=INR&tn=OSCA%20Design%20Order`;
    
    const elAmount = document.getElementById("qr-amount-display");
    if (elAmount) elAmount.textContent = `₹${total.toLocaleString("en-IN")}`;

    const btnDirect = document.getElementById("btn-direct-upi-pay");
    if (btnDirect) btnDirect.href = upiUri;

    const qrImg = document.getElementById("cart-qr-image");
    const qrContainer = document.getElementById("qrcode-container");

    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=6&data=${encodeURIComponent(upiUri)}`;

    if (qrContainer && typeof window.QRCode !== "undefined") {
      qrContainer.innerHTML = "";
      try {
        new window.QRCode(qrContainer, {
          text: upiUri,
          width: 170,
          height: 170,
          colorDark: "#050810",
          colorLight: "#ffffff",
          correctLevel: window.QRCode.CorrectLevel.M
        });
      } catch (err) {
        console.warn("Client QRCode fallback to img:", err);
        if (qrImg) {
          qrImg.src = qrApiUrl;
          qrContainer.appendChild(qrImg);
        }
      }
    } else if (qrImg) {
      qrImg.src = qrApiUrl;
    }
  },

  // 1-Click Copy UPI ID to Clipboard
  copyUpiId(id = "6200177076@ptsbi") {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(id).then(() => {
        this.showToast(`UPI ID Copied: ${id}`, "success");
        const btnText = document.getElementById("copy-btn-text");
        if (btnText) {
          btnText.textContent = "Copied!";
          setTimeout(() => { btnText.textContent = "Copy"; }, 2000);
        }
      }).catch(() => {
        this.fallbackCopyUpi(id);
      });
    } else {
      this.fallbackCopyUpi(id);
    }
  },

  fallbackCopyUpi(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      this.showToast(`UPI ID Copied: ${text}`, "success");
      const btnText = document.getElementById("copy-btn-text");
      if (btnText) {
        btnText.textContent = "Copied!";
        setTimeout(() => { btnText.textContent = "Copy"; }, 2000);
      }
    } catch (e) {
      this.showToast(`UPI ID: ${text}`, "info");
    }
    document.body.removeChild(ta);
  },

  // Universal WhatsApp Dispatcher (Safe, Never Blocks, Never Cuts Off Current Page)
  openWhatsAppUrl(target) {
    let finalUrl = "";
    if (typeof target === "string" && (target.startsWith("http://") || target.startsWith("https://"))) {
      finalUrl = target;
      if (finalUrl.includes("api.whatsapp.com/send?phone=")) {
        finalUrl = finalUrl.replace("api.whatsapp.com/send?phone=", "wa.me/").replace("&text=", "?text=");
      }
    } else {
      const msg = typeof target === "string" ? target : "Hi OSCA India! I want to order design services.";
      finalUrl = `https://wa.me/${this.officialWhatsApp}?text=${encodeURIComponent(msg)}`;
    }

    // Direct synchronous window.open in a new tab (Never cuts off the current page)
    let opened = false;
    try {
      const win = window.open(finalUrl, "_blank", "noopener,noreferrer");
      if (win && !win.closed && typeof win.closed !== "undefined") {
        opened = true;
      }
    } catch (e) {
      opened = false;
    }

    // Dynamic anchor click fallback if window.open was restricted
    if (!opened) {
      const a = document.createElement("a");
      a.href = finalUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        try { document.body.removeChild(a); } catch (e) {}
      }, 500);
    }
  },

  // Handle Screenshot Upload Selection (Instant Preview & Background Auto-Upload)
  handleScreenshotSelected(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      this.showToast("Kripya image file select karein (PNG, JPG, WEBP)", "warning");
      event.target.value = "";
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      this.showToast("File size 15MB se kam hona chahiye", "warning");
      event.target.value = "";
      return;
    }

    this.selectedScreenshotFile = file;
    this.uploadedScreenshotUrl = null;

    const badge = document.getElementById("screenshot-upload-badge");
    if (badge) {
      badge.textContent = "Uploading...";
      badge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 shadow animate-pulse";
    }

    // 1. Instant local preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const dropLabel = document.getElementById("screenshot-drop-label");
      const previewCard = document.getElementById("screenshot-preview-card");
      const previewThumb = document.getElementById("screenshot-preview-thumb");
      const filenameEl = document.getElementById("screenshot-preview-filename");

      if (previewThumb) previewThumb.src = e.target.result;
      if (filenameEl) filenameEl.textContent = file.name;
      if (dropLabel) dropLabel.classList.add("hidden");
      if (previewCard) {
        previewCard.classList.remove("hidden");
        previewCard.classList.add("flex");
      }
    };
    reader.readAsDataURL(file);

    // 2. Pre-copy image to clipboard immediately on desktop
    if (navigator.clipboard && window.ClipboardItem) {
      try {
        navigator.clipboard.write([
          new ClipboardItem({ [file.type]: file })
        ]);
      } catch (e) {}
    }

    // 3. Immediately upload in background so it is 100% ready when user clicks WhatsApp!
    this.uploadScreenshotIfSelected().then(url => {
      if (badge) {
        badge.textContent = "✓ Screenshot Ready";
        badge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 shadow";
      }
      const metaEl = document.getElementById("screenshot-preview-meta");
      if (metaEl) {
        metaEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Uploaded &amp; Ready to Send</span>`;
      }
      this.showToast("Screenshot ready! WhatsApp ke saath link send hoga.", "success");
    }).catch(err => {
      if (badge) {
        badge.textContent = "✓ Attached";
        badge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 shadow";
      }
    });
  },

  // Clear / Remove Screenshot
  clearScreenshot(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.selectedScreenshotFile = null;
    this.uploadedScreenshotUrl = null;

    const input = document.getElementById("cart-screenshot-input");
    if (input) input.value = "";

    const dropLabel = document.getElementById("screenshot-drop-label");
    const previewCard = document.getElementById("screenshot-preview-card");
    const badge = document.getElementById("screenshot-upload-badge");

    if (dropLabel) dropLabel.classList.remove("hidden");
    if (previewCard) {
      previewCard.classList.add("hidden");
      previewCard.classList.remove("flex");
    }
    if (badge) {
      badge.textContent = "Select & Send";
      badge.className = "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300";
    }

    this.showToast("Screenshot hata diya gaya", "info");
  },

  // Upload Screenshot to Backend Server
  async uploadScreenshotIfSelected() {
    if (!this.selectedScreenshotFile) return this.uploadedScreenshotUrl || null;

    try {
      const formData = new FormData();
      formData.append("file", this.selectedScreenshotFile);
      const baseUrl = this.getApiBaseUrl();
      const apiUrl = baseUrl ? `${baseUrl}/api/upload-screenshot` : "/api/upload-screenshot";

      const res = await fetch(apiUrl, {
        method: "POST",
        body: formData
      });
      if (res.ok) {
        const json = await res.json();
        this.uploadedScreenshotUrl = json.full_url || json.url;
        return this.uploadedScreenshotUrl;
      }
    } catch (err) {
      console.warn("Screenshot upload error:", err);
    }
    return null;
  },

  // 1-Click Direct WhatsApp Screenshot Sender (Guaranteed Instant Dispatch - Zero Popup Blocker, Zero Cut Off)
  sendScreenshotOnWhatsApp() {
    if (this.cart.length === 0) {
      this.showToast("Your cart is empty", "warning");
      return;
    }

    const subtotal = this.cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);
    const discount = this.discountAmount || 0;
    const total = Math.max(0, subtotal - discount);

    const nameInput = document.getElementById("client-name");
    const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Valued Client";

    const itemsLines = this.cart.map((it, idx) => {
      const cleanTitle = (it.title || "Graphic Design").replace(/&/g, "and");
      return `  ${idx + 1}. *${cleanTitle}* (Qty: ${it.quantity})`;
    }).join("\n");

    const screenshotUrl = this.uploadedScreenshotUrl;
    let screenshotProofBlock = "";
    if (screenshotUrl) {
      screenshotProofBlock = (
        `📸 *PAYMENT SCREENSHOT PROOF:*\n` +
        `Maine Rs. ${total.toLocaleString("en-IN")} ka payment UPI ID *6200177076@ptsbi* par transfer kar diya hai.\n\n` +
        `🔗 *View Screenshot Link:*\n${screenshotUrl}\n\n` +
        `Kripya payment verify karke mera design order shuru karein! 🚀`
      );
    } else {
      screenshotProofBlock = (
        `📸 *PAYMENT SCREENSHOT PROOF:*\n` +
        `Maine Rs. ${total.toLocaleString("en-IN")} ka payment UPI ID *6200177076@ptsbi* par transfer kar diya hai.\n\n` +
        `Screenshot is WhatsApp message ke saath attach kar raha/rahi hoon. Kripya verify karein! 🚀`
      );
    }

    const msg = (
      `🎨 *OSCA INDIA — PAYMENT SCREENSHOT PROOF* 🎨\n` +
      `----------------------------------------\n` +
      `👤 *Client Name:* ${name}\n` +
      `💰 *Total Amount Paid:* *Rs. ${total.toLocaleString("en-IN")}*\n` +
      `💳 *Paid To UPI ID:* *6200177076@ptsbi*\n\n` +
      `🛒 *Design Items:*\n${itemsLines}\n` +
      `----------------------------------------\n` +
      `${screenshotProofBlock}`
    );

    // Open WhatsApp IMMEDIATELY and synchronously on user click (Zero popup blocker, Zero cut off!)
    this.openWhatsAppUrl(msg);

    // Auto-Copy Image to Clipboard for Desktop (user can press Ctrl+V in WhatsApp Web)
    if (this.selectedScreenshotFile && navigator.clipboard && window.ClipboardItem) {
      try {
        navigator.clipboard.write([
          new ClipboardItem({ [this.selectedScreenshotFile.type]: this.selectedScreenshotFile })
        ]).then(() => {
          this.showToast("Screenshot Clipboard me Copy ho gaya! WhatsApp Web me bas 'Ctrl + V' karein.", "success", 4000);
        }).catch(() => {});
      } catch (clipErr) {}
    }

    this.showToast("WhatsApp opening...", "info");
  },

  // Handle Order Submission (Safe ASCII, Synchronous Dispatch, Never Cuts Off Page)
  handleOrderSubmission(targetAction = "whatsapp") {
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
      this.showToast("Please enter your name first", "warning");
      if (nameInput) {
        nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
        nameInput.focus();
        nameInput.classList.add("ring-2", "ring-cyan-400", "border-cyan-400");
        setTimeout(() => nameInput.classList.remove("ring-2", "ring-cyan-400", "border-cyan-400"), 3000);
      }
      return;
    }

    if (!phone || phone.length < 10) {
      this.showToast("Please enter your 10-digit WhatsApp number", "warning");
      if (phoneInput) {
        phoneInput.scrollIntoView({ behavior: "smooth", block: "center" });
        phoneInput.focus();
        phoneInput.classList.add("ring-2", "ring-cyan-400", "border-cyan-400");
        setTimeout(() => phoneInput.classList.remove("ring-2", "ring-cyan-400", "border-cyan-400"), 3000);
      }
      return;
    }

    const subtotal = this.cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);
    const discount = this.discountAmount || 0;
    const total = Math.max(0, subtotal - discount);

    const isOnline = (this.paymentMethod || "online") === "online";
    const paymentMethodStr = isOnline 
      ? "Online UPI (6200177076@ptsbi)" 
      : "Cash on Delivery (Pay After Approval)";

    const orderId = `OSCA-ORD-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const invoiceId = `OSCA-INV-${Date.now().toString().slice(-6)}`;
    const createdDateStr = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

    // Format clean, ASCII-safe WhatsApp message (Zero Truncation, Safe on Mobile & Desktop)
    const itemsLines = this.cart.map((it, idx) => {
      const cleanTitle = (it.title || "Graphic Design").replace(/&/g, "and");
      return `  ${idx + 1}. *${cleanTitle}* (Qty: ${it.quantity}) - Rs. ${(it.price * it.quantity).toLocaleString("en-IN")}`;
    }).join("\n");

    const paymentInfoBlock = isOnline
      ? `💳 *PAYMENT MODE:* *Online UPI (6200177076@ptsbi)*\n` +
        `Maine Rs. ${total.toLocaleString("en-IN")} ka payment UPI ID *6200177076@ptsbi* par initiate/complete kar diya hai.\n` +
        `Kripya verify karke mera design order shuru karein! 🚀`
      : `💳 *PAYMENT MODE:* *Cash on Delivery (Pay After Approval)*\n` +
        `📝 *NOTE:* Design sample approve hone ke baad payment kiya jaayega. Kripya confirm karein! 🚀`;

    const waMsg = (
      `🎨 *OSCA INDIA — DESIGN ORDER* 🎨\n` +
      `🌐 *Official Website:* https://oscaindia.com\n` +
      `----------------------------------------\n` +
      `📋 *Order ID:* *${orderId}*\n` +
      `👤 *Client:* ${name} (${phone})\n` +
      `🏷️ *Brand:* ${brand || "Personal Brand"}\n\n` +
      `🛒 *SERVICES ORDERED:*\n` +
      `${itemsLines}\n\n` +
      `💰 *NET PAYABLE:* *Rs. ${total.toLocaleString("en-IN")}*\n` +
      `----------------------------------------\n` +
      `${paymentInfoBlock}`
    );

    const whatsappUrl = `https://wa.me/${this.officialWhatsApp}?text=${encodeURIComponent(waMsg)}`;

    const confirmedOrder = {
      order_id: orderId,
      invoice_id: invoiceId,
      created_date_str: createdDateStr,
      created_at: new Date().toISOString(),
      customer: {
        name,
        phone,
        brand: brand || "Personal Brand",
        email: email || "client@oscaindia.com",
        notes: notes || "Standard high quality design"
      },
      items: [...this.cart],
      subtotal,
      discount,
      tax: 0,
      total,
      payment_method: paymentMethodStr,
      status: "Pending Confirmation",
      screenshot_url: this.uploadedScreenshotUrl || null
    };

    // 1. Dispatch WhatsApp synchronously on direct user click (Never blocked, Never cuts off)
    if (targetAction === "whatsapp") {
      this.openWhatsAppUrl(whatsappUrl);
      this.showToast("WhatsApp opening...", "info");
    }

    // 2. Generate PDF Bill
    if (window.InvoiceGenerator) {
      try {
        window.InvoiceGenerator.generatePDF(confirmedOrder);
        this.showToast("PDF Invoice ready!", "success");
      } catch (pdfErr) {
        console.warn("PDF generation error:", pdfErr);
      }
    }

    // 3. Show Success Modal with order details and action buttons
    this.showOrderSuccessModal(confirmedOrder, whatsappUrl);
    this.trackAnalyticsEvent("generate_lead_order", { value: total, currency: "INR", order_id: orderId });

    if (window.confetti) {
      try {
        window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}
    }

    // Order successfully finalized (sent to WhatsApp + PDF Invoice generated)
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
    if (elAmount) elAmount.textContent = `₹${order.total.toLocaleString("en-IN")}`;
    if (elClient) elClient.textContent = order.customer.name;

    const elPayment = document.getElementById("modal-payment-mode");
    if (elPayment) {
      elPayment.textContent = order.payment_method || "Online UPI (6200177076@ptsbi)";
    }

    const btnWaText = document.getElementById("modal-btn-wa-text");
    if (btnWaText) {
      btnWaText.textContent = "Confirm on WhatsApp";
    }

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

  // Close Order Success Modal and Cleanly Reset Cart
  closeSuccessModal() {
    const modal = document.getElementById("success-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
    this.clearCart();
    this.closeCart();
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
      this.showToast("Opening WhatsApp...", "success");
      const cleanService = (payload.service_type || "Graphic Design").replace(/&/g, "and");
      const waMsg = 
        `*NEW DESIGN INQUIRY - OSCA INDIA*\n\n` +
        `👤 *Client Name:* ${payload.name || "Client"}\n` +
        `📞 *Phone / WhatsApp:* ${payload.phone}\n` +
        `🎨 *Service Required:* ${cleanService}\n` +
        `💰 *Estimated Budget:* ${payload.budget || "Flexible"}\n` +
        `📝 *Project Brief:* ${payload.message || "I need professional graphics."}\n\n` +
        `🌐 *Source:* https://oscaindia.com`;

      const waUrl = `https://wa.me/${this.officialWhatsApp}?text=${encodeURIComponent(waMsg)}`;
      this.trackAnalyticsEvent("submit_project_brief", { service_type: cleanService });
      form.reset();
      setTimeout(() => {
        this.openWhatsAppUrl(waUrl);
      }, 300);
    } catch (err) {
      console.error(err);
      window.open(`https://wa.me/${this.officialWhatsApp}`, "_blank");
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
        "political-single": 199,
        "festival-political": 249,
        "election-rally": 299,
        "carousel": 499,
        "reel-cover": 199,
        "thumbnail": 249,
        "birthday-wishes": 249,
        "national-day": 199,
        "press-release": 299
      };

      const selected = calcService.value;
      const base = basePrices[selected] || 199;
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
          "political-single": "Political Leader Daily Poster (1 Slide)",
          "festival-political": "Festival & Jayanti Political Greeting",
          "election-rally": "Election Campaign & Rally Master Poster",
          "carousel": "Political Report & Work Carousel (5-7 Slides)",
          "reel-cover": "Viral Reel & Shorts Cover Art (1 Slide)",
          "thumbnail": "High-CTR YouTube Political Thumbnail",
          "birthday-wishes": "Leader Birthday & Badhai Poster (बधाई पोस्टर)",
          "national-day": "National Day & Legal Awareness Creative (राष्ट्रीय दिवस)",
          "press-release": "Official Press Statement & Media Banner (प्रेस विज्ञप्ति)"
        };

        const item = {
          id: `custom-${selected}-${Date.now()}`,
          title: titles[selected] || "Custom Design Package",
          category: "custom",
          category_name: "Tailored Custom Pack",
          price: Math.round(total / qty),
          delivery_time: calcDelivery && calcDelivery.value === "express" ? "Express 12 Hours" : "Standard 24-48 Hours",
          quantity: qty,
          image: "https://lh3.googleusercontent.com/d/11RGcWS_YPUp6pyg8kGzOhNLHeYnYes7x=w600"
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
  },

  // ========================================================
  // LIVE ARTWORK SHOWCASE SLIDER (13 REAL CLIENT ARTWORKS)
  // ========================================================
  initShowcaseSlider() {
    const container = document.getElementById("hero-showcase-container");
    const dotsContainer = document.getElementById("showcase-dots");
    if (!container || !this.showcaseArtworks || this.showcaseArtworks.length === 0) return;

    // Render interactive pagination dots
    if (dotsContainer) {
      dotsContainer.innerHTML = this.showcaseArtworks.map((art, idx) => `
        <span 
          class="showcase-dot ${idx === 0 ? 'active' : ''}" 
          title="Artwork ${idx + 1}: ${art.title}"
          aria-hidden="true"
        ></span>
      `).join("");
    }

    // Auto-pause on mouse hover and touch to allow comfortable viewing
    container.addEventListener("mouseenter", () => {
      this.showcaseIsPaused = true;
    });
    container.addEventListener("mouseleave", () => {
      this.showcaseIsPaused = false;
    });
    container.addEventListener("touchstart", () => {
      this.showcaseIsPaused = true;
    }, { passive: true });
    container.addEventListener("touchend", () => {
      setTimeout(() => { this.showcaseIsPaused = false; }, 2000);
    }, { passive: true });

    // Just-in-time preload only next slide (Zero network congestion on initial page load)
    this.preloadNextShowcaseSlide(0);

    // Start auto-scroll timer (every 3.5 seconds)
    if (this.showcaseInterval) clearInterval(this.showcaseInterval);
    this.showcaseInterval = setInterval(() => {
      if (!this.showcaseIsPaused) {
        this.nextShowcaseSlide();
      }
    }, 3500);

    // Initial sync
    this.updateShowcaseUI(0);
  },

  // Preload next showcase slide artwork on demand
  preloadNextShowcaseSlide(currentIndex) {
    if (!this.showcaseArtworks || !this.showcaseArtworks.length) return;
    const nextIdx = (currentIndex + 1) % this.showcaseArtworks.length;
    const nextItem = this.showcaseArtworks[nextIdx];
    if (nextItem && nextItem.src) {
      const img = new Image();
      img.src = nextItem.src;
    }
  },

  // Transition to specific slide
  goToShowcaseSlide(index, manual = false) {
    const total = this.showcaseArtworks.length;
    if (total === 0) return;

    this.showcaseCurrentIndex = ((index % total) + total) % total;
    this.updateShowcaseUI(this.showcaseCurrentIndex);

    // If manual action, temporarily reset interval timer to give user full 3.5s
    if (manual && this.showcaseInterval) {
      clearInterval(this.showcaseInterval);
      this.showcaseInterval = setInterval(() => {
        if (!this.showcaseIsPaused) {
          this.nextShowcaseSlide();
        }
      }, 3500);
    }
  },

  // Advance to next slide
  nextShowcaseSlide(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.goToShowcaseSlide(this.showcaseCurrentIndex + 1, !!event);
  },

  // Go to previous slide
  prevShowcaseSlide(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.goToShowcaseSlide(this.showcaseCurrentIndex - 1, true);
  },

  // Update UI Elements with smooth crossfade
  updateShowcaseUI(index) {
    const item = this.showcaseArtworks[index];
    if (!item) return;

    const img = document.getElementById("hero-mockup-img");
    const bgBlur = document.getElementById("hero-bg-blur");
    const counter = document.getElementById("showcase-counter");
    const catBadge = document.getElementById("showcase-cat-badge");
    const title = document.getElementById("showcase-title");
    const priceTag = document.getElementById("showcase-price-tag");

    // Smooth subtle transition
    if (img) {
      img.style.opacity = "0.4";
      img.style.transform = "scale(0.98)";
      setTimeout(() => {
        img.src = item.src;
        if (img.complete) {
          img.style.opacity = "1";
          img.style.transform = "scale(1)";
        } else {
          img.onload = () => {
            img.style.opacity = "1";
            img.style.transform = "scale(1)";
          };
        }
      }, 120);
    }

    if (bgBlur) {
      bgBlur.src = item.src;
    }

    if (counter) {
      const currentNum = String(index + 1).padStart(2, "0");
      const totalNum = String(this.showcaseArtworks.length).padStart(2, "0");
      counter.textContent = `${currentNum} / ${totalNum}`;
    }

    if (catBadge) catBadge.textContent = item.category;
    if (title) title.textContent = item.title;
    if (priceTag) priceTag.textContent = `₹${item.price}`;
    
    // Update showcase Add to Cart button state if already in cart
    const showcaseBtn = document.getElementById("showcase-cart-btn");
    if (showcaseBtn) {
      const inCart = this.cart && this.cart.find(c => c.id === item.id);
      if (inCart) {
        showcaseBtn.innerHTML = `<span id="showcase-price-tag">₹${item.price}</span> • <i class="fa-solid fa-check text-[10px]"></i> <span>In Cart (${inCart.quantity})</span>`;
        showcaseBtn.style.backgroundColor = "#059669";
        showcaseBtn.style.color = "#ffffff";
      } else {
        showcaseBtn.innerHTML = `<span id="showcase-price-tag">₹${item.price}</span> • <i class="fa-solid fa-cart-plus text-[10px]"></i> <span>Add to Cart</span>`;
        showcaseBtn.style.backgroundColor = "";
        showcaseBtn.style.color = "";
      }
    }

    this.preloadNextShowcaseSlide(index);

    // Update pagination dots
    const dots = document.querySelectorAll(".showcase-dot");
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  },

  // Add currently viewed showcase artwork to cart
  addActiveShowcaseToCart(event) {
    const item = this.showcaseArtworks[this.showcaseCurrentIndex || 0];
    if (!item) return;

    const clickEv = event || window.event;
    const btn = clickEv ? (clickEv.currentTarget || (clickEv.target && clickEv.target.closest("button"))) : document.getElementById("showcase-cart-btn");
    if (btn) {
      this.triggerFlyToCart(btn);
    }

    this.trackAnalyticsEvent("add_to_cart", {
      item_id: item.id || 'showcase-artwork',
      item_name: item.title,
      price: item.price,
      currency: "INR"
    });

    const existingIndex = this.cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += 1;
    } else {
      this.cart.push({
        id: item.id,
        title: item.title,
        category: "social",
        category_name: item.category,
        price: item.price,
        delivery_time: "24 Hours",
        quantity: 1,
        image: item.src
      });
    }

    this.saveCartToStorage();
    this.renderCartUI();
    this.renderServices();
    this.updateShowcaseUI(this.showcaseCurrentIndex || 0);
    this.showToast(`Added: ${item.title}`, "success");
    this.bounceFloatingCart();
  },

  // ========================================================
  // RECENT ARTWORKS SHOWCASE REEL (AUTO-SCROLLING RIBBON)
  // ========================================================
  initArtworkReel() {
    const track = document.getElementById("artwork-reel-track");
    const wrapper = document.getElementById("artwork-reel-wrapper");
    const statusBadge = document.getElementById("reel-status-badge");
    if (!track || !this.showcaseArtworks || this.showcaseArtworks.length === 0) return;

    // Render 16 optimized cards (8 artworks duplicated once for seamless infinite looping, ultra-low bandwidth)
    const baseList = this.showcaseArtworks.slice(0, 8);
    const doubleList = [...baseList, ...baseList];
    track.innerHTML = doubleList.map((art, idx) => {
      const realIndex = idx % baseList.length;
      const thumbSrc = art.src.includes('googleusercontent.com') ? (art.src.split('=')[0] + '=w250') : art.src;
      return `
        <div class="reel-card glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800/80 shadow-lg relative">
          <!-- Card Image Container -->
          <div 
            class="reel-card-img-wrap relative aspect-[4/5] bg-slate-950 overflow-hidden cursor-pointer"
            onclick="App.openArtworkLightbox(${realIndex})"
            title="Click to preview: ${art.title}"
          >
            <img 
              src="${thumbSrc}" 
              alt="${art.title}" 
              width="220"
              height="275"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy" decoding="async"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
            
            <!-- Quick Expand Icon on Hover -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span class="w-10 h-10 rounded-full bg-slate-900/80 text-cyan-400 flex items-center justify-center backdrop-blur-sm border border-cyan-500/30 shadow-xl">
                <i class="fa-solid fa-magnifying-glass-plus text-sm"></i>
              </span>
            </div>

            <!-- Aspect ratio pill -->
            <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-900/80 text-cyan-300 border border-slate-700/60 backdrop-blur-sm">
              1080x1350
            </span>
          </div>

          <!-- Card Content & Action -->
          <div class="p-3.5 flex flex-col justify-between flex-1 bg-slate-900/40">
            <div>
              <span class="text-[9px] uppercase font-bold text-cyan-400 block tracking-wider truncate">${art.category}</span>
              <h3 class="text-xs font-bold text-white mt-0.5 line-clamp-1 group-hover:text-cyan-400 transition-colors" title="${art.title}">
                ${art.title}
              </h3>
            </div>

            <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/60">
              <div class="flex items-baseline gap-1.5">
                <span class="text-[10px] line-through text-slate-400 font-semibold">₹${art.price === 199 ? 399 : 599}</span>
                <span class="text-sm font-extrabold text-cyan-400 font-display">₹${art.price}</span>
              </div>
              <button 
                onclick="App.addReelArtworkToCart(${realIndex}, event)"
                class="px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-bold btn-primary-action inline-flex items-center justify-center gap-1.5 shadow active:scale-95"
                title="Add to cart"
              >
                <i class="fa-solid fa-cart-plus text-[9px]"></i>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Auto-scroll loop variables
    let isPaused = false;
    let isUserDragging = false;
    let isIntersecting = true;
    let startX = 0;
    let scrollLeftStart = 0;

    const updateStatus = (running) => {
      if (statusBadge) {
        statusBadge.innerHTML = running
          ? `<i class="fa-solid fa-play text-[9px] animate-pulse"></i> Auto-Scroll`
          : `<i class="fa-solid fa-pause text-[9px] text-amber-400"></i> Paused`;
      }
    };

    // Smooth continuous auto-scroll step (Optimized with IntersectionObserver to save CPU)
    const step = () => {
      if (isIntersecting && !isPaused && !isUserDragging && track) {
        track.scrollLeft += 0.9;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft -= track.scrollWidth / 2;
        }
      }
      if (isIntersecting) {
        this.reelAnimationId = requestAnimationFrame(step);
      }
    };

    // Viewport Visibility Observer - Pauses animation when off-screen for 100% CPU saving
    if ("IntersectionObserver" in window && wrapper) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isIntersecting = entry.isIntersecting;
          if (isIntersecting && !isPaused && !isUserDragging) {
            cancelAnimationFrame(this.reelAnimationId);
            this.reelAnimationId = requestAnimationFrame(step);
          }
        });
      }, { threshold: 0.05 });
      observer.observe(wrapper);
    }

    if (this.reelAnimationId) cancelAnimationFrame(this.reelAnimationId);
    this.reelAnimationId = requestAnimationFrame(step);

    // Pause on mouse hover & resume on leave
    if (wrapper) {
      wrapper.addEventListener("mouseenter", () => {
        isPaused = true;
        updateStatus(false);
      });
      wrapper.addEventListener("mouseleave", () => {
        isPaused = false;
        updateStatus(true);
      });
    }

    // Touch events for mobile/tablet
    track.addEventListener("touchstart", () => {
      isPaused = true;
      updateStatus(false);
    }, { passive: true });

    track.addEventListener("touchend", () => {
      setTimeout(() => {
        isPaused = false;
        updateStatus(true);
      }, 2500);
    }, { passive: true });

    // Desktop Mouse Drag to scroll
    track.addEventListener("mousedown", (e) => {
      isUserDragging = true;
      isPaused = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeftStart = track.scrollLeft;
      updateStatus(false);
    });

    window.addEventListener("mouseup", () => {
      if (isUserDragging) {
        isUserDragging = false;
        setTimeout(() => {
          isPaused = false;
          updateStatus(true);
        }, 2000);
      }
    });

    track.addEventListener("mousemove", (e) => {
      if (!isUserDragging) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeftStart - walk;
    });

    this.reelTrackElement = track;
  },

  // Manual Reel Scroll (Prev / Next buttons)
  scrollReel(delta) {
    const track = this.reelTrackElement || document.getElementById("artwork-reel-track");
    if (!track) return;

    track.scrollBy({ left: delta, behavior: "smooth" });

    // Pause auto-scroll briefly during and after manual scroll
    const statusBadge = document.getElementById("reel-status-badge");
    if (statusBadge) {
      statusBadge.innerHTML = `<i class="fa-solid fa-hand text-[9px] text-cyan-300"></i> Scrolling`;
    }
  },

  // Add an artwork from the reel to cart
  addReelArtworkToCart(artworkIndex, event) {
    const item = this.showcaseArtworks[artworkIndex];
    if (!item) return;

    const clickEv = event || window.event;
    const btn = clickEv ? (clickEv.currentTarget || (clickEv.target && clickEv.target.closest("button"))) : null;
    if (btn) {
      this.triggerFlyToCart(btn);
    }

    this.trackAnalyticsEvent("add_to_cart", {
      item_id: item.id || 'showcase-artwork',
      item_name: item.title,
      price: item.price,
      currency: "INR"
    });

    const existingIndex = this.cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += 1;
    } else {
      this.cart.push({
        id: item.id,
        title: item.title,
        category: "social",
        category_name: item.category,
        price: item.price,
        delivery_time: "24 Hours",
        quantity: 1,
        image: item.src
      });
    }

    this.saveCartToStorage();
    this.renderCartUI();
    this.renderServices();
    this.showToast(`Added to Cart: ${item.title}`, "success");
    this.bounceFloatingCart();
  },

  // Open Full-Screen / Lightbox Artwork View
  openArtworkLightbox(artworkIndex) {
    const item = this.showcaseArtworks[artworkIndex];
    if (!item) return;

    const modal = document.getElementById("artwork-lightbox-modal");
    const img = document.getElementById("lightbox-img");
    const title = document.getElementById("lightbox-title");
    const badge = document.getElementById("lightbox-badge");
    const price = document.getElementById("lightbox-price");
    const cartBtn = document.getElementById("lightbox-cart-btn");

    if (img) img.src = item.src;
    if (title) title.textContent = item.title;
    if (badge) badge.textContent = item.category;
    if (price) price.textContent = `₹${item.price}`;

    if (cartBtn) {
      cartBtn.onclick = (e) => {
        this.addReelArtworkToCart(artworkIndex, e);
      };
    }

    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    }
  },

  // Close Lightbox Modal
  closeArtworkLightbox() {
    const modal = document.getElementById("artwork-lightbox-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }
  },

  // Open Full-Screen Studio / Billboard Photo Modal
  openStudioPhotoModal(src, title, desc) {
    let modal = document.getElementById("studio-photo-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "studio-photo-modal";
      modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md hidden transition-opacity duration-300";
      modal.innerHTML = `
        <div class="relative max-w-4xl w-full bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
          <div class="p-4 px-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-wider text-cyan-400">OSCA INDIA Physical Presence</span>
              <h3 id="studio-modal-title" class="text-base sm:text-lg font-bold text-white font-display"></h3>
            </div>
            <button onclick="App.closeStudioPhotoModal()" class="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors" title="Close">
              <i class="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>
          <div class="p-3 sm:p-6 overflow-auto flex-1 flex flex-col items-center justify-center bg-black/40">
            <img id="studio-modal-img" src="" alt="OSCA INDIA Studio" class="max-h-[62vh] max-w-full rounded-2xl object-contain shadow-2xl border border-slate-800" />
            <p id="studio-modal-desc" class="text-xs sm:text-sm text-slate-300 mt-4 text-center max-w-2xl leading-relaxed"></p>
          </div>
          <div class="p-4 px-6 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span class="text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-location-dot text-cyan-400"></i> Bhairo Kothi, Sitamarhi, Bihar 843302 (Google Verified 4.9★)</span>
            <div class="flex items-center gap-2">
              <a href="https://share.google/KetARk5s5CUDVXaoO" target="_blank" class="px-3.5 py-1.5 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-colors flex items-center gap-1.5 text-xs">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" class="w-3.5 h-3.5" />
                <span>View Google Business Profile</span>
              </a>
              <button onclick="App.closeStudioPhotoModal()" class="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors text-xs font-semibold">
                Close
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      modal.onclick = (e) => {
        if (e.target === modal) App.closeStudioPhotoModal();
      };
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
          App.closeStudioPhotoModal();
        }
      });
    }
    const imgEl = document.getElementById("studio-modal-img");
    const titleEl = document.getElementById("studio-modal-title");
    const descEl = document.getElementById("studio-modal-desc");
    if (imgEl) imgEl.src = src;
    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  },

  // Close Studio Photo Modal
  closeStudioPhotoModal() {
    const modal = document.getElementById("studio-photo-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }
  },

  // ========================================================
  // DYNAMIC PRODUCT FLASH OFFER POPUPS (10% TO 20% OFF DEALS)
  // ========================================================
  currentFlashOfferIndex: 0,
  flashOfferTimer: null,
  flashOfferCloseTimer: null,
  activeFlashOffer: null,

  initFlashOffers() {
    // Start first offer 10-14 seconds after user starts browsing
    setTimeout(() => {
      this.triggerNextFlashOffer();
    }, 12000);
  },

  triggerNextFlashOffer() {
    // If cart drawer is open, reschedule in 12 seconds
    if (document.body.classList.contains("cart-open")) {
      setTimeout(() => this.triggerNextFlashOffer(), 12000);
      return;
    }

    if (!FLASH_OFFERS || FLASH_OFFERS.length === 0) return;
    const offer = FLASH_OFFERS[this.currentFlashOfferIndex % FLASH_OFFERS.length];
    this.currentFlashOfferIndex++;
    this.showFlashOffer(offer);
  },

  showFlashOffer(offer) {
    if (!offer) return;
    this.activeFlashOffer = offer;
    let popup = document.getElementById("flash-offer-popup");
    if (!popup) {
      popup = document.createElement("div");
      popup.id = "flash-offer-popup";
      popup.className = "select-none";
      popup.innerHTML = `
        <div class="flex items-center justify-between gap-1.5 mb-1 sm:mb-2">
          <div class="flex items-center gap-1 min-w-0">
            <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
            <span id="flash-offer-badge" class="flash-offer-badge text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full truncate">
              ${offer.badge}
            </span>
          </div>
          <button onclick="App.dismissFlashOffer()" class="text-slate-400 hover:text-white text-xs w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded hover:bg-slate-800/60 transition-colors shrink-0" aria-label="Close offer">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="flex items-center gap-2 mb-1.5 sm:mb-2">
          <div id="flash-offer-icon" class="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 shadow-sm text-xs sm:text-base">
            <i class="${offer.iconClass}"></i>
          </div>
          <div class="min-w-0 flex-1">
            <p id="flash-offer-title" class="offer-title text-[11px] sm:text-xs font-bold text-white truncate leading-tight font-display">
              ${offer.title}
            </h4>
            <p id="flash-offer-desc" class="offer-desc hidden sm:block text-[11px] text-slate-400 line-clamp-1 mt-0.5 leading-snug">
              ${offer.desc}
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between gap-1.5 pt-1.5 sm:pt-2 border-t border-slate-800/80">
          <div class="flex items-center gap-1">
            <span class="text-[9px] sm:text-[10px] text-slate-400 font-semibold">Code:</span>
            <span id="flash-offer-code" class="offer-code-pill font-mono font-bold text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-dashed border-emerald-600/70 tracking-wider">
              ${offer.code}
            </span>
          </div>
          <button id="flash-offer-apply-btn" onclick="App.claimFlashOffer()" class="px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold btn-primary-action flex items-center gap-1 shadow active:scale-95">
            <i class="fa-solid fa-tag text-[8px] sm:text-[10px]"></i>
            <span>Claim &amp; Apply</span>
          </button>
        </div>
      `;
      document.body.appendChild(popup);

      // Pause timer on hover so user can read comfortably
      popup.addEventListener("mouseenter", () => {
        if (this.flashOfferCloseTimer) clearTimeout(this.flashOfferCloseTimer);
      });
      popup.addEventListener("mouseleave", () => {
        if (popup.classList.contains("show")) {
          this.flashOfferCloseTimer = setTimeout(() => this.dismissFlashOffer(), 4000);
        }
      });
    } else {
      const badgeEl = document.getElementById("flash-offer-badge");
      const titleEl = document.getElementById("flash-offer-title");
      const descEl = document.getElementById("flash-offer-desc");
      const iconEl = document.getElementById("flash-offer-icon");
      const codeEl = document.getElementById("flash-offer-code");
      if (badgeEl) badgeEl.textContent = offer.badge;
      if (titleEl) titleEl.textContent = offer.title;
      if (descEl) descEl.textContent = offer.desc;
      if (iconEl) iconEl.innerHTML = `<i class="${offer.iconClass}"></i>`;
      if (codeEl) codeEl.textContent = offer.code;
    }

    void popup.offsetWidth;
    popup.classList.add("show");

    if (this.flashOfferCloseTimer) clearTimeout(this.flashOfferCloseTimer);
    this.flashOfferCloseTimer = setTimeout(() => {
      this.dismissFlashOffer();
    }, 8500);
  },

  claimFlashOffer() {
    const offer = this.activeFlashOffer;
    if (!offer) return;

    const code = offer.code;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).catch(() => {});
      }
    } catch (e) {}

    const couponInput = document.getElementById("coupon-code");
    if (couponInput) {
      couponInput.value = code;
    }

    if (this.cart.length > 0) {
      this.applyCoupon(code);
      this.openCart();
    } else {
      this.showToast(`🎉 Coupon ${code} Copied! Add items to cart to get your discount.`, "success", 4000);
      if (window.confetti) {
        try {
          window.confetti({ particleCount: 30, spread: 50, origin: { x: 0.15, y: 0.85 } });
        } catch (e) {}
      }
    }

    this.dismissFlashOffer(true);
  },

  dismissFlashOffer(claimed = false) {
    const popup = document.getElementById("flash-offer-popup");
    if (popup) {
      popup.classList.remove("show");
    }
    if (this.flashOfferCloseTimer) clearTimeout(this.flashOfferCloseTimer);

    // Schedule next natural offer after 28 to 38 seconds
    const nextDelay = claimed ? 40000 : 28000;
    if (this.flashOfferTimer) clearTimeout(this.flashOfferTimer);
    this.flashOfferTimer = setTimeout(() => {
      this.triggerNextFlashOffer();
    }, nextDelay);
  },

  // Defensive GA4 Event Dispatcher (Auto-tracks once Measurement ID is added)
  trackAnalyticsEvent(eventName, params = {}) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
      } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: eventName, ...params });
      }
    } catch (e) {}
  },

  // Protected Email Handlers (Anti-Scraping & Bot Obfuscation)
  openStudioEmail(e) {
    if (e && e.preventDefault) e.preventDefault();
    this.trackAnalyticsEvent("contact_email_click", { method: "footer_button" });
    const email = atob("a3VtYXIyMTIxc3VuaWxAZ21haWwuY29t");
    const subject = encodeURIComponent("OSCA INDIA Creative Design Inquiry");
    window.location.href = `mailto:${email}?subject=${subject}`;
    return false;
  },

  revealStudioEmail(btnElement) {
    this.trackAnalyticsEvent("contact_email_reveal", { method: "interactive_card" });
    const email = atob("a3VtYXIyMTIxc3VuaWxAZ21haWwuY29t");
    const display = document.getElementById("protected-email-display");
    if (display) {
      display.textContent = email;
      display.classList.remove("text-slate-300", "font-mono");
      display.classList.add("text-cyan-400", "font-semibold");
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        this.showToast("Studio email copied to clipboard!", "success");
      }).catch(() => {});
    }

    if (btnElement) {
      const origHtml = btnElement.innerHTML;
      btnElement.innerHTML = '<i class="fa-solid fa-check text-xs text-emerald-400"></i> <span class="text-emerald-400">Copied!</span>';
      setTimeout(() => {
        btnElement.innerHTML = origHtml;
      }, 2500);
    }

    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent("OSCA INDIA Creative Design Inquiry")}`;
    }, 450);
  },

  // Interactive Animations, Tactile Button Ripples & High-Performance Scroll Reveal
  initAnimations() {
    // 1. Tactile Click Ripple on All Interactive Buttons & CTAs
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(
        "button, .btn-primary-action, .btn-whatsapp-action, .btn-whatsapp-solid, .btn-secondary-action, .hero-format-card, .footer-quick-btn, .floating-btn, .showcase-nav-btn"
      );
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const circle = document.createElement("span");
      const diameter = Math.max(rect.width, rect.height, 48);
      const radius = diameter / 2;
      const clientX = e.clientX || rect.left + rect.width / 2;
      const clientY = e.clientY || rect.top + rect.height / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${clientX - rect.left - radius}px`;
      circle.style.top = `${clientY - rect.top - radius}px`;
      circle.className = "btn-ripple-wave";

      // Ensure button contains ripple cleanly
      const computedPos = window.getComputedStyle(btn).position;
      if (computedPos === "static") {
        btn.style.position = "relative";
      }
      btn.style.overflow = "hidden";

      btn.appendChild(circle);
      setTimeout(() => {
        circle.remove();
      }, 600);
    }, { passive: true });

    // 2. High-Performance Scroll Reveal with Native IntersectionObserver
    if ("IntersectionObserver" in window) {
      const targetSelectors = [
        "section > div.max-w-7xl",
        "#pricing-grid > div",
        "#testimonials .grid > div",
        "#stats-counter-strip",
        "#why-us-grid > div",
        "#calculator-card"
      ];

      const targets = document.querySelectorAll(targetSelectors.join(", "));
      targets.forEach((el, idx) => {
        if (!el.classList.contains("reveal-on-scroll")) {
          el.classList.add("reveal-on-scroll");
          const stagger = (idx % 4) + 1;
          el.classList.add(`stagger-${stagger}`);
        }
      });

      const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
      });

      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        revealObserver.observe(el);
      });
    }
  }
};

// Global Exposure for HTML event attributes & SEO bots
window.openStudioEmail = function(e) {
  return App.openStudioEmail(e);
};

window.revealStudioEmail = function(btn) {
  return App.revealStudioEmail(btn);
};

// Dynamically attach verified email to SEO Schema for search engines without static crawler harvest leakage
try {
  const schemaScript = document.getElementById("seo-schema");
  if (schemaScript) {
    const sData = JSON.parse(schemaScript.textContent);
    const safeEmail = atob("a3VtYXIyMTIxc3VuaWxAZ21haWwuY29t");
    if (sData["@graph"] && Array.isArray(sData["@graph"])) {
      const biz = sData["@graph"].find(x => x["@type"] === "LocalBusiness" || x["@type"] === "ProfessionalService");
      if (biz) biz.email = safeEmail;
    } else if (sData["@type"] === "LocalBusiness") {
      sData.email = safeEmail;
    }
    schemaScript.textContent = JSON.stringify(sData);
  }
} catch (e) {}

// Expose App globally to ensure full accessibility for inline HTML event handlers & test runners
window.App = App;
