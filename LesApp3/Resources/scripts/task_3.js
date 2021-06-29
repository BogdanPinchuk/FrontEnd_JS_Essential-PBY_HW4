let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
console.log("Значення до обробки даних:");
console.log(values);

// варіант 1
for (let i = 0; i < values.length; i++) {
    if (values[i] < 0) {
        values[i] = 0;
    }
}

// варіант 2
/*
for (let i = 0; i < values.length; i++) {
    values[i] *= (values[i] > 0);
}
*/

console.log("Значення після обробки даних:");
console.log(values);
