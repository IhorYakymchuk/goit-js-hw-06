
const categoriesRef = document.querySelectorAll('.item');

console.log("Number of categories:", categoriesRef.length);

categoriesRef.forEach(categoriesRef => {
  console.log(`Category: ${categoriesRef.querySelector('h2').textContent}`)
  
  console.log("Elements:", Number(categoriesRef.querySelectorAll('li').length))
});
  


// ===========імперативний код. краше не використовувати(непрофесійно)=======

// const allCategoriesRef = document.querySelector("#categories");
// const categoriesRef = document.getElementsByClassName('item');
// console.log("Number of categories: ", categoriesRef.length);



// for (let i = 0; i < categoriesRef.length; i += 1) {
//     console.log("Category: ", categoriesRef[i].querySelector("h2").textContent);
//     console.log("Elements: ", categoriesRef[i].querySelectorAll("li").length);
// }
  
// =======colleague's variant=======
//   const categoriesRef = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesRef.length}`);

// categoriesRef.forEach(item => {
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     console.log(`Elements: ${item.lastElementChild.children.length}`)
// });

