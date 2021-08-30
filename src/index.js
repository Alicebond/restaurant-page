import "./style.css";
import {
  createHeader,
  hero
} from "./homeTag.js";
import {
  createMenu
} from "./menuTag.js";
import {
  createContact
} from "./contactTag.js";
import {
  createFooter
} from "./footer.js"

const content = document.querySelector("#content");
const body = document.querySelector("body");
body.insertBefore(createHeader(), content)
content.appendChild(hero());
content.after(createFooter());

const nav = document.querySelector(".nav");
nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.textContent === "Home") {
    content.childNodes[0].remove();
    content.appendChild(hero());
  } else if (e.target.textContent === "Contact") {
    content.childNodes[0].remove();
    content.appendChild(createContact());
  } else if (e.target.textContent === "Menu") {
    content.childNodes[0].remove();
    content.appendChild(createMenu());
  }
})