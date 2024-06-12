//π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа

// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.
//4.1.
let radius = 5;
let circleArea = Math.PI * radius ** 2;
//or
let circleArea1 = Math.PI * Math.pow(radius, 2);

console.log(circleArea.toFixed(2));
//or
console.log(circleArea1.toFixed(2));

//4.2.
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

let length = 6;
let widht = 2;

let rectangleArea = length * widht;
console.log(rectangleArea.toFixed(2));

// Завдання 4.3

// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

let cilinderRadius = 10;
let cilinderHeight = 7;

let cilinderVolume = Math.PI * cilinderRadius ** 2 * cilinderHeight;
//or
let cilinderVolume1 = Math.PI * Math.pow(cilinderRadius, 2) * cilinderHeight;
console.log(cilinderVolume.toFixed(2));
//or
console.log(cilinderVolume1.toFixed(2));
