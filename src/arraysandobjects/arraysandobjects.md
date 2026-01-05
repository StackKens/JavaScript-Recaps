## Arrays and Objects

# Arrays

An array is a data structure that can hold multiple values at once. In JavaScript, arrays are created using square brackets `[]`, and the values inside the array are separated by commas.

---

Simple analogy

const fruits = ["apple", "banana", "mango"];

Think of an array like:

...a row of boxes
...each box has a number (index)
...each box holds a value

Index: ...0 ......1 ........2
Value: "apple" "banana" "mango"

The values in an array can be accessed by their index
console.log(fruits[0]); // Output: "apple"

# what really happens under the hood

In JavaScript, arrays are objects that have special properties and methods to handle ordered collections of data. When you create an array, JavaScript allocates a block of memory to store the elements of the array. Each element is stored in a contiguous memory location, allowing for efficient access and manipulation.

When you access an element in the array using its index, JavaScript knows where the array starts, and because items are stored in order, it can jump directly to the item you want.
