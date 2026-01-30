// This simply means that the code is executed line by line

// One piece of code must finish before the next piece of code starts

const a = "Hello from first";
const b = "Hello from second";

console.log(a);
console.log(b);

// The output will be:
// Hello from first
// Hello from second

// This looks messy incase the code code needs to make an http request, file read, etc  that really takes a couple of seconds to complete

console.log("Start");

function task1() {
  console.log("Task 1");
}

function task2() {
  console.log("Task 2");
}

task1();
task2();

console.log("End");

// The output will be:
// Start
// Task 1
// Task 2
// End     this is line by line execution

console.log("A");

function slowTask() {
  for (let i = 0; i < 1000000000; i++) {}
}
console.log("B");

console.log("C");

slowTask();

console.log("D");

// The output will be:
// A
// B
// C
// D

function first() {
  console.log("first start");
  second();
  console.log("first end");
}

function second() {
  console.log("second start");
  console.log("second end");
}

first();
console.log("done");

// The output will be:
// first start
// second start
// second end
// first end
// done
