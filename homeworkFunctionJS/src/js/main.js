//Напиши всі можливі варіанти створення функцій.
// 'Для создания функций мы можем использовать объявление функции.Вначале идёт ключевое слово 'function', после него имя функции, затем список параметров в круглых скобках через запятую (в вышеприведённом примере он пустой) и, наконец, код функции, также называемый «телом функции», внутри фигурных скобок.'
// 'Стрелочные функции — функции вида "arrow function expression" (неверно fat arrow function) — имеют укороченный синтаксис по сравнению с function expression и лексически связывает значение this. '

//Створи функцію, яка буде виводити кількість переданих їй аргументів.

// function square(a,b, c) {

// }
// console.log(square.length);

/* Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні. */

// function twoNum (x, y ) {
//     if (x < y) {
//         console.log(-1);
//     } else if (x > y) {
//         console.log(1)
//     } else if ( x === y) {
//         console.log(0)
//     } else console.log ('Ой, помилка!')
// }   
// twoNum(12,13);

//Напиши функцію, яка обчислює факторіал переданого їй числа.
// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }
//   alert(factorial(10));

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// function conCated(a, b, c) {
//   let concatNum = `${a}` + `${b}` + `${c}`;
//   console.log(concatNum);
// }
// conCated(1,4,9);


//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// function squareFun(getHeight , getWidth ) {
//   if (getHeight === undefined) {
//     return  getWidth * getWidth;
//   } else if (getWidth === undefined) {
//     return getHeight * getHeight;
//   } else return getHeight * getWidth;
// }
// console.log(squareFun(2,4));




// // // Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// let getPerfectNum;
// let sum = 0;
// function getPerfect(num) {
//   for(let i = 1; i < num; i++) {
//       if(num % i === 0) {
//         sum += i;
//       }
//   }
  
//   return getPerfectNum = num === sum;
// }

// console.log(getPerfect(6));

