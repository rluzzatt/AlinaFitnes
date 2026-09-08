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

// A discreet contact bar appears only after the opening and while no inline contact action is visible.
const mobileContact = document.querySelector("[data-mobile-contact]");
const homepageOpening = document.querySelector(".service-choices");
const contactSection = document.querySelector("#contact");
const contactLinks = [
  ...document.querySelectorAll('main a[href^="https://wa.me/"]'),
];
function updateContactBar() {
  if (!mobileContact) return;
  const headerBottom = header.getBoundingClientRect().bottom;
  const inlineVisible = contactLinks.some((link) => {
    const rect = link.getBoundingClientRect();
    return rect.top < innerHeight && rect.bottom > headerBottom;
  });
  mobileContact.hidden =
    !mobileViewport.matches ||
    !nav.hidden ||
    homepageOpening.getBoundingClientRect().bottom > headerBottom ||
    contactSection.getBoundingClientRect().top < innerHeight ||
    inlineVisible;
}
let scrollQueued = false;
const queueContactUpdate = () => {
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(() => {
    updateContactBar();
    scrollQueued = false;
  });
};
window.addEventListener("scroll", queueContactUpdate, { passive: true });
window.addEventListener("resize", queueContactUpdate);
window.addEventListener("load", updateContactBar);
window.addEventListener("pageshow", updateContactBar);
document.fonts.ready.then(updateContactBar);
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
