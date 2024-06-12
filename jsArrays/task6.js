// Завдання 6: Сортування масивів
// У вас є вихідний масив
// сonst numbersList = [1,10,14,2,4,5,43,34]
// Створіть новий масив на основі вихідного масиву (копіюйте його)
// Відсортуйте створений масив (від меншого до більшого)
// Виведіть обидва масиви в консоль

// варіант 1(мій)
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const newNumberList = numbersList.slice();
const sortedNewNumberList = newNumberList.sort((a, b) => a - b);

console.log("Initial array:", numbersList);
console.log("New sorted copy of array:", newNumberList);

//варіант 2 (викладач) (як ще створити новий відсортований array не змінюючи вихідний)

const array = [1, 10, 14, 2, 4, 5, 43, 34];
let sortedArray = [...array].sort((a, b) => a - b);
console.log(sortedArray);
console.log(array);

//вар.3 -супер нова функція, що з'явилась в 2023 р.
const array1 = [1, 10, 14, 2, 4, 5, 43, 34];
let sortedArray1 = array1.toSorted((a, b) => a - b);
console.log("Нова функція", sortedArray1);
console.log(array1);
