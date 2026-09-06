const root = document.documentElement;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const mobileContact = document.querySelector("[data-mobile-contact]");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileNavigation = window.matchMedia("(max-width: 800px)");
const mobileViewport = window.matchMedia("(max-width: 600px)");

if (header && nav && navToggle) {
  const setNav = (isOpen, restoreFocus = false) => {
    nav.hidden = !isOpen;
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "סגירת תפריט" : "פתיחת תפריט",
    );
    if (isOpen) nav.querySelector("a")?.focus();
    else if (restoreFocus && mobileNavigation.matches) navToggle.focus();
  };

  navToggle.addEventListener("click", () => setNav(nav.hidden, !nav.hidden));
  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    const target =
      link.hash && link.origin === location.origin
        ? document.querySelector(link.hash)
        : null;
    setNav(false, !target);
    if (target) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  });
  header
    .querySelector(".brand")
    ?.addEventListener("click", () => setNav(false));
  document.addEventListener("keydown", (event) => {
    if (nav.hidden) return;
    if (event.key === "Escape") {
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
      const focusWasInMenu = header.contains(document.activeElement);
      setNav(false);
      if (focusWasInMenu) header.querySelector(".brand")?.focus();
    }
  });
}

// Cache section geometry; scrolling only updates progress, navigation and the contact bar.
const sectionLinks = [...document.querySelectorAll(".desktop-nav a")];
const heroContact = document.querySelector(".hero [data-primary-contact]");
const contactSection = document.querySelector("#contact");
let sectionPositions = [];
let heroContactBottom = Infinity;
let contactTop = Infinity;
let maxScroll = 1;
let headerHeight = 0;
let scrollQueued = false;
const visibleContactLinks = new Set();

const syncScroll = () => {
  const scrollTop = window.scrollY;
  root.style.setProperty(
    "--page-progress",
    String(Math.max(0, Math.min(scrollTop / maxScroll, 1))),
  );
  const readingLine = scrollTop + headerHeight + window.innerHeight * 0.2;
  sectionPositions.forEach(({ link, top, bottom }) => {
    if (readingLine >= top && readingLine < bottom)
      link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  if (mobileContact) {
    mobileContact.hidden =
      !mobileViewport.matches ||
      heroContactBottom - scrollTop > headerHeight ||
      contactTop - scrollTop < window.innerHeight ||
      visibleContactLinks.size > 0;
  }
  scrollQueued = false;
};
const measureLayout = () => {
  const scrollTop = window.scrollY;
  headerHeight = header?.offsetHeight || 0;
  maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
  sectionPositions = sectionLinks.map((link) => {
    const section = document.querySelector(link.hash);
    const bounds = section.getBoundingClientRect();
    return {
      link,
      top: bounds.top + scrollTop,
      bottom: bounds.bottom + scrollTop,
    };
  });
  heroContactBottom =
    (heroContact?.getBoundingClientRect().bottom ?? Infinity) + scrollTop;
  contactTop =
    (contactSection?.getBoundingClientRect().top ?? Infinity) + scrollTop;
  syncScroll();
};
window.addEventListener(
  "scroll",
  () => {
    if (!scrollQueued) {
      scrollQueued = true;
      window.requestAnimationFrame(syncScroll);
    }
  },
  { passive: true },
);
window.addEventListener("resize", measureLayout);
window.addEventListener("load", measureLayout);
window.addEventListener("pageshow", measureLayout);
document.fonts?.ready.then(measureLayout);
if ("ResizeObserver" in window)
  new ResizeObserver(measureLayout).observe(document.querySelector("main"));
measureLayout();
if ("IntersectionObserver" in window) {
  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleContactLinks.add(entry.target);
        else visibleContactLinks.delete(entry.target);
      });
      syncScroll();
    },
    { rootMargin: `-${headerHeight}px 0px 0px 0px` },
  );
  document
    .querySelectorAll('main a[href^="https://wa.me/"]')
    .forEach((link) => contactObserver.observe(link));
}

// The ambient breathing motif only moves on screen, with an explicit pause control.
const breathArt = document.querySelector("[data-breath-art]");
const motionToggle = document.querySelector("[data-motion-toggle]");
if (breathArt && motionToggle) {
  let userPaused = false;
  let onScreen = false;
  const syncBreath = () => {
    const canAnimate = !motionPreference.matches;
    breathArt.classList.toggle(
      "is-moving",
      canAnimate && !userPaused && onScreen && !document.hidden,
    );
    motionToggle.hidden = !canAnimate;
    motionToggle.setAttribute("aria-pressed", String(userPaused));
    motionToggle.setAttribute(
      "aria-label",
      userPaused ? "המשך תנועת הנשימה" : "השהיית תנועת הנשימה",
    );
    motionToggle.querySelector("[data-motion-label]").textContent = userPaused
      ? "להמשיך את התנועה"
      : "להשהות את התנועה";
  };
  motionToggle.addEventListener("click", () => {
    userPaused = !userPaused;
    syncBreath();
  });
  motionPreference.addEventListener("change", syncBreath);
  document.addEventListener("visibilitychange", syncBreath);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        syncBreath();
      },
      { threshold: 0.05 },
    ).observe(breathArt);
  }
  syncBreath();
}
