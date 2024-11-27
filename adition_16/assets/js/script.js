console.log('цикл while');
let number = 1;
while (number <= 5) {
  console.log("Число: " + number);
  number++;
}

console.log('цикл do-while');
let count = 1;
do {
  console.log("Підрахунок: " + count);
  count++;
} while (count <= 5);

console.log('цикл for');
for (let i = 0; i < 5; i++) {
  console.log("Значення індексу: " + i);
}