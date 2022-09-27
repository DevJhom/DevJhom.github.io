const percentage = document.getElementById("percentage");
const line = document.getElementById("line");
const radios = document.getElementsByName("duration");

let duration = 3; //default
let interval;
startLoading();

function startLoading() {
  startLineAnimation();

  let percentValue = 0;
  interval = setInterval(increasePercentage, duration*10);

  function increasePercentage() {
    percentValue++;

    if (percentValue > 99) {
      clearInterval(interval);
    }

    percentage.innerText = `${percentValue}%`;
  }
}

function startLineAnimation(){
  line.style.animation = `timer ${duration}s linear`;
}

function restartLineAnimation(){
    line.style.animation = 'none';
    line.offsetWidth;
    line.style.animation = `timer ${duration}s linear`;
}

radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    duration = document.querySelector("[name=duration]:checked").value;
    clearInterval(interval);
    startLoading();
    restartLineAnimation();
  });
});
