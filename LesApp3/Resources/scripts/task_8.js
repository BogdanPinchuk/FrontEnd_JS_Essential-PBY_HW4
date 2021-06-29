let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];
console.log(`Дані: ${values}`);

// лічильник однакових елементів і їх індекси
let count = 0;

// пошук однакових елементів
for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
        if (values[i] == values[j]) {
            console.log(`Дубльований елемент: ${values[i]}`);
            count++;
        }
    }
}

console.log(`Кількість дублікатів: ${count}`);

/*
Примітка. Даний ряд схожий на "табличку множення", де по горизонталі і вертикалі 
в квадратній матриці відкладаються значення, а в середині їх добуток.
Отже, розташувавши по горизонталі і вертикалі отриманий вектор (ряд даних),
можна порівнювати числа між собою на рівність, але також, як і в таблиці
множення можна помітити симетрію навколо головної діагоналі, а це означає, що 
алгоритм не ефективний і двічі перепровіряє вже провірені дані, як і в численних методах
розв'язку сисьтеми лінійних рівнянь, за методом Гаусса, по аналогії можна реалізувати пошук
використовуючи лише верхнього-трикутного вигляду + не враховувати діагональ.
Щоб це реалізувати необхідно на кожній ітерації головного циклу зменшувати кільість ітерацій,
тобто збільшувати початкове значення ітерації вкладеного циклу на 1, тобто починати відрахунок
за головною діагоналлю: j = i + 1;
Якщо записати j = i, то процес виконає зайві команди і все працюватиме повільніше
*/