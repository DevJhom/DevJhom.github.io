const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

const timeEl = document.querySelector(".time");
const ampmEl = document.querySelector(".ampm");
const dateEl = document.querySelector(".date");

const cardFooter = document.querySelector(".card-footer");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setTime();

function setTime() {
  const time = new Date();

  const hour_24 =  time.getHours();
  const hour_12 = time.getHours() % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();

  //Rotate Clock's needles
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour_12, 0, 11, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

  //Display Time & Date
  timeEl.innerHTML = `${hour_12}:${minute < 10 ? `0${minute}`: minute}`
  ampmEl.innerHTML = `${hour_24 < 12 ? 'AM':'PM'}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} ${date}`

  //change footer-bg only when hour changes
  if(minute === 0 && second === 0){
    changeFooter(hour_24)
  }
}

setInterval(setTime, 1000);

//StackOverflow - Map a range of numbers to another range of numbers
//Map 0 - 11 hours to 0 - 360 degrees
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}


// CARD FOOTER

setFooter();

function setFooter(){
  const time = new Date();
  const hour = time.getHours();
  changeFooter(hour);
}

function changeFooter(hour){
  if(hour === 6){
    //DAWN
    cardFooter.innerHTML = "It's dawn."
    cardFooter.style.backgroundImage = `
      radial-gradient(at 80% 4%, #8F6993, transparent 50%),
      radial-gradient(at 45% 25%, #FEA389, transparent 50%),
      radial-gradient(at 25% 60%, #FFF09B, transparent 50%)`
  }else if(hour > 6 && hour < 18){
    //DAYTIME
    cardFooter.innerHTML = "It's daytime."
    cardFooter.style.backgroundImage = `
    radial-gradient(at 70% 45%, #F0D586, transparent 50%),
    radial-gradient(at 25% 60%, #fff, transparent 50%),
    radial-gradient(at 45% 10%, #FAB743, transparent 50%)`

  }else if(hour === 18){
    //DUSK
    cardFooter.innerHTML = "It's dusk."
    cardFooter.style.backgroundImage = `
      radial-gradient(at 70% 45%, #ef8e44, transparent 50%),
      radial-gradient(at 45% 25%, #FDA811, transparent 50%),
      radial-gradient(at 25% 60%, #FFF09B, transparent 50%)`
  }else{
    //NIGHTTIME
    cardFooter.innerHTML = "It's nightime."
    cardFooter.style.backgroundImage = `
    radial-gradient(at 70% 45%, #0D345C, transparent 50%),
    radial-gradient(at 45% 25%, #052033, transparent 50%),
    radial-gradient(at 25% 60%, #2171A6, transparent 50%)`
  }
}