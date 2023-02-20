const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients')
console.log(ingredientsList);
const elements= ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li')
  
  ingredientsItem.textContent=ingredient;
  ingredientsItem.classList.add('item')
  return ingredientsItem;
})
ingredientsList.append(...elements);