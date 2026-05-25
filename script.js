const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  document.documentElement.classList.add("js-motion");
}

if (header && nav && navToggle) {
  const closeNav = () => {
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    header.classList.remove("nav-active");
    navToggle.setAttribute("aria-expanded", "false");
  };

  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

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
const revealVisibleItems = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      item.classList.add("is-visible");
    }
  });
};

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
  window.setTimeout(revealVisibleItems, 350);
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

window.addEventListener("scroll", revealVisibleItems, { passive: true });
window.addEventListener("resize", revealVisibleItems);

if (!reduceMotion && window.requestAnimationFrame) {
  let latestPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let animationFrame = 0;

  const syncMotionVars = () => {
    const xShift = (latestPointer.x - window.innerWidth / 2) * -0.018;
    const yShift = (latestPointer.y - window.innerHeight / 2) * -0.018;

    document.documentElement.style.setProperty("--mx", `${latestPointer.x}px`);
    document.documentElement.style.setProperty("--my", `${latestPointer.y}px`);
    document.documentElement.style.setProperty("--mx-shift", `${xShift}px`);
    document.documentElement.style.setProperty("--my-shift", `${yShift}px`);
    document.documentElement.style.setProperty("--scroll", `${window.scrollY}`);
    animationFrame = 0;
  };

  const queueMotionSync = () => {
    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(syncMotionVars);
    }
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      latestPointer = { x: event.clientX, y: event.clientY };
      queueMotionSync();
    },
    { passive: true },
  );

  window.addEventListener("scroll", queueMotionSync, { passive: true });
  queueMotionSync();

  document.querySelectorAll("[data-magnetic]").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.22;

      button.style.setProperty("--button-x", `${x}px`);
      button.style.setProperty("--button-y", `${y}px`);
    });

    button.addEventListener("pointerleave", () => {
      button.style.setProperty("--button-x", "0px");
      button.style.setProperty("--button-y", "0px");
    });
  });

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty("--tilt-x", `${y * -5}deg`);
      card.style.setProperty("--tilt-y", `${x * 6}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

const animateCounter = (counter) => {
  if (counter.dataset.counted === "true") {
    return;
  }

  counter.dataset.counted = "true";
  const target = counter.dataset.counter;

  if (!target || target.includes(":")) {
    counter.textContent = target || counter.textContent;
    return;
  }

  const value = Number(target);
  const suffix = counter.dataset.suffix || "";
  const start = performance.now();
  const duration = 1050;

  const tick = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    counter.textContent = `${Math.round(value * eased)}${suffix}`;

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  };

  window.requestAnimationFrame(tick);
};

const counters = document.querySelectorAll("[data-counter]");
const activateVisibleCounters = () => {
  counters.forEach((counter) => {
    const rect = counter.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
      if (window.requestAnimationFrame && window.performance && !reduceMotion) {
        animateCounter(counter);
      } else {
        const suffix = counter.dataset.suffix || "";
        counter.textContent = `${counter.dataset.counter || counter.textContent}${suffix}`;
        counter.dataset.counted = "true";
      }
    }
  });
};

if ("IntersectionObserver" in window && !reduceMotion && window.requestAnimationFrame && window.performance) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.65 },
  );

  counters.forEach((counter) => counterObserver.observe(counter));
} else {
  activateVisibleCounters();
}

window.addEventListener("scroll", activateVisibleCounters, { passive: true });
window.addEventListener("resize", activateVisibleCounters);
window.setTimeout(activateVisibleCounters, 350);
