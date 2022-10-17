function createContact() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const imageDescription = document.createElement("p");
  imageDescription.classList.add("image-description");
  imageDescription.textContent =
    "Located in Juifen city, once you arrive you must make your way to the 4th floor.";

  const location = document.createElement("img");
  location.classList.add("location");
  location.src = "images/location.png";

  const phoneNumber = document.createElement("p");
  phoneNumber.classList.add("phone-number");
  phoneNumber.textContent = "(918) 123-4567";

  textContainer.appendChild(imageDescription);
  textContainer.appendChild(phoneNumber);

  contactContainer.appendChild(textContainer);
  contactContainer.appendChild(location);

  return contactContainer;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";

  main.appendChild(createContact());
}

export default loadContact;
