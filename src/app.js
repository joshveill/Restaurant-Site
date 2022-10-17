import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

//creates header elements + calls the nav bar function and styles them together
function createHeader() {
  const header = document.createElement("header");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Katsumotos";

  headerContainer.appendChild(restaurantName);

  header.appendChild(headerContainer);
  header.appendChild(navbar());

  return header;
}

function navbar() {
  //called by createHeader to format nav
  const nav = document.createElement("nav");
  nav.classList.add("nav-bar");

  const homeButton = document.createElement("button"); //home button
  homeButton.classList.add("button-nav");
  homeButton.innerText = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement("button"); //menu button
  menuButton.classList.add("button-nav");
  menuButton.innerText = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement("button"); //contact button
  contactButton.classList.add("button-nav");
  contactButton.innerText = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}
//managing the active class on buttons
function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  // const footerContainer = document.createElement("div");
  // footerContainer.classList.add("footer-container");

  const githubName = document.createElement("a");
  githubName.classList.add("git-name");
  githubName.textContent = "Joshua Veilleux";
  githubName.href = "https://github.com/joshveill";

  const githubLogo = document.createElement("img");
  githubLogo.classList.add("git-logo");
  githubLogo.src = "images/github.png";

  footer.appendChild(githubName);
  footer.appendChild(githubLogo);
  // footer.appendChild(footerContainer);
  return footer;
}

function loadWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  
  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

export default loadWebsite;
