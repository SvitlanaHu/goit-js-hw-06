const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");

// ingredients.forEach(ingredient => {
//   const listItem = document.createElement("li");
//   listItem.classList = "item"
//   listItem.textContent = ingredient;

//   listIngredients.append(listItem)
// });

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

listIngredients.insertAdjacentHTML("beforeend", markup);