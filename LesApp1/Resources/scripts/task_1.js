let begin = 0,
    end = 100;

console.log("Все четные числа между 0 и 100.");

for (let i = begin; i <= end; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
