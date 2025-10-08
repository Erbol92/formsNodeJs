export class Popover {
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
    const scrollOffset = document.documentElement.scrollTop;
    const popoverHeight = popoverEl.offsetHeight;
    const popoverWidth = popoverEl.offsetWidth;
    popoverEl.style.top = top + scrollOffset  - 5 - popoverHeight + "px";
    popoverEl.style.left = left - popoverWidth / 2 + width / 2 + "px";
    const id = performance.now();
    element.setAttribute("data-id", id);
    popoverEl.setAttribute("data-id", id);
    return id;
  }
}
