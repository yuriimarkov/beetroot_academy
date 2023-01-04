//Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
const shoppingList = [
    {   name: 'Egg',
        amout: 10 , 
        bought: true,
        price: 6.40,
        total: 64,
    }, 
    {   name: 'Meat',
        amout: 2 , 
        bought: true,
        price: 138,
        total: 272,
    }, 
    {   name: 'Beer',
        amout: 10 , 
        bought: false,
        price: 47.70,
        total: 477,
    }, 
    {   name: 'Yogurt',
        amout: 3, 
        bought: false,
        price: 11,
        total: 33,
    }, 
    {   name: 'Apple',
        amout: 3 , 
        bought: true,
        price: 12,
        total: 36,
    }, 
];

//Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали. 
// function getOutputSortedList (arr) {
//     arr.sort((a,b) => a.bought - b.bought);
//     console.log(arr);
// }
// getOutputSortedList(shoppingList);

//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// function itemIsBought (name) {
//     shoppingList.forEach(el => {
//         if(el.name === name) {
//             el.bought = true;
//         }
//     }
//         )
// }

// itemIsBought('Beer'); 
// console.log(shoppingList);

//Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// function deleteItemOnList (name) {
//     shoppingList.map((el, index) => {
//         if (el.name === name) {
//             shoppingList.splice(index, 1);
//         }
//     });
// }

// deleteItemOnList('Apple');
// console.log(shoppingList);

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
// function addItem(name,price){
//     let takeFlag = 0;
//     shoppingList.forEach((el) => {
//         if(el.name === name ) {
//             el.amout++;
//             el.total += el.price;
//             takeFlag = 1;
//         } 
//     });
//     if (takeFlag === 0) {
//          shoppingList.push({name: name, amout: 1, bought: true, price : price, sum: price, },)
//     }
// }

// addItem('Vodka',10);
// console.log(shoppingList);

//Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
function calcAllShopingList() {
    let result = shoppingList.reduce((accumulator, element) => accumulator + element.amout, 0);
    console.log(result);
}
calcAllShopingList();

// Підрахунок суми всіх (не) придбаних продуктів.

// function calcSumNotBougth(el) {
//     let sum = 0;
//     shoppingList.forEach((el) => {
//         if(el.bought === false) {
//             sum += el.total;
//         }
//     } );
//     console.log(sum);
// } 
// calcSumNotBougth();