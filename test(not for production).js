'use strict';

// let rey = {
//   name: 'Rey',
//   title: 'Instructor',
//   course: '201d90'
// }

let audrey = {
  name: 'Audrey',
  title: 'Instructor',
  course: '201d90'
}

let seth = {
  name: 'Seth',
  title: 'Student',
  course: '201d90'
}

// CONSTRUCTOR FUNCTION

// PARAMETERS - UNIQUE to each object
// THIS - in a constructor 'this' refers to the WHOLE object being created

// use this array to store all my created objects
let peopleOf201d90 = [];

function Person(firstName, title) {
  this.name = firstName;
  this.title = title;
  this.course = '201d90';
  this.interests = [];
  peopleOf201d90.push(this);
}

// CREATE OBJECT USING CONSTRUCTOR
// CONSTRUCTOR IS A FUNCTION!
let zoe = new Person('Zoe', 'Student');
let hunter = new Person('Hunter', 'Student');
let rey = new Person('Rey', 'Instructor');

peopleOf201d90[2].interests.push('Rock climbing');

rey.interests.push('walking his cats');

console.log(peopleOf201d90);

// PROTOTYPE - Special object that comes with our constructors
// we store our methods here
// PROTOTYPE === INHERITS
Person.prototype.greeting = function() {
  console.log(`Hey class hey! My name is ${this.name}`);
}

peopleOf201d90[2].greeting();

// let myArr = [];

// Array.prototype.myMethod = function(){
//   console.log('I created an array method');
// }

// myArr.myMethod();