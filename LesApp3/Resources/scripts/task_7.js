let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];
console.log(`Дані: ${values}`);

// сума і середнє арифметичне
let sum = 0,
    arrange;

// сума
for (const value of values) {
    sum += value;
}

// середнє арифметичне
arrange = sum / values.length;

console.log(`Середнє арифметичне: ${arrange.toFixed(3)}`);

// елементи більші від середнього значення
let more = [];

for (const value of values) {
    if (value > arrange) {
        more[more.length] = value;
    }
}

console.log(`Елементи більші від середнього значення: ${more}`);
