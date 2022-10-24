 const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onChangeFocus)

function onChangeFocus(){
 
    if (inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
        
    } else  {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid') 
    }
 }


// ====================2nd variant=============

// const inputRef = document.querySelector('#validation-input');
// inputRef.addEventListener('blur', onChangeFocus)

// function onChangeFocus(event){

//     if (event.currentTarget.value.length == inputRef.getAttribute('data-length')) {
//         inputRef.classList.add('valid')
//         inputRef.classList.remove('invalid')

//     } else  {
//          inputRef.classList.remove('valid')
//         inputRef.classList.add('invalid')
//     }
//  }
 
