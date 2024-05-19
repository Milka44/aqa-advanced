// Завдання 3: Числа та булі

// Створіть змінну яка буде символізувати вік певної персони.

// Після чого створіть булеву змінну яка буде визначати чи особа повнолітня базуючись на заченні з попередньої змінної.

// Виведіть усі змінні в консоль

let userAge = 20;
let adult = (userAge > 18? true: false);

console.log('Age of user is:', userAge);
console.log('Is user adult?', adult)

let adult1 = adult;
if (adult1? console.log("Is user adult? \n-Yes"): console.log("No"));
