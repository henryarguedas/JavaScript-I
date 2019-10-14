// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:

const intern = {
  "id": 1,
  "name": "Mitzi",
  "email": "mmelloy0@psu.edu",
  "gender": "F",
  
};

const intern1 = {
  "id": 2,
  "name": "Kennan",
  "email": "kdiben1@timypic.com",
  "gender": "M",
  'speak': function() {
    console.log(`hello my name is ${this.name}`);
  }
};


intern1.speak();


const intern2 = {
  "id": 3,
  "name": "Keven",
  "email": "kmummery2@wikimedia.org",
  "gender": "M",

};

const intern3 = {
  "id": 4,
  "name": "Gannie",
  "email": "gmartinson@illinois.edu",
  "gender": "M",

};

const intern4 = {
  "id": 5,
  "name": "Antonietta",
  "email": "adaine5@samsung.com",
  "gender": "F",
  "multiplyTwoNums": function(num1, num2) {
    console.log(`hello, I am ${this.name}, and I know how to do Math. When you multiply ${num1} by ${num2} you get this: `, num1 * num2);
  }

};

intern4.multiplyTwoNums(3, 4);
// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:


const parent = {
  'name': 'Susan',
  'age': 70,
  'speak': function() {
    return `hello my name is ${this.name}`
  },
  'child': {
    'name': 'George',
    'age': 50,
    'speak': function() {
      return `hello my name is ${this.name}`
    },
    'grandchild': {
      'name': 'Sam',
      'age': 30,
      'speak': function() {
        return `hello my name is ${this.name}`
      },
    },
  },
};

console.log(parent.speak());
console.log(parent.child.speak());
console.log(grandchild.speak());

// Mitzi's name
console.log(intern.name);



// Kennan's ID
console.log(intern1.id);

// Keven's email
console.log(intern3.email);

// Gannie's name

console.log(intern3.name);

// Antonietta's Gender
console.log(intern4.gender);



// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 




// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak

