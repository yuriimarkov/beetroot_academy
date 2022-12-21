// //Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// let userAge = Number(prompt('Вкажіть, будь ласка, Ваш вік:'));

// if  (userAge >= 0 && userAge <= 11) {
//     alert('Ви - дитина!');
// } else if (userAge >= 12 && userAge <= 17) {
//     alert('Ви - підліток!');
// } else if (userAge >= 18 && userAge <= 59) {
//     alert('Ви - дорослий!');
// } else if (userAge >= 59) {
//     alert('Ви - пенсіонер!');
// } else {
//     alert('Помилка! Введіть свій вік - коректно!');
// }

// //Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// let userNum = +prompt('Введіть число від 0 до 9 ');

// switch (userNum) {
//     case 0 : 
//         alert('На цій клавіші знаходиться цей символ - )');
//     break;
//     case 1 : 
//         alert('На цій клавіші знаходиться цей символ - !');
//     break;
//     case 2 : 
//         alert('На цій клавіші знаходиться цей символ - @');
//     break;
//     case 3 : 
//         alert('На цій клавіші знаходиться цей символ - #');
//     break;
//     case 4 : 
//         alert('На цій клавіші знаходиться цей символ - $');
//     break;
//     case 5 : 
//         alert('На цій клавіші знаходиться цей символ - %');
//     break;
//     case 6 : 
//         alert('На цій клавіші знаходиться цей символ - ^');
//     break;
//     case 7 : 
//         alert('На цій клавіші знаходиться цей символ - &');
//     break;
//     case 8 : 
//         alert('На цій клавіші знаходиться цей символ - *');
//     break;
//     case 9 : 
//         alert('На цій клавіші знаходиться цей символ - (');
//     break;
//     default : 
//         alert('Помилка!')
//     break;
// }

// //Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// let startNum = +prompt('Введіть початок діапазону чисел');
// let finishNum = +prompt('Введіть кінець діапазону чисел');
// let sum = 0;

// for (startNum = 0; startNum <= finishNum; startNum++) {
//     sum += startNum;
// }
// alert(sum);


// // Запитай у користувача число і виведи всі дільники цього числа.

// let number = +prompt('Введіть число');

// for (let i = 1; i <= number / 2; i++) {
//   if (number % i == 0) {
//     console.log(i);
//   }
// }

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// let chislo = prompt('Введіть 5-ти значне число');
// let finalResultat = '';

//     for(let i = chislo.length; i >= 0 ; i--) {
//         finalResultat = finalResultat + chislo.charAt(i);
//     }

//     if (finalResultat === chislo) {
//         alert('Твоє число - паліндром')
//     } else {
//         alert('Твоє число -  не є паліндром')
//     }

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
// let userSumBuy = +prompt('Введіть число');

// if (userSumBuy >= 200 && userSumBuy < 300) {
//    discountedBuy = userSumBuy - (userSumBuy / 100 * 3);
//    alert(`Suma do oplati ${discountedBuy}`);
// } else if (userSumBuy >= 300 && userSumBuy < 500) {
//    discountedBuy = userSumBuy - (userSumBuy / 100 * 5);
//    alert(`Suma do oplati ${discountedBuy}`);
// } else if (userSumBuy >= 500) {
//    discountedBuy = userSumBuy - (userSumBuy / 100 * 7);
//    alert(`Suma do oplati ${discountedBuy}`);
// } else {
//     alert(`Suma do oplati ${userSumBuy}`);
// }


//Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

// let arr;
// let negativeNum = 0;
// let positiveNum = 0;
// let zeroNum = 0;
// let evenNum = 0;
// let oddNum = 0;

// for(let i = 1; i <= 10; i++ ) {
//     arr = +prompt(`Give me number ${i}`);
//     console.log(arr);

//     if (arr < 0) {
//         negativeNum++;
//     } else if (arr > 0 ) {
//         positiveNum++;
//     } else zeroNum++;

//     if (arr % 2 === 0) {
//         evenNum++;
//     } else oddNum++;
// }
// console.log(
//    `You put in 10 numbers. There are ${positiveNum} positive numbers, ${negativeNum} negative numbers and ${zeroNum} zeros. There are ${oddNum} odd numbers and ${evenNum} even numbers in this list.`
//  );









