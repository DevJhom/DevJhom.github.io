//TO ADD
//function for "Shift"

const texts = document.querySelector(".texts");
const container = document.querySelector(".container");
const firstRow = document.querySelector(".first-row");
const secondRow = document.querySelector(".second-row");
const thirdRow = document.querySelector(".third-row");
const spaceBar = document.querySelector(".space-bar");

//Alphabets and keys
const firstRowKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "⌫"];
const secondRowKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter"];
const thirdRowKeys = ["z", "x", "c", "v", "b", "n", "m"];
const firstRowKeys_Capital = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "⌫"];
const secondRowKeys_Capital = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter"];
const thirdRowKeys_Capital = ["Z", "X", "C", "V", "B", "N", "M"];
const spaceBarKey = [" "];

//Helper variables
const colors = ["#43c6ac", "green", "yellow", "red", "blue"];
let capsLockStatus = false;
let enteredText = [];

//Create keyboards in the DOM, one row at a time
const createKeyboard = (keys, row) => {
  keys.forEach((key) => {
    const keyEl = document.createElement("span");
    keyEl.innerText = key;
    keyEl.id = key;
    row.appendChild(keyEl);
  });
};

//update the DOM keyboards 
const updateKeyboard = (cases) => {
  firstRow.innerHTML = "";
  secondRow.innerHTML = "";
  thirdRow.innerHTML = "";
  spaceBar.innerHTML = "";

  if (cases === "lower-case") {
    createKeyboard(firstRowKeys, firstRow);
    createKeyboard(secondRowKeys, secondRow);
    createKeyboard(thirdRowKeys, thirdRow);
  } else if (cases === "upper-case") {
    createKeyboard(firstRowKeys_Capital, firstRow);
    createKeyboard(secondRowKeys_Capital, secondRow);
    createKeyboard(thirdRowKeys_Capital, thirdRow);
  }

  createKeyboard(spaceBarKey, spaceBar);
};
updateKeyboard("lower-case"); //initialize

//getting user input
window.addEventListener("keydown", (e) => {
  const enteredKey = e.key;

  //if user switches their "CapsLock" status, update the DOM
  if (capsLockStatus === e.getModifierState("CapsLock")) {
    //no update
  } else {
    //update
    if(e.getModifierState("CapsLock"))
      updateKeyboard("upper-case");
    else
      updateKeyboard("lower-case");

    capsLockStatus = !capsLockStatus;
  }

  if (
    firstRowKeys.includes(enteredKey) ||
    secondRowKeys.includes(enteredKey) ||
    thirdRowKeys.includes(enteredKey) ||
    firstRowKeys_Capital.includes(enteredKey) ||
    secondRowKeys_Capital.includes(enteredKey) ||
    thirdRowKeys_Capital.includes(enteredKey) ||
    enteredKey === " "
  ){
    animateKeyboard(enteredKey);
  } else if(enteredKey === "Backspace"){
    animateKeyboard("⌫");
  }

  updateTexts(enteredKey);
});

const animateKeyboard = (enteredKey) => {
  const keyEl = document.getElementById(enteredKey);

  const color = getRandomColor();
  let color2 = getRandomColor();

  while (color === color2) {
    color2 = getRandomColor();
  }

  keyEl.style.background = `linear-gradient(45deg, ${color}, ${color2})`;

  setTimeout(() => {
    keyEl.style.background = "";
    keyEl.style.color = "";
  }, 1000);
};

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const updateTexts = (enteredKey) => {
  if (enteredKey === "Enter") {
    enteredText = [];
  } else if (enteredKey === "Backspace") {
    enteredText.pop();
  } else if (enteredKey === "CapsLock"){
    //do nothing
  } else {
    enteredText.push(enteredKey);
  }

  texts.innerText = enteredText.join("");
};
