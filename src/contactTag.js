"use strict";
import staff1 from "./staff1.jpeg"
import staff2 from "./staff2.jpeg"
import staff3 from "./staff3.jpg"

function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  const container = document.createElement("div");
  container.classList.add("container");

  contact.appendChild(container);

  for (let i = 0; i < 3; i++) {
    const staff = document.createElement("div");
    staff.classList.add("staff");
    const img = document.createElement("img");
    const info = document.createElement("div");
    info.classList.add("info");
    const h1 = document.createElement("h1");
    h1.classList.add("fullname");
    const title = document.createElement("div");
    title.classList.add("title");
    const phone = document.createElement("div");
    phone.classList.add("phone");
    const email = document.createElement("div");
    email.classList.add("email");

    container.appendChild(staff);
    staff.appendChild(img);
    staff.appendChild(info);
    info.appendChild(h1);
    info.appendChild(title);
    info.appendChild(phone);
    info.appendChild(email);
    img.alt = "Avatar";

    if (i === 0) {
      img.src = staff1;
      h1.textContent = "Ellen Carroll";
      title.textContent = "Manager";
      phone.textContent = "Phone: 82828282";
      email.textContent = "E-mail: 82828282@emal.com";
    } else if (i === 1) {
      img.src = staff2;
      h1.textContent = "Rich Harrison";
      title.textContent = "Customer Service";
      phone.textContent = "hone: 34343434";
      email.textContent = "E-mail: 34343434@emal.com";
    } else if (i === 2) {
      img.src = staff3;
      h1.textContent = "Gonca Kıraç";
      title.textContent = "Customer Service";
      phone.textContent = "Phone: 92929229292";
      email.textContent = "E-mail: 92929229292@emal.com";
    }
  }

  return contact;
}

export {
  createContact
}