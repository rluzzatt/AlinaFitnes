// Campaign attribution stays separate from the personal registration fields.
(() => {
  const pixelId = "1438005041791271";
  const storageKey = "mamalina-retreat-attribution-v1";
  const maxAge = 24 * 60 * 60 * 1000;
  const local = !["mamalinacenter.co.il", "www.mamalinacenter.co.il"].includes(location.hostname)
    || location.protocol !== "https:";
  const cleanSource = (values) => {
    if (!values || !["fb", "ig"].includes(values.utm_source)
      || values.utm_medium !== "paid_social" || values.utm_campaign !== "retreat_20261110") return {};
    const result = {
      utm_source: values.utm_source,
      utm_medium: "paid_social",
      utm_campaign: "retreat_20261110",
    };
    ["utm_content", "utm_term"].forEach((key) => {
      if (/^\d{1,30}$/.test(values[key] || "")) result[key] = values[key];
    });
    return result;
  };
  let source = cleanSource(Object.fromEntries(new URLSearchParams(location.search)));
  try {
    if (source.utm_source) {
      sessionStorage.setItem(storageKey, JSON.stringify({ source, capturedAt: Date.now() }));
    } else {
      const previous = JSON.parse(sessionStorage.getItem(storageKey) || "null");
      const age = Date.now() - previous?.capturedAt;
      if (Number.isFinite(age) && age >= 0 && age < maxAge) source = cleanSource(previous.source);
      else sessionStorage.removeItem(storageKey);
    }
  } catch { /* Registration does not require storage or attribution. */ }

  let started = false;
  const recorded = new Set();
  const start = () => {
    if (local || started) return;
    started = true;
    // Meta's base loader; no form fields or advanced matching identifiers are supplied.
    if (!window.fbq) {
      const queue = window.fbq = function () {
        queue.callMethod ? queue.callMethod.apply(queue, arguments) : queue.queue.push(arguments);
      };
      if (!window._fbq) window._fbq = queue;
      queue.push = queue;
      queue.loaded = true;
      queue.version = "2.0";
      queue.queue = [];
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }
    window.fbq("set", "autoConfig", false, pixelId);
    window.fbq("init", pixelId);
    window.fbq("trackSingle", pixelId, "PageView");
  };
  window.retreatMeasurement = Object.freeze({
    source: () => ({ ...source }),
    start,
    received: (registrationId) => {
      if (local || !started || recorded.has(registrationId)) return;
      recorded.add(registrationId);
      // A received lead is not a paid booking. No amount, name, phone, age or email.
      window.fbq("trackSingle", pixelId, "Lead", {}, { eventID: registrationId });
    },
  });
})();
