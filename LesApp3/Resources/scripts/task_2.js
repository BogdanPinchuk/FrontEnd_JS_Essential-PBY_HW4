let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
let max = Number.MIN_VALUE;

// базова реалізація
/*
for (let index = 0; index < values.length; index++) {
    const element = values[index];
    if (element > max) {
        max = element;
    }
}
*/

for (const value of values) {
    if (max < value) {
        max = value;
    }
}

console.log("Максимальное значение массива - " + max);
