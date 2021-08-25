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
content.prepend(createHeader());
content.appendChild(hero());
content.appendChild(createMenu());
content.appendChild(createContact());
content.appendChild(createFooter());

/*
const nav = document.querySelector(".nav");
nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.textContent === "Home") {
    content.childNodes[1].remove();
    content.appendChild(hero());
  } else if (e.target.textContent === "Contact") {
    content.childNodes[1].remove();
    content.appendChild(createContact());
  } else if (e.target.textContent === "Menu") {
    content.childNodes[1].remove();
    content.appendChild(createMenu());
  }
})
*/