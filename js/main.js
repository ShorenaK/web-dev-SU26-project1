import { initNav } from "./nav.js";
import { initMarquee } from "./marquee.js";
import { initTimeline } from "./timeline.js";
import { initTerminal } from "./terminal.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initMarquee();
  initTimeline();
  initTerminal();
});
