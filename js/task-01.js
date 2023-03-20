const listCategories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', listCategories.length);

listCategories.forEach(category => {
  console.log('Category :', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.children.length);
});
