const cities = ['Пермь', 'Москва', 'Екатеринбург', 'Тюмень'];
let temperatures = [];

const mainBlock = document.querySelector('.main__block');
const temperaturesInCity = document.createElement('ul');
mainBlock.appendChild(temperaturesInCity);
const max = document.getElementsByClassName('max__temp');
const min = document.getElementsByClassName('min__temp');

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

