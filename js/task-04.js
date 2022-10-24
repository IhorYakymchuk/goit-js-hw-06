const counter = {
    value: 0,
    increment() { this.value += 1 },
    decrement() { this.value -= 1 },
};

const inctementBtnRef = document.querySelectorAll('button')[1];
const decremenBtnRef = document.querySelectorAll('button')[0];
const valueRef = document.querySelector('span');

 
inctementBtnRef.addEventListener('click', function () {
    counter.increment()
    valueRef.textContent = counter.value
});
decremenBtnRef.addEventListener('click', function () {
    counter.decrement()
    valueRef.textContent = counter.value
});



// ======================================

// let counterValue = 0;

// const inctementBtnRef = document.querySelector(`[data-action ="increment"]`);
// const decremenBtnRef = document.querySelector(`[data-action ="decrement"]`);
// const valueRef = document.querySelector('#value');

// const increment = () => {
//     counterValue += 1;
//     document.getElementById(`value`).textContent = counterValue;
// };

// const decrement = () => {
//     counterValue -= 1;
//     document.getElementById(`value`).textContent = counterValue;
// };

// inctementBtnRef.addEventListener('click', increment);
// decremenBtnRef.addEventListener('click', decrement);
