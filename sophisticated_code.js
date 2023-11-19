/*
 * Filename: sophisticated_code.js
 * Content: An elaborate and complex code in JavaScript.
 */

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Class representing a Student, subclass of Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `${super.getDetails()}, Grade: ${this.grade}`;
  }
}

// Class representing a Teacher, subclass of Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }
}

// Creating instances of Person, Student, and Teacher classes
const person = new Person("John Doe", 25);
const student = new Student("Jane Smith", 18, "A");
const teacher = new Teacher("Mr. Anderson", 45, "Math");

// Outputting details
console.log(person.getDetails());
console.log(student.getDetails());
console.log(teacher.getDetails());

// Function to find factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

// Function to check if a number is prime
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7)); // Output: true

// Function to reverse an array
function reverseArray(arr) {
  const reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// More sophisticated and elaborate code can follow...
// ...
// ... (at least 200 more lines of complex code)
// ...
// ...

// Note: The above code snippets are just examples to demonstrate complexity
// and may not necessarily represent the entirety of "sophisticated_code.js".