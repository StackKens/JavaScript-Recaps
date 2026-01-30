// DOM(Document Object Model)
const welcome = document.getElementById("welcome");
const isLoggedIn = true;
const showWelcome = (name) => {
  isLoggedIn
    ? (welcome.innerHTML = `Welcome Back ${name}`)
    : (welcome.innerHTML = "Please Login!");
};

showWelcome("alex");
const colors = ["red", "blue", "black", "purple"];
let currentIndex = 0;

//Color toggling
const btn = document.getElementById("set-color");

const setColors = () => {
  document.body.style.backgroundColor = colors[currentIndex];
  console.log(colors[currentIndex]);

  currentIndex++;

  if (currentIndex >= colors.length) {
    currentIndex = 0;
  }
};

btn.addEventListener("click", setColors);
