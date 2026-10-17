const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const mobileNavigation = matchMedia("(max-width: 800px)");
const mobileViewport = matchMedia("(max-width: 600px)");
const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");

// Keep analytics event names stable so Alina can compare engagement over time.
const trackAnalytics = (eventName, parameters = {}) => {
  if (["localhost", "127.0.0.1", "[::1]"].includes(location.hostname)) return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, parameters);
};

const linkLocation = (link) => {
  if (link.closest("[data-retreat-dialog]")) return "retreat_dialog";
  if (link.matches("[data-mobile-contact]")) return "mobile_sticky";
  if (link.closest(".site-header")) return "header";
  if (link.closest(".service-choices")) return "service_selector";
  if (link.closest("#strength")) return "strength_section";
  if (link.closest("#breath")) return "breath_section";
  if (link.closest("#children-breath")) return "children_breath_section";
  if (link.closest("#contact")) return "contact_section";
  if (link.closest(".site-footer")) return "footer";
  return "page";
};

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link) return;

  const href = link.getAttribute("href") || "";
  const location = linkLocation(link);
  const retreatEvent = link.dataset.retreatAnalyticsEvent;
  if (retreatEvent && link.getAttribute("aria-disabled") !== "true") {
    trackAnalytics(retreatEvent, {
      retreat_id: "seven_chakras_2026_11_10",
      link_location: location,
      link_url: link.href,
    });
  }

  let contactMethod = "";
  if (href.startsWith("https://wa.me/")) contactMethod = "whatsapp";
  else if (href.startsWith("tel:")) contactMethod = "phone";
  else if (href.includes("instagram.com/")) contactMethod = "instagram";

  if (contactMethod) {
    trackAnalytics("contact_click", {
      contact_method: contactMethod,
      link_location: location,
    });
  }

  if (href === "#strength" || href === "#breath") {
    trackAnalytics("service_interest", {
      service_name: href.slice(1),
      link_location: location,
    });
  }
});

document.querySelector(".children-breath-details").addEventListener("toggle", (event) => {
  if (event.target.open) {
    trackAnalytics("service_interest", {
      service_name: "children_breath",
      link_location: "children_breath_section",
    });
  }
});

// Disclosure navigation keeps keyboard focus predictable on small screens.
navToggle.hidden = false;
const setNav = (open, restoreFocus = false) => {
  nav.hidden = !open;
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "סגירת תפריט" : "פתיחת תפריט");
  document.body.classList.toggle("nav-open", open);
  updateContactBar();
  if (open) nav.querySelector("a").focus();
  else if (restoreFocus && mobileNavigation.matches) navToggle.focus();
};
navToggle.addEventListener("click", () => setNav(nav.hidden, !nav.hidden));
nav.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  setNav(false);
  const target = document.getElementById(link.hash.slice(1));
  if (target) {
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }
});
header.querySelector(".brand").addEventListener("click", () => setNav(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !nav.hidden) {
    event.preventDefault();
    setNav(false, true);
  }
});
document.addEventListener("focusin", (event) => {
  if (!nav.hidden && !header.contains(event.target)) setNav(false);
});
document.addEventListener("click", (event) => {
  if (!nav.hidden && !header.contains(event.target)) setNav(false, true);
});
mobileNavigation.addEventListener("change", () => {
  if (!mobileNavigation.matches) {
    const restore =
      nav.contains(document.activeElement) ||
      document.activeElement === navToggle;
    setNav(false);
    if (restore) header.querySelector(".brand").focus();
  }
});

// Each film loads on request. Play one at a time and retain native controls.
const videos = [...document.querySelectorAll("[data-video]")];
const startedVideos = new WeakSet();
const videoObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) entry.target.pause();
      });
    })
  : null;
document.querySelectorAll("[data-film]").forEach((film) => {
  const video = film.querySelector("[data-video]");
  const filmCover = film.querySelector("[data-film-cover]");
  const filmError = film.querySelector("[data-video-error]");
  film.querySelector("[data-film-play]").addEventListener("click", async (event) => {
    event.preventDefault();
    filmCover.hidden = true;
    video.hidden = false;
    video.tabIndex = 0;
    video.focus({ preventScroll: true });
    try {
      await video.play();
    } catch {
      // Playback can require another user gesture; the native play control is the recovery.
      if (video.error) filmError.hidden = false;
    }
  });
  const showError = () => { filmError.hidden = false; };
  video.addEventListener("error", showError);
  video.querySelector("source")?.addEventListener("error", showError);
  video.addEventListener("play", () => {
    videos.forEach((other) => { if (other !== video) other.pause(); });
    if (!startedVideos.has(video)) {
      startedVideos.add(video);
      trackAnalytics("video_start", { video_title: video.getAttribute("aria-label") });
    }
  });
  video.addEventListener("ended", () => {
    trackAnalytics("video_complete", { video_title: video.getAttribute("aria-label") });
  });
  videoObserver?.observe(video);
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) videos.forEach((video) => video.pause());
});

// The faceted breathing artwork only moves on screen and follows live motion preferences.
const breathArt = document.querySelector("[data-breath-art]");
const motionToggle = document.querySelector("[data-motion-toggle]");
let breathOnScreen = false;
let breathPaused = false;
const syncBreath = () => {
  const motionAllowed = !motionPreference.matches;
  breathArt.classList.toggle(
    "is-moving",
    motionAllowed && breathOnScreen && !breathPaused && !document.hidden,
  );
  motionToggle.hidden = !motionAllowed;
  motionToggle.setAttribute("aria-pressed", String(breathPaused));
  motionToggle.querySelector("[data-motion-label]").textContent = breathPaused
    ? "המשך התנועה"
    : "השהיית התנועה";
  motionToggle
    .querySelector("use")
    .setAttribute("href", breathPaused ? "#icon-play" : "#icon-pause");
};
motionToggle.addEventListener("click", () => {
  breathPaused = !breathPaused;
  syncBreath();
});
motionPreference.addEventListener("change", syncBreath);
document.addEventListener("visibilitychange", syncBreath);
if ("IntersectionObserver" in window)
  new IntersectionObserver(
    ([entry]) => {
      breathOnScreen = entry.isIntersecting;
      syncBreath();
    },
    { threshold: 0.1 },
  ).observe(breathArt);
syncBreath();

// A discreet contact bar appears after the opening and yields to nearby controls.
const mobileContact = document.querySelector("[data-mobile-contact]");
const homepageOpening = document.querySelector(".service-choices");
const contactGuardElements = [
  ...new Set([
    ...document.querySelectorAll('main a[href^="https://wa.me/"]'),
    ...document.querySelectorAll(
      "[data-film], [data-testimonial-track], [data-motion-toggle], .children-breath-details, #contact, .site-footer",
    ),
  ]),
];
const activeContactGuards = new Set();
const supportsContactObserver = "IntersectionObserver" in window;
let homepageOpeningPassed = false;
let contactRevealTimer = 0;

function contactBarShouldShow() {
  return (
    mobileViewport.matches &&
    nav.hidden &&
    !document.body.classList.contains("retreat-open") &&
    homepageOpeningPassed &&
    activeContactGuards.size === 0
  );
}

function setContactBarVisibility(visible) {
  mobileContact.classList.toggle("is-visible", visible);
  mobileContact.setAttribute("aria-hidden", String(!visible));
  mobileContact.tabIndex = visible ? 0 : -1;
}

function updateContactBar() {
  if (!mobileContact) return;
  clearTimeout(contactRevealTimer);
  if (!contactBarShouldShow()) {
    setContactBarVisibility(false);
    return;
  }
  if (mobileContact.classList.contains("is-visible")) return;
  contactRevealTimer = window.setTimeout(() => {
    if (contactBarShouldShow()) setContactBarVisibility(true);
  }, 140);
}

function updateContactFallback() {
  const headerBottom = header.getBoundingClientRect().bottom;
  homepageOpeningPassed =
    homepageOpening.getBoundingClientRect().bottom <= headerBottom;
  activeContactGuards.clear();
  contactGuardElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < innerHeight && rect.bottom > innerHeight * 0.52)
      activeContactGuards.add(element);
  });
}

if (supportsContactObserver) {
  new IntersectionObserver(
    ([entry]) => {
      const rootTop = entry.rootBounds?.top ?? 0;
      homepageOpeningPassed =
        !entry.isIntersecting && entry.boundingClientRect.bottom <= rootTop;
      updateContactBar();
    },
    { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
  ).observe(homepageOpening);

  const contactGuardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeContactGuards.add(entry.target);
        else activeContactGuards.delete(entry.target);
      });
      updateContactBar();
    },
    { rootMargin: "-52% 0px 0px 0px", threshold: 0.01 },
  );
  contactGuardElements.forEach((element) => contactGuardObserver.observe(element));
} else {
  updateContactFallback();
}

let scrollQueued = false;
function updateHeader() {
  const root = document.documentElement;
  // Separate thresholds prevent shrinking the header from toggling it back.
  const threshold = root.classList.contains("is-header-compact") ? 24 : 100;
  root.classList.toggle("is-header-compact", mobileNavigation.matches && scrollY > threshold);
}
const queueContactUpdate = () => {
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(() => {
    updateHeader();
    if (!supportsContactObserver) updateContactFallback();
    updateContactBar();
    scrollQueued = false;
  });
};
window.addEventListener("scroll", queueContactUpdate, { passive: true });
window.addEventListener("resize", queueContactUpdate);
window.addEventListener("load", queueContactUpdate);
window.addEventListener("pageshow", queueContactUpdate);
document.fonts.ready.then(updateContactBar);
updateHeader();
updateContactBar();

const sectionLinks = [...document.querySelectorAll(".desktop-nav a")];
if ("IntersectionObserver" in window) {
  const activeSections = new Set();
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        entry.isIntersecting
          ? activeSections.add(entry.target.id)
          : activeSections.delete(entry.target.id),
      );
      const activeLink = sectionLinks.find((link) =>
        activeSections.has(link.hash.slice(1)),
      );
      sectionLinks.forEach((link) => {
        if (link === activeLink) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-15% 0px -60% 0px" },
  );
  sectionLinks.forEach((link) =>
    navObserver.observe(document.getElementById(link.hash.slice(1))),
  );
}

// Workshop publication approved by the user after reviewing the local registration flow.
const retreatPublished = true;
const retreatRegistrationForm = document.querySelector("[data-retreat-registration-form]");
const retreatLocalPreview = ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);
const retreatDialog = document.querySelector("[data-retreat-dialog]");
const retreatLauncher = document.querySelector(".retreat-preview-launcher");
const retreatLaunchers = [...document.querySelectorAll("[data-retreat-open]")];
let retreatReturnFocus = null;

if (retreatDialog && retreatRegistrationForm && (retreatLocalPreview || retreatPublished)) {
  retreatLaunchers.forEach((button) => { button.hidden = false; });

  // Only a successful registration-service response unlocks payment. No personal data is persisted locally.
  const fields = retreatRegistrationForm.querySelector("[data-retreat-fields]");
  const submitButton = retreatRegistrationForm.querySelector("[data-retreat-submit]");
  const formStatus = retreatRegistrationForm.querySelector("[data-retreat-form-status]");
  const success = retreatDialog.querySelector("[data-retreat-registration-success]");
  const paymentStage = retreatDialog.querySelector("[data-retreat-payment-stage]");
  const previewNote = retreatDialog.querySelector("[data-retreat-form-preview]");
  const nameInput = retreatRegistrationForm.elements.namedItem("full_name");
  const phoneInput = retreatRegistrationForm.elements.namedItem("phone");
  const phoneError = retreatRegistrationForm.querySelector("[data-retreat-phone-error]");
  const paymentLinks = [...document.querySelectorAll("[data-retreat-payment-url]")];
  const endpoint = (retreatRegistrationForm.dataset.registrationEndpoint || "").trim();
  const localTest = retreatLocalPreview && /^\/\.qa\/registration-test\/(success|reject|invalid|delay)$/.test(endpoint);
  const configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint) || localTest;
  const previewOnly = retreatLocalPreview && !localTest;
  const receiptKey = "mamalina-retreat-2026-11-10-received-v1";
  let submitting = false;
  let registrationId = crypto.randomUUID();
  formStatus.tabIndex = -1;
  fields.disabled = !configured && !retreatLocalPreview;
  previewNote.hidden = !retreatLocalPreview;
  if (localTest) previewNote.textContent = "תצוגת בדיקה מקומית בלבד. הפרטים אינם נשלחים לאלינה ולא מתבצעת הרשמה אמיתית.";
  else if (previewOnly) previewNote.textContent = "תצוגה מקומית לבדיקה בלבד. להרשמה יש להשתמש בטופס באתר החי.";
  if (!configured && !retreatLocalPreview) {
    formStatus.textContent = "ההרשמה בטופס אינה זמינה כרגע. אפשר לפנות לאלינה בוואטסאפ שבהמשך.";
  }

  const showRetreatPayments = (unlocked) => {
    retreatRegistrationForm.hidden = unlocked;
    success.hidden = !unlocked;
    paymentStage.hidden = !unlocked;
    paymentLinks.forEach((link) => {
      if (unlocked) link.href = link.dataset.retreatPaymentUrl;
      else link.removeAttribute("href");
      link.setAttribute("aria-disabled", String(!unlocked));
      link.tabIndex = unlocked ? 0 : -1;
    });
  };
  if (localTest) {
    success.querySelector("h4").textContent = "בדיקת הטופס הושלמה. לא בוצעה הרשמה אמיתית.";
  }
  let restoredReceipt = false;
  if (configured && !previewOnly) {
    try {
      const receipt = JSON.parse(sessionStorage.getItem(receiptKey) || "null");
      restoredReceipt = receipt?.endpoint === endpoint && typeof receipt.registrationId === "string";
    } catch { /* Submission and payment also work without session storage. */ }
  }
  showRetreatPayments(restoredReceipt);

  [nameInput, phoneInput].forEach((input) => input.addEventListener("input", () => {
    input.setCustomValidity("");
    input.removeAttribute("aria-invalid");
    if (input === phoneInput) phoneError.hidden = true;
  }));

  retreatRegistrationForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitting) return;
    nameInput.value = nameInput.value.trim();
    phoneInput.value = phoneInput.value.trim();
    if (!nameInput.value) nameInput.setCustomValidity("הזינו שם מלא.");
    const phoneDigits = phoneInput.value.replace(/\D/g, "");
    if (!/^[+\d\s().-]+$/.test(phoneInput.value) || phoneDigits.length < 8 || phoneDigits.length > 15) {
      phoneInput.setCustomValidity("הזינו מספר טלפון תקין, כולל קידומת.");
      phoneInput.setAttribute("aria-invalid", "true");
      phoneError.hidden = false;
    }
    if (!retreatRegistrationForm.reportValidity()) return;
    if (!configured || previewOnly) {
      formStatus.textContent = "זו תצוגה מקומית בלבד. הפרטים לא נשלחו; להרשמה יש לפתוח את האתר החי.";
      formStatus.focus();
      return;
    }

    const payload = new FormData(retreatRegistrationForm);
    ["email", "city", "age"].forEach((field) => {
      const value = String(payload.get(field) || "").trim();
      if (value) payload.set(field, value);
      else payload.delete(field);
    });
    payload.set("retreat", "7 הצ׳אקרות | 10.11.2026 | כפר סאלד");
    payload.set("registration_id", registrationId);
    payload.set("amount_ils", "550");
    // Do not send personal information to analytics or put it in a URL.
    submitting = true;
    fields.disabled = true;
    retreatRegistrationForm.setAttribute("aria-busy", "true");
    submitButton.textContent = "שולחים את הפרטים…";
    formStatus.textContent = "ממתינים לאישור קבלת הפרטים…";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: "POST", body: payload, headers: { Accept: "application/json" }, signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error("Registration was not acknowledged");
      try {
        sessionStorage.setItem(receiptKey, JSON.stringify({ endpoint, registrationId }));
      } catch { /* Keep the successful registration usable without storage. */ }
      retreatRegistrationForm.reset();
      formStatus.textContent = "";
      showRetreatPayments(true);
      success.focus();
      if (!localTest) trackAnalytics("retreat_registration_received", { retreat_id: "seven_chakras_2026_11_10" });
    } catch {
      formStatus.textContent = "לא התקבל אישור שהפרטים נקלטו. הפרטים נשארו בטופס; אפשר לנסות שוב או לפנות לאלינה בוואטסאפ לעזרה.";
      formStatus.focus();
    } finally {
      clearTimeout(timeout);
      submitting = false;
      fields.disabled = false;
      retreatRegistrationForm.removeAttribute("aria-busy");
      submitButton.textContent = "שליחת פרטים והמשך לתשלום";
    }
  });

  retreatDialog.querySelector("[data-retreat-add-person]").addEventListener("click", () => {
    try { sessionStorage.removeItem(receiptKey); } catch { /* No storage is required to restart. */ }
    registrationId = crypto.randomUUID();
    retreatRegistrationForm.reset();
    formStatus.textContent = "";
    phoneError.hidden = true;
    [nameInput, phoneInput].forEach((input) => { input.setCustomValidity(""); input.removeAttribute("aria-invalid"); });
    showRetreatPayments(false);
    nameInput.focus();
  });

  const openRetreat = () => {
    if (retreatDialog.open) return;
    retreatReturnFocus = document.activeElement;
    if (!nav.hidden) setNav(false);
    videos.forEach((video) => video.pause());
    document.body.classList.add("retreat-open");
    retreatDialog.showModal();
    retreatDialog.scrollTop = 0;
    trackAnalytics("retreat_view", { retreat_id: "seven_chakras_2026_11_10" });
    updateContactBar();
  };

  retreatLaunchers.forEach((button) => button.addEventListener("click", openRetreat));
  retreatDialog.addEventListener("close", () => {
    document.body.classList.remove("retreat-open");
    updateContactBar();
    const target = retreatReturnFocus instanceof HTMLElement && retreatReturnFocus !== document.body
      ? retreatReturnFocus
      : retreatLauncher;
    // Wait until the browser removes modal inertness and restores launcher visibility.
    requestAnimationFrame(() => target.focus({ preventScroll: true }));
  });
  // Dismiss only when both ends of a pointer gesture are outside the dialog.
  let retreatPointerStartedOutside = false;
  const outsideRetreat = (event) => {
    const rect = retreatDialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right ||
      event.clientY < rect.top || event.clientY > rect.bottom;
  };
  retreatDialog.addEventListener("pointerdown", (event) => {
    retreatPointerStartedOutside = outsideRetreat(event);
  });
  retreatDialog.addEventListener("click", (event) => {
    if (retreatPointerStartedOutside && outsideRetreat(event)) retreatDialog.close();
    retreatPointerStartedOutside = false;
  });

  // Keep the event discoverable on every page load, including reloads in the same tab.
  openRetreat();
}
