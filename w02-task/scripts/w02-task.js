/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = 'Floriano Mathuca João Cuangana';
let currentYear = new Date().getFullYear();
const profilePicture =  'images/yano.jpg'

/* Step 3 - Element Variables */
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('')
imageElement.setAttribute('src', profilePicture)
const nameElement = document.getElementById('name');
nameElement.innerHTML=`<strong>${fullname}<strong>`;

/* Step 4 - Adding Content */

yearElement.textContent = currentYear;





/* Step 5 - Array */
let foodArray = ["pao","Calulu", "Funge", "Feijão de óleo de Palma"]
foodElement.textContent = foodArray;




