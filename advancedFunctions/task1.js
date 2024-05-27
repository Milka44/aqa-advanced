// Завдання 1

// Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. 
//Кожна з них має виводити просте повідомлення в консоль. 
//Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

const numberIsOdd = (n) => {
    return n % 2 !== 0;
};

const numberIsEven = (n) => {
    return n % 2 === 0;
}; 

let handleNum = (num, handleOdd, handleEven) => {
    const isNumOdd = handleOdd(num);
    const isNumEven = handleEven(num);

    if (isNumOdd) {
        console.log(`The number ${num} is an odd number`);
    } else if (isNumEven) {
        console.log(`The number ${num} is an even number`);
    }
};

handleNum(4, numberIsOdd, numberIsEven); 