// math.js - модуль з математичними функціями

// Іменований експорт
export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  // Змінні також можна експортувати
  export const PI = 3.14159;
  
  // Можна експортувати класи
  export class Calculator {
    multiply(a, b) {
      return a * b;
    }
    
    divide(a, b) {
      if (b === 0) {
        throw new Error("Ділення на нуль неможливе");
      }
      return a / b;
    }
  }