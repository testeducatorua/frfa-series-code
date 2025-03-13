// const user = {
//   name: "Іван",
//   age: 25,
//   isAdmin: false,
//   "likes birds": true  // ключ з пробілом береться в лапки
// };
// console.log(user);
// console.dir(user);

// const user = new Object();
// user.name = "Іван";
// user.age = 25;
// console.log(user);

// // Через крапку
// console.log(user.name);  // "Іван"

// // Через квадратні дужки (працює з будь-якими іменами властивостей)
// console.log(user["likes birds"]);  // true

// // Динамічні ключі
// const key = "name";
// console.log(user[key]);  // "Іван"


// const user = {
//   name: "Іван",
//   age: 25,
//   isAdmin: false,
//   "likes birds": true  // ключ з пробілом береться в лапки
// };
// // Зміна значення
// user.age = 26;

// // Додавання нової властивості
// user.city = "Київ";

// // Видалення властивості
// delete user.isAdmin;

// console.log(user);

// const calculator = {
//   value: 0,
//   add(num) {
//       this.value += num;  
//   },
//   subtract(num) {
//       this.value -= num;
//   },
// };

// // Виклик методів
// calculator.add(5); // 0+5=5
// calculator.add(10); // 5+10=15
// calculator.subtract(23) // 15-23 = -8
// console.log(calculator);  

const product = {
  name: "Ноутбук",
  price: 25000,
  inStock: true
};

// Перебір ключів
// for (let key in product) {
//   console.log(key);  // name, price, inStock
//   // console.log(typeof key); 
//   console.log(product[key]);  
// }

// // Отримання масивів ключів та значень
// const keys = Object.keys(product);
// console.log(keys);

// const values = Object.values(product);
// console.log(values);

// const entries = Object.entries(product);  // масив пар [ключ, значення]
// console.log(entries);


const company = {
  name: "IT Company",
  office: {
      city: "Київ",
      address: {
          street: "Хрещатик",
          building: "1A"
      }
  },
  employees: [
      { id: 1, name: "Іван" },
      { id: 2, name: "Марія" }
  ]
};

// Доступ до вкладених властивостей
console.log(company.office.address.street);  // "Хрещатик"
console.log(company.employees[0].name);      // "Іван"

