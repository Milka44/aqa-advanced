// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

let users = [
{userName:"John",
email:"john@gm.com",
age:"40"
},
{userName:"Mary",
email:"mary@gm.com",
age:"25"
}]

users.push({
userName:"Ben",
email:"beny@gm.com",
age:"32"
})

for (let user of users) {
    let {userName, email, age} = user;
  console.log(`Name: ${userName}, Email: ${email}, Age: ${age}`)
}
