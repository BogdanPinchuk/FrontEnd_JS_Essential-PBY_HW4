let values = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];
console.log(`Дані: ${values}`);

// варіант 1
for (const value of values) {
    if (value > 0) {
        console.log(`Перший додатній елемент: ${value}`);
        break;
    }
}

// варіант 2
for (let i = 0; i < values.length; i++) {
    if (values[i] > 0) {
        console.log(`Перший додатній елемент: ${values[i]}`);
        break;
    }
}

