// const pop = document.getElementById("event-pop");
// let openCount = 0;
// pop.addEventListener("beforetoggle", (e) => {
//   console.log("beforetoggle:", e.newState); // "open" або "closed"
// });
// pop.addEventListener("toggle", (e) => {
//   console.log("toggle:", e.newState); // "open" або "closed"
//   if (e.newState === "open") {
//     openCount++;
//     console.log("Відкрито popover разів:", openCount);
//   }
// });

// const toggleBtn = document.getElementById('toggle-btn');
// const card = document.querySelector('.card');

// toggleBtn.addEventListener('click', () => {
//   card.classList.toggle('hidden');
// });

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
    
//     sayHello() {
//       return `Привіт, мене звати ${this.name}!`;
//     }
    
//     getInfo() {
//       return `${this.name}, ${this.age} років`;
//     }
//   }
  
//   // Створення екземпляра класу
//   const person1 = new Person("Олена", 25);
//     console.log(person1); // Олена
//   console.log(person1.sayHello()); // Привіт, мене звати Олена!
//   console.log(person1.getInfo()); // Олена, 25 років

// class Book {
//     constructor(title, author, year) {
//       this.title = title;
//       this.author = author;
//       this.year = year;
//     }
//   }
  
//   const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
//   console.log(book1); // Book { title: 'Кобзар', author: 'Тарас Шевченко', year: 1840 }
  
//   console.log(book1.title); // Кобзар
//   console.log(book1.author); // Тарас Шевченко

// class Calculator {
//     add(a, b) {
//       return a + b;
//     }
    
//     subtract(a, b) {
//       return a - b;
//     }
    
//     multiply(a, b) {
//       return a * b;
//     }
    
//     divide(a, b) {
//       if (b === 0) {
//         throw new Error("Ділення на нуль неможливе");
//       }
//       return a / b;
//     }
//   }
  
//   const calc = new Calculator();
//     console.log(calc); // Calculator {}
//   console.log(calc.add(5, 3)); // 8
//   console.log(calc.multiply(4, 2)); // 8

// class MathUtils {
//     static square(x) {
//       return x * x;
//     }
    
//     static cube(x) {
//       return x * x * x;
//     }
//   }
  
//   // Виклик статичних методів без створення екземпляра
//   console.log(new MathUtils()); // MathUtils {}
  
//   console.log(MathUtils.square(4)); // 16
//   console.log(MathUtils.cube(3)); // 27

// Базовий клас
class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      return `${this.name} видає звук`;
    }
  }
  const animal = new Animal("Песик");
  console.log(animal.speak()); // Тварина видає звук
  
  // Похідний клас
  class Dog extends Animal {
    constructor(name, breed) {
      // Виклик конструктора батьківського класу
      super(name);
      this.breed = breed;
    }
    
    speak() {
      // Перевизначення методу батьківського класу
      return `${this.name} гавкає`;
    }
    
    getInfo() {
      return `${this.name} - собака породи ${this.breed}`;
    }
  }
  
  const dog = new Dog("Рекс", "Вівчарка");
  console.log(dog.speak()); // Рекс гавкає
  console.log(dog.getInfo()); // Рекс - собака породи Вівчарка

  class Cat extends Animal {
    constructor(name, color) {
      super(name); // Виклик конструктора батьківського класу
      this.color = color;
    }
    
    speak() {
      // Виклик методу батьківського класу з додаванням власної логіки
      return `${super.speak()}, а саме: м'яукає`;
    }
  }
  
  const cat = new Cat("Марися", "сірий");
  console.log(cat.speak()); // Марися видає звук, а саме: м'яука