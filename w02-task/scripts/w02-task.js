/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */


/* Step 3 - Element Variables */


/* Step 4 - Adding Content */
/* Step 5 - Array */
const fullname = 'Floriano Mathuca João Cuangana';
const nameElement = document.querySelector('#name');
nameElement.textContent = fullname;
nameElement.innerHTML = `<strong>${fullname}</strong>`;

const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('#year');
yearElement.textContent = currentYear;

const picture = 'images/yano.jpg';
const pictureElement = document.querySelector("#picture");
pictureElement.setAttribute('src', picture)

const food = ["Funge", "Calulu", "Feijão de oleo de palma", "Mufete"];
const foodElement = document.querySelector('#food');
foodElement.textContent = food.join(", ");
const anotherfood = "Bacalhão com Natas";
food.push(anotherfood);
foodElement.textContent = food.join(", ");
food.shift();
foodElement.textContent = food.join(", ");
food.pop();
foodElement.textContent = food.join(", ");
//foodElement.textContent = food;
