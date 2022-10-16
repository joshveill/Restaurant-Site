function createHome() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const welcomeMessage = document.createElement("h2");
  welcomeMessage.classList.add("welcome-message");
  welcomeMessage.textContent = "Welcome to the feast!";

  const feastGif = document.createElement("img");
  feastGif.src = "images/spirited.gif";
  feastGif.classList.add("feast-gif");

  const lastParagraph = document.createElement("p");
  lastParagraph.classList.add("last-paragraph");
  lastParagraph.textContent =
    "Katsumotos is a judgement-free zone, pigging out is encouraged by the staff and any bullying will not be tolerated! Pictured above is our Zeniba room for a luxurious experience. ";

  homeContainer.appendChild(welcomeMessage);
  homeContainer.appendChild(feastGif);
  homeContainer.appendChild(lastParagraph);

  return homeContainer;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";

  main.appendChild(createHome());
}

export default loadHome;
