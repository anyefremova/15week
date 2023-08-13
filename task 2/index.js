const cities = ['Пермь', 'Москва', 'Екатеринбург', 'Тюмень'];
let temperatures = [];

const mainBlock = document.querySelector('.main__block');
const temperaturesInCity = document.createElement('ul');
mainBlock.appendChild(temperaturesInCity);

for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру в городе ${cities[i]}`);
    temperatures.push(Number(temperature));
}
console.log(temperatures);

for (let i = 0; i < cities.length; i++) {
    const item = document.createElement('li');
    item.textContent = `Температура в ${cities[i]}: ${temperatures[i]} °С`;
    temperaturesInCity.appendChild(item);
}

const max = document.querySelector('.max__temp');
const min = document.querySelector('.min__temp');
const maxTemperatureInCity = document.createElement('p');
const minTemperatureInCity = document.createElement('p');
const maxTemperature = Math.max.apply(Math, temperatures);
const minTemperature = Math.min.apply(Math, temperatures);
maxTemperatureInCity.textContent = (`Максимальная температура: ${maxTemperature} °С`);
minTemperatureInCity.textContent = (`Минимальная температура: ${minTemperature} °С`)
max.appendChild(maxTemperatureInCity);
min.appendChild(minTemperatureInCity);