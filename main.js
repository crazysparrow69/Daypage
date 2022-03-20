// Get DOM
const name = document.getElementById("name");
const greeting = document.getElementById("greeting");
const time = document.getElementById("time");
const dayfocus = document.getElementById("dayfocus");

// Add zero to single numerals
const addZero = (number) => {
  return (number < 10 ? "0" + number : number);
};

// Check part of the day
const partOfTheDay = (hours) => {
  return (hours <= 12 ? "AM" : "PM");
};

// Converting hours into AmPm format
const convertHours = (hours) => {
  return (hours < 12 ? hours : hours - 12);
};

// Change time 
const changeTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const amPm = partOfTheDay(hours);

  time.innerHTML = `${convertHours(hours)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${amPm}`;
  setInterval(changeTime, 1000);
};

// Change background according to the part of the day
const changeBackground = () => {
  const hours = new Date().getHours();
  const body = document.body;
  if(hours >= 21) {
    body.style.backgroundImage = "url(img/night.jpg)";
  } else if(hours >= 18) {
    body.style.backgroundImage = "url(img/evening.jpg)";
  } else if(hours >= 12) {
    body.style.backgroundImage = "url(img/day.jpg)";
  } else {
    body.style.backgroundImage = "url(img/morning.jpg)";
  }
  setInterval(changeBackground, 1000);
};

// Change greeting according to the part of the day
const changeGreeting = () => {
  const hours = new Date().getHours();
  if(hours >= 21) {
    greeting.textContent = "Good Night,"
  } else if(hours >= 18) {
    greeting.textContent = "Good Evening,"
  } else if(hours >= 12) {
    greeting.textContent = "Good Afternoon,"
  } else {
    greeting.textContent = "Good Morning,"
  }
  setInterval(changeGreeting, 1000);
};

// Change text color 
const changeTextColor = () => {
  const hours = new Date().getHours();
  if(hours >= 21 || hours < 12) {
    document.body.style.color = "white";
  } else {
    document.body.style.color = "black";
  }
  setInterval(changeTextColor, 1000);
};

// Check name
const checkName = () => {
  if(localStorage.getItem("name") === null) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
};

// Save name by keypress
const saveNameKeypress = (event) => {
  if(event.which == 13 || event.KeyCode == 13) {
    localStorage.setItem("name", event.target.innerText);
    name.blur();
  }
};

// Save name by blur
const saveNameBlur = (event) => {
  localStorage.setItem("name", event.target.innerText);
};

// Check focus
const checkFocus = () => {
  if(localStorage.getItem("dayfocus") === null) {
    dayfocus.textContent = "[Enter focus]";
  } else {
    dayfocus.textContent = localStorage.getItem("dayfocus");
  }
};

// Save focus by keypress 
const saveFocusKeypress = (event) => {
  if(event.which == 13 || event.KeyCode == 13) {
    localStorage.setItem("dayfocus", event.target.innerText);
    dayfocus.blur();
  }
};

// Save focus by blur
const saveFocusBlur = (event) => {
  localStorage.setItem("dayfocus", event.target.innerText);
};

// The main function
const main = () => {
  changeBackground();
  changeGreeting();
  changeTextColor();
  changeTime();
  checkName();
  checkFocus();
};

name.addEventListener("keypress", saveNameKeypress);
name.addEventListener("blur", saveNameBlur);
dayfocus.addEventListener("keypress", saveFocusKeypress);
dayfocus.addEventListener("blur", saveFocusBlur);
window.onload = main;