const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector(".gallery");
const markup = images.map(({ url, alt }) => `<li><img src="${url} " alt="${alt} "></li>`).join('');
list.insertAdjacentHTML('beforeend', markup);



// ===========OLD SCHOOL=====================

// const galleryListRef = document.querySelector('.gallery')
// const arr = [];

// for (let i = 0; i < images.length; i += 1) {
//   const newItem = document.createElement('li');
//   const newImg = document.createElement('img');
//   newImg.classList.add(`size`);
//   newImg.setAttribute("src", images[i].url);
//   newImg.setAttribute("alt", images[i].alt);
//   newItem.append(newImg);
//   console.log(newItem);
//   arr.push(newItem)
// }
// galleryListRef.append(...arr);


// ====================MODERN VARIANT==================================

// const arr = []
// const galleryListRef = document.querySelector('.gallery')
// for (let i = 0; i < images.length; i += 1){
//   const markup = `<li><img src="${images[i].url}" alt="${images[i].alt}"></li>` 
//   arr.push(markup)
// }
// galleryListRef.insertAdjacentHTML('beforeend', arr.join(''))

// console.log(galleryListRef);



// =====================INITIAL CODE  #1===================================

// const arr = [];
// for (let i = 1; i <= 3; i += 1) {
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     const div = document.createElement('div');
//     const a = document.createElement('a')
//     div.append(a);
//     li.append(div);
//     li.append(img)
//     li.classList.add('js-item');
//     li.textContent = Number(refs.ul.lastElementChild.textContent) + i 
//     arr.push(li)
// }
// refs.ul.append(...arr);


// =====================INITIAL CODE #2===================================

// const arr = []
// for (let i = 1; i <= 30; i += 1) {
// const markup = `<li class="js-item">${Number(refs.ul.lastElementChild.textContent) + i}</li>`
// arr.push(markup)
// }
// refs.ul.insertAdjacentHTML('beforeend',arr.join(''))
// console.log(arr.join(''));