//   Number of categories:
const listCategories = document.getElementById('categories');
const listItem = document.querySelectorAll('.item');
console.log("Number of categories:", listItem.length);

//   Category: Animals
const items = document.querySelectorAll('#categories .item');
items.forEach((item) => {
    const itemTitle = item.firstElementChild.textContent;
    const numberOfElements = item.lastElementChild.children.length;

    console.log(`Categories: ${itemTitle}`);
    console.log(`Elements: ${numberOfElements}`);
}); 