// За допомогою StarWars Api https://swapi.dev/ та fetch API зробити наступне:
//  1. Використовуючи методи классу Promise отримати масив назв планет перших 10 id

let planetPromises = [];
for (let i = 1; i < 11; i++) {
	planetPromises.push(fetch(`https://swapi.dev/api/planets/${i}`).then((response) => response.json()));
}

Promise.all(planetPromises)
	.then((responseBody) => {
		let arrayOfPlanets = responseBody.map((result) => result.name);
		console.log(arrayOfPlanets);
	})
	.catch((error) => {
		console.error("Some error:", error);
	});

//.(async)
(async () => {
	let arrayOfPlanets = [];
	for (let i = 1; i < 11; i++) {
		let data = await fetch(`https://swapi.dev/api/planets/${i}`);
		let body = await data.json();

		arrayOfPlanets.push(body.name);
	}

	console.log(arrayOfPlanets);
})();
