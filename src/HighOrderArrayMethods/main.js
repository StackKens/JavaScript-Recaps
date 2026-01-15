// High order array methods

//=============================
// for each

const socials = ['TikTok', 'LinkedIn', 'Instagram', 'Twitter'];
socials.forEach((social) => {
  console.log(social);
});

// Defining a  call back function.

const showUsers = (user) => {
  console.log(user);
};
const users = ['mike', 'tim', 'jerir'];
users.forEach(showUsers);

// with array of objects

const colors = [{ name: 'red' }, { name: 'green' }, { name: 'white' }];
colors.forEach((color) => {
  console.log(color.name);
});

// ================================
// Filter
const AppUsers = [
  { name: 'Alex', isLoggedIn: true },
  { name: 'Jane', isLoggedIn: false },
  { name: 'Keith', isLoggedIn: true },
  { name: 'Keneth', isLoggedIn: false },
  { name: 'Alice', isLoggedIn: true },
  { name: 'James', isLoggedIn: false },
];

AppUsers.forEach((appUser) => console.log(appUser.isLoggedIn));

const verifiedAppUsers = AppUsers.filter((user) => user.isLoggedIn === true);
console.log(verifiedAppUsers);
verifiedAppUsers.forEach((appUser) => console.log(appUser.name));
