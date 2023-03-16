const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const navRef = document.querySelector('#ingredients');

// const listToInsertItems = ingredients.map(ingredient => {
//   const liRef = document.createElement('li');

//   liRef.className = 'item';
//   liRef.textContent = ingredient;

//   return liRef;
// });

const makeListToInsertItems = ingredients => {
  return ingredients.map(ingredient => {
    const liRef = document.createElement('li');

    liRef.className = 'item';
    liRef.textContent = ingredient;

    return liRef;
  });
};

const listToInsertItems = makeListToInsertItems(ingredients);

navRef.append(...listToInsertItems);
