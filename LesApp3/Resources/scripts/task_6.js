let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
console.log(`Дані: ${values}`);

// індекси елементів та їх значення
let i_min = 0,
    i_max = 0,
    min = values[i_min],
    max = values[i_max];

// звичайно можна реалізувати і через тернарний оператор, але перевага if
// в тому, що не потрібно буде перезаписувати змінну, що пришвидшує швидкість виконання

// варіант 1 - спрощений, коли в масиві лише 1 мінімальне і 1 максимальне значення
// /*
for (const i in values) {
    if (values[i] < min) {
        i_min = i;
        min = values[i_min];
    }
    if (values[i] > max) {
        i_max = i;
        max = values[i_max];
    }
}
// */

// варіант 2 - спрощений
/*
for (let i = 0; i < values.length; i++) {
    if (values[i] < min) {
        i_min = i;
        min = values[i_min];
    }
    if (values[i] > max) {
        i_max = i;
        max = values[i_max];
    }
}
*/

// маніпуляції
values[i_min] = max;
values[i_max] = min;

console.log(`Після маніпуляцій: ${values}`);

// припустимо, що в нас декілька максимальних і мінімальних значень
values = [10, 20, 0, 4, 6, 125, 11, 9, 125, 1, 8, 0, 3, 125, 0];
console.log(`Модифіковані дані: ${values}`);

// зміна типу
i_min = new Array();
i_max = new Array();

// ініціалізація
i_min[i_min.length] = 0;
i_max[i_max.length] = 0;
min = values[i_min[0]];
max = values[i_max[0]];

for (let i = 1; i < values.length; i++) {
    if (values[i] < min) {
        i_min.length = 1;
        i_min[i_min.length - 1] = i;
        min = values[i_min[i_min.length - 1]];
    }
    else if (values[i] == min) {
        i_min[i_min.length] = i;
    }

    if (values[i] > max) {
        i_max.length = 1;
        i_max[i_max.length - 1] = i;
        max = values[i_max];
    }
    else if (values[i] == max) {
        i_max[i_max.length] = i;
    }
}


// маніпуляції
for (const i of i_min) {
    values[i] = max;
}

for (const i of i_max) {
    values[i] = min;
}

console.log(`Після маніпуляцій: ${values}`);
