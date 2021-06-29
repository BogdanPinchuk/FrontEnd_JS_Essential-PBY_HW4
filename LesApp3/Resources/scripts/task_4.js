let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
console.log(`Дані: ${values}`);

// парні і непарні числа
let evens = [],
    odds = [];

// варіант 1
for (const value of values) {
    if (value % 2 == 0) {
        evens[evens.length] = value;
    }
    else{
        odds[odds.length] = value;
    }
}

// варіант 2
/*
for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 == 0) {
        evens[evens.length] = values[i];
    }
    else{
        odds[odds.length] = values[i];
    }
}
*/

console.log(`Парні значення: ${evens}`);
console.log(`Непарні значення: ${odds}`);
