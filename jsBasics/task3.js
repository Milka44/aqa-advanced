// Завдання 3: Числа та булі

// Створіть змінну яка буде символізувати вік певної персони.

// Після чого створіть булеву змінну яка буде визначати чи особа повнолітня базуючись на заченні з попередньої змінної.

// Виведіть усі змінні в консоль

let userAge = 20;
let isAdult = (userAge > 18? true: false);

console.log('Age of user is:', userAge);
console.log('Is user adult?', isAdult)

let isAdult1 = isAdult;
(isAdult1? console.log("Is user adult? \n-Yes"): console.log("No"));
//без if и короче запись
console.log(`Is user adult? \n${isAdult1 ? "-Yes" : "-No"}`)