// Завдання 3

// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі, якщо denominator дорівнює 0 або хоча б один з аргументів не є числом,
//викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0
// або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення
//  "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

// function divideNumbers(numerator,denominator){

//     if (denominator === 0 || typeof denominator !== 'number') {
//         throw new Error("Denominator must be a number and must not be equal to 0");
//     }
//     if (typeof numerator !== 'number') {
//         throw new Error("Numerator must be a number");

//     }
//     return numerator/denominator;
//     }
// //test-case 1: denominator = 0
//     try {
//         const result = divideNumbers(10, 0);
//         console.log(result);
//       } catch (error) {
//         console.error("An error occurred:", error.message);
//       } finally {
//         console.log("Job is done")
//      }
// //test-case 2: nominator is not a number
//       try {
//         const result = divideNumbers('10', 1);
//         console.log(result);
//       } catch (error) {
//         console.error("An error occurred:", error.message)
//       } finally {
//         console.log("Job is done")
//      }
// //test-case 3: valid nominator and denominator
//       try {
//         const result = divideNumbers(5, 2);
//         console.log(result)
//       } catch (error) {
//         console.error("An error occurred:", error.message)
//       } finally {
//         console.log("Job is done")
//      }

//Є краще вирішення, щоб ну дублювати try...catch для різних тестів
// function divideNumbers(numerator,denominator){
//   try {
//   if (denominator === 0 || typeof denominator !== 'number') {

//       throw new Error("Denominator must be a number and must not be equal to 0");
//   }
//   if (typeof numerator !== 'number') {
//       throw new Error("Numerator must be a number");

//   }
//   return numerator/denominator;
//   } catch (error) {
//     return `${error}`
// }
// }
// console.log(divideNumbers(10,2));
// console.log(divideNumbers('a',2));
// console.log(divideNumbers(10,0));

//еще лучший вариант использовать две функции, если нам сами много раз нужно будет их переиспользовать
// function validate(numerator,denominator){

//   if (denominator === 0 || typeof denominator !== 'number') {

//       throw new Error("Denominator must be a number and must not be equal to 0");
//   }
//   if (typeof numerator !== 'number') {
//       throw new Error("Numerator must be a number");

//   }
// }

// const divideTwoNumbers = (a, b) => {
//   try {
//     validate(a, b)
//     return a/b
//      } catch (error) {
//     return `${error}`
// }
//      }

// console.log(divideTwoNumbers(10,2));
// console.log(divideTwoNumbers('a',2));
// console.log(divideTwoNumbers(10,0));

//Еще вариант решения: если нам нужно проверить информацию (много кейсовб которая приходит с бекенда) хорошо использовать for each

function divideNumbers(numerator, denominator) {
	if (denominator === 0 || typeof denominator !== "number") {
		throw new Error("Denominator must be a number and must not be equal to 0");
	}
	if (typeof numerator !== "number") {
		throw new Error("Numerator must be a number");
	}
	return (result = numerator / denominator);
}

const testCases = [
	{ numerator: 5, denominator: 2 },
	{ numerator: 0, denominator: 2 },
	{ numerator: 0, denominator: 0 },
];

testCases.forEach((testCase) => {
	try {
		let resultOfDiv = divideNumbers(testCase.numerator, testCase.denominator);
		console.log("resultOfDiv:", resultOfDiv);
	} catch (error) {
		console.error("Error:", error.message);
	} finally {
		console.log("Job is done");
	}
});
