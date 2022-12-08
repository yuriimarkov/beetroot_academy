/* Тобі потрібно зберігати ім’я та прізвище в змінній, 
придумай до 4-х імен змінних, що потрібні тобі для даної задачі. 
Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
*/
// const userName = 'Yurii Markov';
// let profileName = 'Popov Ivan';
// let fullName = 'Yurii Markov';
// let userFullName = 'Yurii Markov';

//Вкажи всі можливі способи коментування коду;
    // first method
    /* second method */

//Які стилі написання імен змінних ти знаєш?
// let camelCase = 'Camel Case method';
// let kebab_case = 'Kebab case method';

//Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let yourName = prompt('Введіть ваше імя')
alert(`Привіт, ${yourName}`);

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const nowYear = 2022;
let birthDay = prompt('Ваш рік народження');
let age = nowYear - birthDay;

alert(`Ваш вік, ${age} `);

//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

let side = prompt('Введіть сторону квадрата')
let perimeter = 4 * side;

alert(`Периметр квардрата дорівнює ${perimeter}`);
