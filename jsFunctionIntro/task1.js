/*Завдання 1

Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)*/3

//fuction declaration
function checkRectangleSquare(width,height) {return width * height;}
console.log(checkRectangleSquare(5,6))

//function expression
const checkRectangleSquare1 = function(width,height) {return width * height;}
console.log(checkRectangleSquare1(5,8))

//arrow function expression
const checkRectangleSquare2 = (width,height) => {return width * height;}
console.log(checkRectangleSquare1(5,10))

//Concise arrow function expression
const checkRectangleSquare3 = (width,height) => width * height;
console.log(checkRectangleSquare1(7,8))