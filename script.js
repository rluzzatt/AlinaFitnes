const root = document.documentElement;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  root.classList.add("js-motion");
}

if (header && nav && navToggle) {
  const closeNav = () => {
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    header.classList.remove("nav-active");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    header.classList.toggle("nav-active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNav();
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-counter]");

const revealVisibleItems = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      item.classList.add("is-visible");
    }
  });
};

const setCounterFinalValue = (counter) => {
  const suffix = counter.dataset.suffix || "";
  counter.textContent = `${counter.dataset.counter || counter.textContent}${suffix}`;
  counter.dataset.counted = "true";
};

const animateCounter = (counter) => {
  if (counter.dataset.counted === "true") {
    return;
  }

  const target = Number(counter.dataset.counter);

  if (!Number.isFinite(target) || !window.requestAnimationFrame || !window.performance) {
    setCounterFinalValue(counter);
    return;
  }

  counter.dataset.counted = "true";
  const suffix = counter.dataset.suffix || "";
  const start = performance.now();
  const duration = 1200;

  const tick = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    counter.textContent = `${Math.round(target * eased)}${suffix}`;

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  };

  window.requestAnimationFrame(tick);
};

const activateVisibleCounters = () => {
  counters.forEach((counter) => {
    const rect = counter.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.84 && rect.bottom > 0) {
      reduceMotion ? setCounterFinalValue(counter) : animateCounter(counter);
    }
  });
};

const syncScroll = () => {
  root.style.setProperty("--scroll", String(window.scrollY));
  revealVisibleItems();
  activateVisibleCounters();
};

window.addEventListener("scroll", syncScroll, { passive: true });
window.addEventListener("resize", syncScroll);
window.setTimeout(syncScroll, 180);
syncScroll();

if (!reduceMotion && window.requestAnimationFrame) {
  document.querySelectorAll("[data-magnetic]").forEach((target) => {
    target.addEventListener("pointermove", (event) => {
      const rect = target.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.14;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.2;

      target.style.setProperty("--button-x", `${x}px`);
      target.style.setProperty("--button-y", `${y}px`);
    });

    target.addEventListener("pointerleave", () => {
      target.style.setProperty("--button-x", "0px");
      target.style.setProperty("--button-y", "0px");
    });
  });

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty("--tilt-x", `${y * -4}deg`);
      card.style.setProperty("--tilt-y", `${x * 5}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}
