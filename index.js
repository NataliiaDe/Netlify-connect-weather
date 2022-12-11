import "./styles.css";
function currentDate(date){
  let hours = date.getHours();
  let now = date.getDate("now");
  if (hours < 10) {
    hours = `0${hours}`;
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.QuerySelector("#city");
  let cityInput = document.QuerySelector("#city-input");
 cityElement.innerHTML = cityInput.value;
}

let dateElement = document.querySelector("#date");
let currentDate = new Date();
dateElement.innerHTML = formatDate("currentTime");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
