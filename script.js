const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const mobileNavigation = matchMedia("(max-width: 800px)");
const mobileViewport = matchMedia("(max-width: 600px)");
const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");

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
    ...document.querySelectorAll("[data-film], [data-motion-toggle], #contact, .site-footer"),
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
