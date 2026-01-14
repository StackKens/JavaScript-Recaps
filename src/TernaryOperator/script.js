console.log(`Ternary Operator`);
// This is a shorter way of writing conditionals

// using if statement
let age = 18;
if (age >= 18) {
  console.log(`You can vote`);
} else {
  console.log(`You can not vote`);
}

// Using ternary
age >= 18 ? console.log('You can Vote') : console.log('You can not vote');

// In case you don't need the else part
age >= 18 && console.log(`You can vote`);

// assigning a conditional value to a variable

let loanLimit = 0.5;

const isEligibleForLoan =
  loanLimit >= 0.5
    ? console.log('You are eligible for the loan')
    : console.log('You are not eligible for the loan');

// if authenticated, redirected to the dashboard, else redirected to the login page

// Using if statement
let auth = false;
let redirect;
if (auth) {
  console.log(`You are logged in`);
  console.log((redirect = '/dashboard'));
} else {
  console.log(`You don't have an account yet `);
  console.log((redirect = '/login'));
}

// Using ternary
const authenticated = auth
  ? (alert(`You are logged in`), console.log((redirect = '/dashboard')))
  : (alert('You do not have an account yet!'),
    console.log((redirect = '/login')));
