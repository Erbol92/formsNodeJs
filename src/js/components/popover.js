export class Popover {
  constructor() {
    this._popover = [];
  }

  showPopover(element) {
    const popoverEl = document.createElement("div");
    const title = element.getAttribute("title");
    const message = element.getAttribute("data-content");
    popoverEl.innerHTML = `
            <div class="popover-title">
                ${title}
            </div>
            <div class="popover-text">${message}</div>
        `;
    popoverEl.classList.add("popover");
    document.body.appendChild(popoverEl);
    const { top, left, width } = element.getBoundingClientRect();
    const popoverHeight = popoverEl.offsetHeight;
    const popoverWidth = popoverEl.offsetWidth;
    popoverEl.style.top = top - 5 - popoverHeight + "px";
    popoverEl.style.left = left - popoverWidth / 2 + width / 2 + "px";
    const id = performance.now();
    element.setAttribute("data-id", id);
    popoverEl.setAttribute("data-id", id);
    this._popover.push({
      id,
      element: popoverEl,
      isOpen: true,
    });

    return id;
  }

  removePopover(id) {
    const popover = this._popover.find((p) => p.id === id);
    popover.element.remove();
    this._popover = this._popover.filter((p) => p.id !== id);
  }
}
