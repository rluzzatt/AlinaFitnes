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

// The anchors remain service links without JavaScript; enhancement changes the opening's mode.
const hero = document.querySelector(".hero");
const modeOptions = [...document.querySelectorAll("[data-mode-option]")];
const modeCopy = {
  strength: {
    title: ["לנשום עמוק.", "להרים חזק."],
    description: ["סטודיו לאימוני כוח", "וקליניקת נשימה", "כפר סאלד"],
    action: "בואו נדבר בוואטסאפ",
    status: "תצוגת אימוני כוח",
  },
  breath: {
    title: ["לעצור לרגע.", "לנשום עמוק."],
    description: ["קליניקת נשימה", "וריברסינג", "כפר סאלד"],
    action: "נדבר על נשימה",
    status: "תצוגת נשימה וריברסינג",
  },
};
const setMode = (mode, announce = true) => {
  const copy = modeCopy[mode];
  if (!copy) return;
  hero.dataset.mode = mode;
  hero
    .querySelectorAll("h1 span")
    .forEach((span, index) => (span.textContent = copy.title[index]));
  const descriptor = hero.querySelector(".hero-contact p");
  descriptor.replaceChildren(
    ...copy.description.flatMap((line, index) =>
      index
        ? [document.createElement("br"), document.createTextNode(line)]
        : [document.createTextNode(line)],
    ),
  );
  hero.querySelector("[data-primary-contact]").firstChild.textContent =
    copy.action;
  modeOptions.forEach((option) => {
    const selected = option.dataset.modeOption === mode;
    option.classList.toggle("is-active", selected);
    option.setAttribute("aria-pressed", String(selected));
  });
  if (announce)
    document.querySelector("[data-mode-status]").textContent = copy.status;
};
modeOptions.forEach((option) => {
  option.setAttribute("role", "button");
  option.setAttribute("aria-controls", "hero-title");
  option.addEventListener("click", (event) => {
    event.preventDefault();
    setMode(option.dataset.modeOption);
  });
  option.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      event.preventDefault();
      option.click();
    }
  });
});
document
  .querySelectorAll("[data-mode-link]")
  .forEach((link) =>
    link.addEventListener("click", () => setMode(link.dataset.modeLink)),
  );
const syncHashMode = () => {
  if (location.hash === "#breath" || location.hash === "#strength")
    setMode(location.hash.slice(1), false);
};
setMode(location.hash === "#breath" ? "breath" : "strength", false);
window.addEventListener("hashchange", syncHashMode);

// Only load the real training reel when a visitor presses play. Native controls stay available.
const video = document.querySelector("[data-video]");
const filmCover = document.querySelector("[data-film-cover]");
const filmError = document.querySelector("[data-video-error]");
document
  .querySelector("[data-film-play]")
  .addEventListener("click", async (event) => {
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
video.addEventListener("error", () => {
  filmError.hidden = false;
});
if ("IntersectionObserver" in window)
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) video.pause();
  }).observe(video);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) video.pause();
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
const heroContact = hero.querySelector("[data-primary-contact]");
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
    heroContact.getBoundingClientRect().bottom > headerBottom ||
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
