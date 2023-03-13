const listCategories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', listCategories.length);

listCategories.forEach(category => {
  console.log('Category :', category.querySelector('h2').textContent);
  console.log('Elements:', category.querySelector('ul').children.length);
});
