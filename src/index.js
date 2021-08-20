import "./style.css";

function component() {
  const content = document.querySelector("#content");
  const name = document.createElement("h1");
  const descrip = document.createElement("div");
  const p = document.createElement("p");
  // const header = document.createElement("header");
  // const body = document.querySelector("body");

  name.textContent = "Wind Restaurant";
  name.classList.add("name");
  content.classList.add("content");
  descrip.prepend(name);
  content.appendChild(name);
  descrip.classList.add("description");
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar quis turpis quis egestas."
  descrip.appendChild(p);
  content.appendChild(descrip);
  // header.classList.add("header");
  // body.prepend(header);

  return;
}

component();