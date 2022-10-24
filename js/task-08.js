
const formRef = document.querySelector('.login-form');

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
   
  if (email.value === "" || password.value === "") {
     alert("Всі поля повинні бути заповненні!!!");
  } 
   console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
});


// ===============https://www.edu.goit.global/uk/learn/2683518/2294/2300/textbook=====================

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });