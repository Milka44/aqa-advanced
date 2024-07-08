//Завдання 3: Генерація таблиці множення

const a = 2;
for (let b = 1; b <= 10; b++) {
	console.log(`2 * ${b} = ${a * b}`);
	//console.log(a, "*" ,b,"=",a * b);
}

const c = 2;
let d = 1;
while (d <= 10) {
	console.log(`${c} * ${d} = ${c * d}`);
	d++;
}

// не нужно брать разные буквы. в середине выражения они не пересекаются. лучше использовать i или count
const f = 2;
for (let i = 1; i <= 10; i++) {
	console.log(`2 * ${i} = ${f * i}`);
	//console.log(a, "*" ,i,"=",a * i);
}
