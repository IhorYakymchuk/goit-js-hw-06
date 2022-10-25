const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onChangeInput);

function onChangeInput(event) {
  spanRef.style.fontSize = `${event.currentTarget.value}px`
}




// =====================================
// const inputRef  = document.querySelector('#font-size-control');
// const spanRef = document.querySelector('#text')

// inputRef.addEventListener('input', onChangeInput);

/**
  |============================
  | альтернативний варіант
  |============================
*/

// function onChangeInput() {
//     spanRef.style.fontSize = `${inputRef.value}px`;
// }

 