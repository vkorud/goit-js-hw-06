const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientEll = ingredient => {
  return ingredient.map(element => {
    const listEll = document.createElement("li");
    listEll.classList.add("item");
    listEll.textContent = element;
    return listEll;
  });
}

const elements = makeIngredientEll(ingredients);

document.querySelector("#ingredients").append(...elements);
