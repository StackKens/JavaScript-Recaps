//Objects

let p;

const person = {
  name: 'alex kochens',
  university: 'Victoria University',
  age: 23,
  city: 'Kampala',
  friend: {
    name: 'linic',
    course: 'Information Technology',
    city: 'Boston',
  },

  foodLiked: ['pork', 'chicken', 'rice'],
  hobbies: ['football', 'prayers'],
};

//accessing values
p = person.name;
p = person.age;
p = person.university;

//adding a key and value to the object

person.nationality = 'Ugandan';
p = person;

// Access values of objects and array inside object

p = person.foodLiked[1]; //this outputs chicken
p = person.hobbies[0]; // football
p = person.friend.city; //Boston

//delete a property

p = delete person.friend.city;
p = person;

//function as a key in object

person.code = () => {
  console.log(
    `Hey ${this.name} lets dive in and code to solve real world problems`
  );
};

person.code(); //invoking the function

console.log(p);

//spread operator with objects

let c;
const parkA = { car: 'Toyota', status: 'New' };
const parkB = { car: 'WagonR', status: 'Foreign Used' };

const allParks = { parkA, parkB };

const myPark = { ...parkA, ...parkB };

const obj4 = Object.assign({}, parkB);
c = allParks;
c = myPark;
c = obj4;
console.log(c);

//Explanation needed here!!
let ob;
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };

const newObj3 = { ...obj1, ...obj2 };
ob = obj3;
ob = newObj3;
console.log(ob);

//Arrays of objects

let arr;

const users = [
  { id: 1, name: 'alex kochens', isLoggedIn: true },
  { id: 2, name: 'James kent', isLoggedIn: false },
  { id: 3, name: 'mary', isLoggedIn: true },
  { id: 4, name: 'helton', isLoggedIn: true },
];

arr = users;

//accessing the value
arr = users[0].name;

users[2].name = 'sandra';

//mutating the value inside an array of object
arr = users;

//accessing the keys

arr = Object.keys(users);

//accessing the values

arr = Object.values(users);

//array with key-value pair

arr = Object.entries(users);
console.log(arr);
