// 1. Class & Constructor
class Person {
  // Constructor
  constructor(name, age) {  
    this.name = name;
    this.age = age;
  }

  // 2. Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // 3. Getter & Setter
  get personAge() {
    return this.age;
  }

  set personAge(newAge) {
    if (newAge > 0) this.age = newAge;
    else console.log("Age must be positive.");
  }

  // 4. Static Method
  static species() {
    return "Homo sapiens";
  }
}

// 5. Creating an Object
const person1 = new Person("Aditya", 22);
person1.greet(); 

console.log(Person.species()); 

// 6. Using Getter & Setter
console.log(person1.personAge);
person1.personAge = 23; // Updating age
console.log(person1.personAge);

// 7. Class Inheritance & Extends
class Student extends Person {
  constructor(name, age, grade) {
    // 8. Calling Parent Constructor
    super(name, age); 
    this.grade = grade;
  }

  // 9. Method Overriding
  greet() {
    console.log(`Hi, I'm ${this.name}, a ${this.grade} grade student.`);
  }
}

const student1 = new Student("Aryan", 18, "12th");
student1.greet(); 

// 10. Overriding Constructor
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} teaches ${this.subject}.`);
  }
}

const teacher1 = new Teacher("Mrs. Sharma", 40, "Mathematics");
teacher1.teach(); 

// 11. Prototype & Setting Prototype Manually
function Animal(type) {
  this.type = type;
}

Animal.prototype.makeSound = function () {
  console.log(`${this.type} makes a sound.`);
};

const dog = new Animal("Dog");
dog.makeSound(); 
// 12. Instance Of Operator
console.log(person1 instanceof Person); 
console.log(student1 instanceof Student);
console.log(student1 instanceof Person); 
console.log(teacher1 instanceof Teacher);
console.log(dog instanceof Animal); 
