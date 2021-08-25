"use strict";
import noodles from "./noodles.jpg"
import chicken from "./chicken.jpeg"
import beef from "./beef.jpeg"
import veges from "./veges.jpeg"

function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");
  const container = document.createElement("div");
  container.classList.add("container");

  menuDiv.appendChild(container);

  for (let i = 0; i < 4; i++) {
    const showcase = document.createElement("div");
    showcase.classList.add("showcase");
    const content = document.createElement("div");
    content.classList.add("content");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const figure = document.createElement("figure");
    const img = document.createElement("img");

    container.appendChild(showcase);
    showcase.appendChild(content);
    content.appendChild(h1);
    content.appendChild(p);
    showcase.appendChild(figure);
    figure.appendChild(img);

    if (i === 0) {
      showcase.classList.add("noodles");
      h1.textContent = "Noodles";
      p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet magni eligendi libero officia nesciunt.";
      img.src = noodles;
      img.alt = "A bowl of noodles";
    } else if (i === 1) {
      showcase.classList.add("chicken");
      h1.textContent = "Chicken";
      p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet magni eligendi libero officia nesciunt.";
      img.src = chicken;
      img.alt = "Fried chicken";
    } else if (i === 2) {
      showcase.classList.add("beef");
      h1.textContent = "Beef";
      p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet magni eligendi libero officia nesciunt.";
      img.src = beef;
      img.alt = "Beef";
    } else if (i === 3) {
      showcase.classList.add("veges");
      h1.textContent = "Vegetables";
      p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet magni eligendi libero officia nesciunt.";
      img.src = veges;
      img.alt = "Vegetables";
    }

  }

  return menuDiv;
}

export {
  createMenu
}