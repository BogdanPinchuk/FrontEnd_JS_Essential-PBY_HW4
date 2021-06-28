// віддалено схоже на алгоритм бінарного пошуку
// також в даному випадку використовується цикл Дейкстри

// рандомне число
let randomValue = Math.floor(Math.random() * 101);
// randomValue = 56;

// початок
alert("Игра 'Угадай число'");

// ітераційний лічильник
let i = 0;

// число, яке ввів гравець
let number = Number(prompt("Я загадал случайное значение от 0 до 100:"));

while (++i) {
    if (!isNaN(number) && 0 <= number && number <= 100) {
        if (number == randomValue) {
            alert(`Правильно! Загаданное значенеи ${randomValue}. Вы угадали с ${i}-й попытки.`);
            break;
        }
        else if (number > randomValue) {
            number = Number(prompt(`Я загадал значение меньше чем ${number}`));
        }
        else if (number < randomValue) {
            number = Number(prompt(`Я загадал значение больше чем ${number}`));
        }
    }
    else {
        number = Number(prompt(`Ошибка ввода. Введите число снова:`));
    }
}
