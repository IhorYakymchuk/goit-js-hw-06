const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onChangeInput);

function onChangeInput() {
    spanRef.style.fontSize = `${inputRef.value}px`;
}

// =====================================
// const inputRef  = document.querySelector('#font-size-control');
// const spanRef = document.querySelector('#text')

// inputRef.addEventListener('input', onChangeInput);

/**
  |============================
  | ЯК КРАЩЕ?????
  |============================
*/
// function onChangeInput(event) {
//     spanRef.style.fontSize = `${event.currentTarget.value}px`

// }

 