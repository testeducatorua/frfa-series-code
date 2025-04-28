// app.js - основний файл додатку

// Імпорт окремих експортованих елементів
import { add, subtract, PI } from './math.js';

console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6
console.log(PI);              // 3.14159

// Імпорт класу
import { Calculator } from './math.js';

const calc = new Calculator();
console.log(calc.multiply(4, 2)); // 8
console.log(calc.divide(10, 2));  // 5