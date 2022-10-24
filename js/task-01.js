
const allCategoriesRef = document.querySelector("#categories");
const categoriesRef = document.getElementsByClassName('item');
console.log("Number of categories: ", categoriesRef.length);



for (let i = 0; i < categoriesRef.length; i += 1) {
    console.log("Category: ", categoriesRef[i].querySelector("h2").textContent);
    console.log("Elements: ", categoriesRef[i].querySelectorAll("li").length);
  }