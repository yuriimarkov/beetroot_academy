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




