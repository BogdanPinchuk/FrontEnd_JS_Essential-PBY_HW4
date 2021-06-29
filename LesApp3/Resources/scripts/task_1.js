let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
console.log(`Дані: ${values}`);

// мінімальне значення
let min = values[0];

for (let i = 1; i < values.length; i++) {
    if (min > values[i]) {
        min = values[i];
    }
}
console.log(`Мінімальне значення ${min};`);

// максимальне значення
let max = values[0];

for (let i = 1; i < values.length; i++) {
    if (max < values[i]) {
        max = values[i];
    }
}
console.log(`Максимальне значення ${max};`);

// сума
let sum = 0;
// варіант 1
for (const value of values) {
    sum += value;
}

// варіант 2
/*
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
*/

console.log(`Сума ${sum};`);
