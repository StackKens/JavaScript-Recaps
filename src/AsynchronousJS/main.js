const name = "Alex StackKens";

const profession = "Software Engineer";
const paragraph = document.getElementById("data");
const country = "Uganda";

const displayDetails = () => {
  setTimeout(() => {
    const data = document.createElement("div");
    data.innerHTML = `<p>I am   ${name}</p> <br/><p> I am a ${profession}</p> <p>I come from ${country}</p>   `;
    document.body.appendChild(data);
    paragraph.appendChild(data);
    console.log(`I am a ${profession}  `);

    setTimeout(() => {
      paragraph.style.color = "red";
      paragraph.style.fontSize = "20px";
      paragraph.style.fontWeight = "bold";
      paragraph.style.textAlign = "center";
      paragraph.style.textTransform = "uppercase";
    }, 3000);

    setTimeout(() => {
      paragraph.style.backgroundColor = "#fff";
      paragraph.style.padding = "20px";
      paragraph.style.borderRadius = "10px";
    }, 5000);
  }, 2000);
};
displayDetails();

const grade = "A";

const displayGrade = () => {
  const myGrade = document.createElement("h1");
  myGrade.innerHTML = `Your grade is ${grade}`;
  document.body.appendChild(myGrade);
};

setTimeout(displayGrade, 1000);
