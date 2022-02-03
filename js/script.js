const button = document.querySelector("button");
const counter = document.querySelector(".counter");
const inputDivs = document.querySelector(".inputs");

let counterValue = 0;

button.onmousedown = function () {
  this.textContent = "Release to stop";
  counterValue = 0;
  counter.innerHTML = 0;
  inputDivs.innerHTML = "";
  const interValID = setInterval(function () {
    counterValue++;
    counter.innerHTML = counterValue;
  }, 1000);
  button.onmouseup = function () {
    this.textContent = "Press and hold to count";
    clearInterval(interValID);
    for (let i = 1; i <= counterValue; i++) {
      inputDivs.innerHTML += `<input name="input${i}" id="input${i}" placeholder="input ${i}"></input>`;
    }
  };
};

// const button = document.querySelector("button");
// const counterContainer = document.querySelector(".counter");
// const inputContainer = document.querySelector(".inputs");

// button.addEventListener("mousedown", handleMouseDown);
// button.addEventListener("mouseup", handleMouseUp);

// let intervalId;
// let count;

// function handleMouseDown() {
//   count = 0;
//   this.textContent = "Release to stop counting";
//   counterContainer.innerHTML = count;
//   inputContainer.innerHTML = "";

//   intervalId = setInterval(function () {
//     count++;
//     counterContainer.innerHTML = count;
//   }, 1000);
// }

// function handleMouseUp() {
//   clearInterval(intervalId);
//   this.textContent = "Press and hold to count";

//   for (let i = 1; i <= count; i++) {
//     inputContainer.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`;
//   }
// }
