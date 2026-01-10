// Some best practice
const firstName = 'alex';
const lastName = 'kochens';
const age = 23;

const person1 = {
  firstName,
  lastName,
  age,
};

console.log(person1.firstName, person1.lastName, person1.age);

// Destructuring

const tasks = {
  id: 1,
  title: 'Reading...',
  time: 'Evening at 10pm',
};

const { id, title, time } = tasks;
console.log(id, title, time);

const todos = {
  No: 1,
  name: 'Take kids to school',
  time: 'Morning at 8am',
  items: {
    No: 1,
    type: 'books',
  },
};

const {
  No,
  name,
  items: { type },
} = todos;

console.log(No, name, type);

// Destructuring arrays

const gadgets = ['phone', 'laptop', 'scanner', 'desktop', 'Mouse'];
const [phone, ...rest] = gadgets;
console.log(phone, rest);
