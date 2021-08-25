"use strict";

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const p = document.createElement("p");
  p.textContent = "All images are from https://www.pexels.com";
  footer.appendChild(p);

  return footer;
}

export {
  createFooter
}