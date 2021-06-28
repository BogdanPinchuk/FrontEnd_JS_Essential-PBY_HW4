// зазвичай, використання циклів для розрахунку суми чисел не є ефективним і ресурсозатратним
// і для цього використовують арифметичну прогресію
// https://uk.wikipedia.org/wiki/Арифметична_прогресія

let value = Number(prompt("Введите число больше 0:"));

if (isNaN(value) || value <= 0) {
    alert("Ошибка ввода!");
}
else {
    let mes = ""; // сповіщення
    let sum = 0;
    // варіант 1 - ефектвиний, використовуючи формулу африметичної прогресії
    // sum = (a_1 + a_n) * n / 2;
    // sum = (2 * a_1 + d * (n - 1)) * n / 2;
    {
        // спростимо вираз, для ефективного обрахунку
        // sum = (a_1 + a_n) * n / 2 =
        // = (a_1 + a_n) * (a_1 + 1) / 2 = // a_1 = 0, тому
        // = 0.5 * a_n * (a_1 + 1);
        sum = 0.5 * value * (value + 1);
    }
    console.log(`Арифметическая прогресия: ${sum}`);
    mes += `Арифметическая прогресия: ${sum}\n`;

    // варіант 2
    sum = 0;
    for (let i = 0; i <= value; i++) {
        sum += i;
    }
    console.log(`Цикл for: ${sum}`);
    mes += `Цикл for: ${sum}\n`;

    // варіант 3
    sum = 0;
    {
        let i = 0;
        while (++i <= value) {
            sum += i;
        }
    }
    console.log(`Цикл while: ${sum}`);
    mes += `Цикл while: ${sum}\n`;

    // варіант 4
    sum = 0;
    {
        let i = 0;
        do {
            sum += i;
        } while (++i <= value);
    }
    console.log(`Цикл dowhile: ${sum}`);
    mes += `Цикл dowhile: ${sum}\n`;

    alert(mes);
}

