//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let first = 0.1 + 0.2;
console.log(first.toFixed(1));

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let str = Number('1');
let num = 2;
console.log(str + num);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
 const film = 820;
 let size = prompt('Введіть обсяг флешки');
 let file = size*1024 / 820;
 console.log('Поміщається' + ' ' + file.toFixed() + ' ' + 'файл');

 //Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let money = prompt('Введіть суму грошей');
let oneChocolate = prompt('Введіть ціну 1 шоколадки');
let chocolateResult = money / oneChocolate;
let moneyBack = money % oneChocolate;
console.log('Ви можете придбати' + ' ' + chocolateResult.toFixed() + ' ' + 'і ваша решта' + ' ' + moneyBack);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let chislo = prompt('Введіть тризначне число');
let resultat = 0;
let finalResultat = '';

if (chislo.length >= 3) {
    while (chislo > 0) {
        resultat = chislo % 10;
        chislo = Math.floor(chislo / 10);
        finalResultat += resultat;
    }
    console.log(finalResultat);
} else {
    console.log ('Введіть валідне число')
}

//2 варіант вирішення
let reverses = chislo.split('');
console.log(reverses.reverse().join(''));

//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let userMoney = prompt('Введіть сумму інвестицій');
const persentYear = 5;
const month = 2;
let persent = userMoney / 100 * persentYear / 12 * month;
let finalResult = persent + Number(userMoney);
console.log(finalResult.toFixed(2));




