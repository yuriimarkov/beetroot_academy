
/* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
*/
const car = {
    manufacturer: 'Volkswagen grp' ,
    model: 'A6',
    yearOfMarnufacture: 2020,
    averageSpeed: 150,
    fuelTank: 65,
    averageFuelConsumption: 6.6,
    drivers: ['Andy'],
    showInfoCar: function () {
        console.log(this);
    },
    addDriverCar: function(name) {
          this.drivers.push(name);
    },
    searchDriverACar: function (value) {
        if (this.drivers.includes(value) === true){
            console.log(`Водій ${value} - знайдено`)
        } else console.log('Вибачте, але такого водія не знайдено')
    },
    findCountOfRestings: function(value) {
        let searchCountOfRest = Math.floor((value / this.averageSpeed) * 4);
        let searchCountWithoutRest = value / this.averageSpeed;
        let searchTimeOfRest = searchCountOfRest + searchCountWithoutRest;
        let searchFuelConsuption = value / 100 * this.averageFuelConsumption;

        console.log(`Для подолання відстані - ${value}км потрібно : ${searchTimeOfRest.toFixed(1)} годин часу та ${searchFuelConsuption.toFixed(1)} літрів палива`)
    },
}

//Метод, який виводить на екран інформацію про автомобіль.
    car.showInfoCar(); // перший метод
// console.log(car); // другий метод
// let showInfoCar = Object.entries(car);
// console.log(showInfoCar); // третій метод через масив значень.

//Додавання ім’я водія у список
// car.drivers = 'Yurii'; із змінною значення 
car.addDriverCar('Evgen');

// Перевірка водія на наявність його ім’я у списку
// console.log(car.drivers.includes('Andy')); // як варіант перевірки в консолі
car.searchDriverACar('Andy');
car.searchDriverACar('Serg');

// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
car.findCountOfRestings('120');



//Створити об'єкт, що описує час (години, хвилини, секунди)
let time = new  Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let secondsToDisplay;
let minutesToDisplay;
let hoursToDisplay;

function toChangeSecond(value) {
    secondsToDisplay = Math.floor((seconds + value % 60) % 60);                                                  
}
let changedSeconds = toChangeSecond(3);

function toChangeMinutes(value) {
    minutesToDisplay = minutes;
    (secondsToDisplay === 0) ? ++minutesToDisplay : false;
    minutesToDisplay = Math.floor((minutes + Math.floor(secondsToDisplay / 60) + value % 60) % 60);
}
let changedMinutes = toChangeMinutes(3)

function toChangeHours(value) {
    hoursToDisplay = hours;
    (minutesToDisplay === 0) ? ++hoursToDisplay : false;
    hoursToDisplay = Math.floor((hours + value % 24 + Math.floor(minutesToDisplay / 60) + Math.floor(secondsToDisplay / 3600)) % 24);
    hoursToDisplay = (hoursToDisplay < 10) ? "0" + hoursToDisplay : hoursToDisplay;
}
let changedHours = toChangeHours(2);

console.log(`Поточний час - ${hours}:${minutes}:${seconds}`);
console.log(`Час після змін - ${hoursToDisplay}:${minutesToDisplay}:${secondsToDisplay}`);
   



