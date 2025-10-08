import { Popover } from "./components/popover.js";

document.addEventListener("DOMContentLoaded", () => {
  const popover = new Popover();

  document.querySelectorAll('[data-toggle="popover"]').forEach((popoverObj) => {
    popoverObj.addEventListener("click", (e) => {
      e.preventDefault();

      let existingPopover = document.querySelector(".popover");

      if (existingPopover) {
        if (e.target.dataset.id === existingPopover.dataset.id) {
          existingPopover.remove();
          return;
        } else {
          existingPopover.remove();
        }
      }

      // Показываем новый поповер
      const newPopoverId = popover.showPopover(popoverObj);
      popoverObj.setAttribute("data-id", newPopoverId);

      existingPopover = document.querySelector(".popover");

      const handleClickOutside = (e) => {
        if (!popoverObj.contains(e.target) && existingPopover) {
          existingPopover.remove();
          document.removeEventListener("click", handleClickOutside);
        }
      };

      document.addEventListener("click", handleClickOutside);
    });
  });
});
