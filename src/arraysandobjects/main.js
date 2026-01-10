// Nesting Arrays
// This simply means having an array as an index inside of another array
//More simply, its putting an array inside of another array

let x;
const fruits = [
  ['mango', 'pineapple', 'orange', 'apple'],
  ['strawberry', 'pear', 'blue berry'],
];

//accessing the values of the nested array

x = fruits[0]; //this outputs items at index 0 in the main array
x = fruits[1][2]; //this outputs the value at index 2[blue berry] of the second array which is at index 1 in the main array

//change the value of nested arrays

fruits[1][2] = 'lemon';
x = fruits[1][2]; //this outputs lemon

//Joining Arrays
//Concat method
//this simply means joining two arrays into one. it does not change the original array, it returns a new array

const stuff = ['alex', 'john', 'pius'];
const parents = ['hider', 'jex', 'ritah'];

const totalMembers = stuff.concat(parents);

x = totalMembers;
console.log(totalMembers, stuff, parents);

//Spread operator

const a = [1, 2, 3, 4, 5];
const b = [20, 15, 66, 88];

const numbers = [...a, ...b];
x = numbers;

//Flatten Arrays
//Simply turning an array inside array in one flat array

const evenNumbers = [2, 4, [6, 8], 10, [12], 14, 18, [20, 30, 40]];

x = evenNumbers;
x = evenNumbers.flat();

console.log(x);
