import "./style.css";
import {
  createNav,
  hero
} from "./homeTag.js";

const content = document.querySelector("#content");

content.prepend(createNav());
content.appendChild(hero())