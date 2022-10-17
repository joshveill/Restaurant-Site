function createMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menuContainer.appendChild(
    makeMenuItem(
      "Salmon Nigiri",
      "Hand rolled salmon and fish roe sushi served with soy sauce"
    )
  );

  menuContainer.appendChild(
    makeMenuItem(
      "Howls Breakfeast",
      "Wonderful bacon and eggs from Howl's moving castle"
    )
  );

  menuContainer.appendChild(
    makeMenuItem(
      "Chicken Karaage",
      "Delicious chicken cooked Japanese style with an in-house curry made with local ingredients"
    )
  );

  menuContainer.appendChild(
    makeMenuItem(
      "Ichiraku's Ramen",
      "Delicous steaming ramen made from Japan's most famous ramen shop, Ichiraku!"
    )
  );

  menuContainer.appendChild(
    makeMenuItem(
      "Hot Pot",
      "Authentic hot pot straight from One Punch Man's universe, guaranteed to satisfy your cold heart!"
    )
  );

  return menuContainer;
}

function makeMenuItem(foodItem, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h3");
  foodName.classList.add("food-name");
  foodName.textContent = foodItem;

  const foodImage = document.createElement("img");
  foodImage.classList.add("food-image");
  foodImage.src = `images/${foodItem}.png`;

  const foodDescription = document.createElement("p");
  foodDescription.classList.add("food-description");
  foodDescription.textContent = description;

  menuItem.appendChild(foodName);
  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";

  main.appendChild(createMenu());
}

export default loadMenu;
