const apiKey = "e88ba8875e7e408d8b053059260903 ";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", getWeather);

function getWeather(){

const city = cityInput.value;

if(city === ""){
alert("Please enter a city");
return;
}

const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

fetch(url)
.then(response => response.json())
.then(data => displayWeather(data))
.catch(error => {
weatherResult.innerHTML = "Error fetching weather";
});

}

function displayWeather(data){

const cityName = data.location.name;
const country = data.location.country;
const temp = data.current.temp_c;
const condition = data.current.condition.text;
const humidity = data.current.humidity;

weatherResult.innerHTML = `
<h2>${cityName}, ${country}</h2>
<p>Temperature: ${temp}°C</p>
<p>Condition: ${condition}</p>
<p>Humidity: ${humidity}%</p>
`;
}