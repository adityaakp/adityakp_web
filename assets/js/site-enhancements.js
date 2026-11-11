/* Small progressive accessibility layer for original navigation. */
(function () {
  "use strict";
  var toggle = document.querySelector(".js-menuBtn");
  var nav = document.getElementById("site-menu");
  if (!toggle || !nav) return;
  function syncMenu() {
    var open = toggle.classList.contains("js-menuOpen");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    nav.setAttribute("aria-hidden", open ? "false" : "true");
    var links = nav.querySelectorAll("a");
    links.forEach(function (link) { if (open) link.removeAttribute("tabindex"); else link.setAttribute("tabindex", "-1"); });
  }
  toggle.addEventListener("click", function () { requestAnimationFrame(syncMenu); });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.classList.contains("js-menuOpen")) {
      toggle.click(); toggle.focus();
    }
  });
  document.addEventListener("click", function (event) {
    if (event.target.closest && event.target.closest(".global-nav a")) requestAnimationFrame(syncMenu);
  });
  syncMenu();
})();
