import { Popover } from "./components/popover.js";

document.addEventListener("DOMContentLoaded", () => {
  const popover = new Popover();
  const activePopover = [];

  document.querySelectorAll('[data-toggle="popover"]').forEach((popoverObj) => {
    popoverObj.addEventListener("click", (e) => {
      e.preventDefault();
      activePopover.forEach((id) => {
        popover.removePopover(id);
        activePopover.pop(id);
      });
      activePopover.push(popover.showPopover(popoverObj));
    });
  });
});
