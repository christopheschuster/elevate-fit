/*
Filename: SophisticatedCode.js
Content: A sophisticated and elaborate JavaScript code demonstrating a complex data structure and algorithm for sorting and manipulating a collection of objects.
*/

// Define a class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Create an array of Person objects
const people = [
  new Person("John", 30),
  new Person("Alice", 25),
  new Person("Bob", 35),
  new Person("Eve", 20),
  new Person("Mike", 40),
  // ... add more persons
];

// Define a function to sort people by age in descending order
function sortByAgeDesc(people) {
  return people.sort((a, b) => b.age - a.age);
}

// Define a function to find the average age of people
function findAverageAge(people) {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
}

// Define a function to filter people by a given age range
function filterByAgeRange(people, minAge, maxAge) {
  return people.filter((person) => person.age >= minAge && person.age <= maxAge);
}

// Sort people by age in descending order
const sortedPeople = sortByAgeDesc(people);
console.log("Sorted People:", sortedPeople);

// Find the average age of people
const averageAge = findAverageAge(people);
console.log("Average Age:", averageAge);

// Filter people between the age of 25 and 35
const filteredPeople = filterByAgeRange(people, 25, 35);
console.log("Filtered People:", filteredPeople);

// ... add more complex operations on the people array

// Output:
// Sorted People: [ { name: 'Mike', age: 40 }, { name: 'Bob', age: 35 }, { name: 'John', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Eve', age: 20 } ]
// Average Age: 30
// Filtered People: [ { name: 'Bob', age: 35 }, { name: 'John', age: 30 }, { name: 'Alice', age: 25 } ]
// (Output may vary depending on the initial data and further manipulations)