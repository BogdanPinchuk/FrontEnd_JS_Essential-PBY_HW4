// В даному випадку необхідно використати цикл Дейкстри
let value = null;

while (true) {
    /*
    можна було б розібратися із івентами/собитиями/поведінкою натиснутих клавіш
    через addEventListener і функцій..., але поки що таку тему не проходили,
    а сама підказака рішення даної проблеми ховається в самій умові.
    Провівши аналіз поведінки клавіш маємо, що діалогове вікно реагує лише на
    2 клавіші "Enter" і "Escape".
    Відповідно через debug-ер браузер показав, що при їх натисканні функція/метод
    promt вертає 2 різні значення:
    "Enter" - "" - пустий рядок,
    "Escape" - null;
    Тому реалізуємо обробку по цьому значенню;
    */

    let input = prompt("Введите значение больше 10:");

    if (input != null) {
        let value = Number(input);

        if (isNaN(value) || value <= 10) {
            alert("Ошибка ввода!\nСпробуйте еще раз.");
            continue;
        }
        else {
            alert(`Ввод \"${value}\" верный.`);
            if (confirm("Хотите спробовать еще раз?") == true) {
                continue;
            }
            else {
                break;
            }
        }
    }
    else {
        break;
    }
}
