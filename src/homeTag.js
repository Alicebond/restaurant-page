"use strict";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  const div = document.createElement("div");
  div.classList.add("container");
  const list = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = "#";
    if (i === 0) anchor.textContent = "Home";
    else if (i === 1) anchor.textContent = "Menu";
    else anchor.textContent = "Contact";
    listItem.appendChild(anchor);
    list.appendChild(listItem);
  }
  div.appendChild(list);
  nav.appendChild(div);
  header.appendChild(nav);

  return header;
}

function hero() {
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const div = document.createElement("div");
  div.classList.add("container");
  const h1 = document.createElement("h1");
  const p = document.createElement("p")

  h1.textContent = "Wind Restaurant";
  p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laudantium!"

  div.appendChild(h1);
  div.appendChild(p);
  hero.appendChild(div);

  return hero;
}

export {
  createHeader,
  hero,
};