// const fruits = ["Яблуко", "Банан", "Апельсин"];
// const numbers = [1, 2, 3, 4, 5];
// const mixed = [42, "Текст", true, null, { name: "Об'єкт" }];

// console.log("Фрукти:", fruits);
// console.log("Числа:", numbers);
// console.log("Змішаний масив:", mixed);

// const emptyArray = [];
// console.log("Порожній масив:", emptyArray);

// const array = new Array();
// console.log("Порожній масив:", array);
// array[0] = "Перший";
// array[1] = "Другий";
// console.log("Масив з елементами:", array);


// Або з розміром
// const fixedArray = new Array(3); // [empty × 3]
// console.log("Фіксований масив:", fixedArray);


// const fruits = ["Яблуко", "Банан", "Апельсин"];
// // console.log(fruits);  // ["Яблуко", "Банан", "Апельсин"]
// // // Через індекс (починається з 0)
// // console.log(fruits[0]);  // "Яблуко"
// // console.log(fruits[1]);  // "Банан"

// // // Довжина масиву
// // console.log(fruits.length);  // 3

// // // Останній елемент
// // console.log(fruits[fruits.length - 1]);  // "Апельсин"

// // // Зміна елемента
// // fruits[1] = "Груша";
// // console.log(fruits);  // ["Яблуко", "Груша", "Апельсин"]

// // // Додавання елементів
// // fruits.push("Манго");      // в кінець
// // fruits.unshift("Ківі");    // на початок
// // console.log(fruits);  // ["Ківі", "Яблуко", "Груша", "Апельсин", "Манго"]

// // // Видалення елементів
// // const last = fruits.pop();     // з кінця
// // const first = fruits.shift();  // з початку
// // console.log(fruits);  // ["Яблуко", "Груша", "Апельсин"]
// // console.log(last);    // "Манго"
// // console.log(first);   // "Ківі"

// const numbers = [11, 22, 33, 44, 55];

// // Перебір елементів
// numbers.forEach(num => console.log(num + "%"));

// // Створення нового масиву через перетворення
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);  // [22, 44, 66, 88, 110]
// console.log(numbers);  // [11, 22, 33, 44, 55]


// // Фільтрація
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);  // [22, 44]

// // Пошук елемента
// const found = numbers.find(num => num > 3);
// console.log(found);  // 11 (перше число більше 3)

// // Перевірка умови для всіх елементів
// const allPositive = numbers.every(num => num > 0);
// console.log(allPositive);  // true (всі числа додатні)

// Сортування
// const fruits = ["Яблуко", "Банан", "Апельсин"];
// fruits.sort();  // за кодами символі
// console.log(fruits);  // ["Апельсин", "Груша", "Яблуко"] 

// const numbers = [51, 24, 229, 44, 55];

// numbers.sort(); 
// console.log(numbers);  // [11, 21, 24, 44, 55] (за кодами символів)

// // numbers.sort((a, b) => a - b);  // для чисел, за зростанням
// numbers.sort((a, b) => b-a);  // для чисел, за зростанням
// console.log(numbers);  // [24, 44, 51, 55, 229]

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Доступ до елементів
console.log(matrix[0][1]);  // 2
console.log(matrix[1][2]);  // 6

// Перебір
matrix.forEach(row => {
    row.forEach(element => {
        console.log(element);
    });
});