// масив
let array = [];

// let randomValue - не ефектвино створювати і займати зайву пам'ять
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 101);
}

console.log("Випадкові значення:");
for (const i of array) {
    console.log(i);
}
