// The free December workshop opens on homepage entry; registration remains a manual WhatsApp message.
(() => {
  const dialog = document.querySelector("[data-abundance-dialog]");
  const opener = document.querySelector("[data-abundance-open]");
  const close = dialog?.querySelector("[data-abundance-close]");
  if (!dialog || !opener || !close || typeof dialog.showModal !== "function") return;

  let returnFocus = opener;
  const announce = () => document.dispatchEvent(new Event("abundance:change"));
  const open = () => {
    if (dialog.open) return true;
    returnFocus = document.activeElement instanceof HTMLElement && document.activeElement !== document.body
      ? document.activeElement : opener;
    const menuToggle = document.querySelector("[data-nav-toggle]");
    if (menuToggle?.getAttribute("aria-expanded") === "true") menuToggle.click();
    try { dialog.showModal(); } catch { return false; }
    document.querySelectorAll("video").forEach((video) => video.pause());
    document.body.classList.add("abundance-open");
    dialog.scrollTop = 0;
    announce();
    return true;
  };

  opener.addEventListener("click", (event) => {
    if (event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (open()) event.preventDefault();
  });
  close.addEventListener("click", () => dialog.close());
  // Native Escape dismissal follows the same cleanup as the close button.
  dialog.addEventListener("close", () => {
    document.body.classList.remove("abundance-open");
    announce();
    requestAnimationFrame(() => {
      const target = returnFocus?.isConnected ? returnFocus : opener;
      target.focus({ preventScroll: true });
    });
  });

  let pointerStartedOutside = false;
  const outside = (event) => {
    const rect = dialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right
      || event.clientY < rect.top || event.clientY > rect.bottom;
  };
  dialog.addEventListener("pointerdown", (event) => { pointerStartedOutside = outside(event); });
  dialog.addEventListener("click", (event) => {
    if (pointerStartedOutside && outside(event)) dialog.close();
    pointerStartedOutside = false;
  });

  // Returning through the standalone page's X/logo should reveal the site, not another workshop window.
  const pageUrl = new URL(location.href);
  if (pageUrl.searchParams.get("abundance") === "closed") {
    pageUrl.searchParams.delete("abundance");
    try { history.replaceState(history.state, "", pageUrl.pathname + pageUrl.search + pageUrl.hash); }
    catch { /* The site remains usable when history replacement is unavailable. */ }
  } else {
    open();
  }
})();
