//Задание 1
// Выведите числа от 1 до 10 в консоль
let number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
let number2 = 0;
while (number2 <= 20) {
    console.log(number2);
    number2 += 2;
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (i = 10; i >= 1; i--)
    console.log(i);

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (i = 1; i <= 10; i++)
    console.log(i * 5);

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let number5 = 0;
for (i = 1; i <= 100; i++) {
    number5 += i;
}
console.log(number5);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (i = 0; i < array.length; i++)
    console.log(array[i]);

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let number7 = 0;
for (i = 0; i < numbers.length; i++) {
    number7 += numbers[i];
}
console.log(number7);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
animals[0] = animals[0] + " - прекрасное животное";
animals[1] = animals[1] + " - прекрасное животное";
animals[2] = animals[2] + " - прекрасное животное";
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (i = 0; i < str.length; i++)
    console.log(str[i]);

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let number of array) {
    console.log(number);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (let i = 0; i < sentences.length; i++) {
    const wordsSentences = sentences[i].split(' ');
    for (let i = 0; i < wordsSentences.length; i++) {
        console.log(wordsSentences[i]);
    }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum = 0;
for (let element of numbers) {
    sum += element;
}
console.log(sum);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль`
const list = ['apple', 'banana', 'cherry'];
for (let fruits of list)
    console.log(fruits.length);

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
for (i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
}
console.log(words);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let char of greeting) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
//const words = ['Hello', 'world', '!'];
console.log(words.join(' '));

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let numbers17 = 1;
while (numbers17 <= 10) {
    console.log(numbers17);
    numbers17++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let numbers18 = 10;
while (numbers18 >= 1) {
    console.log(numbers18);
    numbers18--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let number19 = 0;
while (number19 < allNumbers.length) {
    if (allNumbers[number19] <= 0) {
        allPositive = false;
        break;
    }
    number19++;
}
console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let number20 = 0;
do {
    console.log(random[number20]);
    number20++;
} while (number20 < random.length && random[number20] >= 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let numbers21 = 1;
do {
    if (numbers21 % 3 != 0) {
        console.log(numbers21);
    }
    numbers21++;
} while (numbers21 <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
/*let sum22 = 0;
do {
    let input = prompt('Введите число: ');
    let number22 = parseInt(input);
    sum22 += number22;
} while (sum22 <= 100);
*/

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function changeColour() {
    const h4 = document.getElementsByTagName('h4');
    for (let i = 0; i < h4.length; i++) {
        h4[i].style.backgroundColor = 'blue';
    }
}

changeColour()

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
function makeString() {
    let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let randomString = '';
    let counter = 0;
    while (counter < 6) {
        randomString += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        counter += 1;
    }
    return randomString;
}

console.log(makeString());
