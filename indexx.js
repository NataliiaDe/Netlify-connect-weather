function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

let apiKey = "c3f266b7b6185da48175ba891dd557e5";
let units = "metric";
let city = "Kyiv";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
