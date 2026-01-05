// Arrays

// Creating an array using array literal

let x;
const colors = ['red', 'green', 'blue', 'white'];

// Creating an array using array constructor

const numbers = new Array(10, 25, 45, 55);
x = colors;
x = numbers;

// Accessing a value
x = colors[3];

//Length
x = colors.length;

// alter a value

numbers[2] = 100;
x = numbers;

x = `My favorite color is ${colors[1]}`;

const firstName = 'alex';
const lastName = 'kochens';

const nameArray = [firstName, lastName];
x = nameArray; //nameArray stores the values of the variables (for primitives) or references (for objects/arrays)

// The length property isn't read only

colors.length = 2;
x = colors; //this only outputs elements on 0 and 1 index

// adding a value at the end of the array by parsing the length as index

const animals = ['cow', 'goat', 'pig'];
animals[animals.length] = 'sheep'; //this adds sheep at the end of the array
x = animals;
console.log(x);

// Array methods

let y;
const subjects = ['math', 'chemistry', 'biology'];

y = subjects;

//adding an element at the end
subjects.push('physics');

//adding at the begging(first index)

subjects.unshift('commerce');

//deleting the last element

subjects.pop(); //removes physics

//deleting the first element
subjects.shift(); //removes commerce

//reversing the array
subjects.reverse();

const fruits = ['mangoes', 'pineapple', 'orange', 'apples', 'strawberry'];
y = fruits;

//check if the array includes a specific value

y = fruits.includes('banana'); //returns false because banana isn't included in the fruits array

y = fruits.includes('mangoes'); //this returns true

//indexOf a value

y = fruits.indexOf('apples'); //3. returns -1 for values that do not exist

//slice

y = fruits.slice(1, 4); //this does not mutate the array, the end index isn't included
console.log(fruits, fruits.slice(1, 4));

//splice
// y = fruits.splice(1, 4);
console.log(fruits, fruits.splice(1, 4)); //splice does manipulate the array.it tells javascript to start from index 1, delete 4 elements, not up to index 4

const phones = [
  'iphone',
  'sum sang',
  'google pixel',
  'oppo',
  'vivo',
  'infinix',
];

console.log(phones, phones.splice(1, 2)); //When splice is called, JavaScript reads the start index and the number of elements to remove. In this case, it starts at index 1 and removes 2 elements. The original array is mutated, and splice returns a new array containing the removed elements.

console.log(y);
