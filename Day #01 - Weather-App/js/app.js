const button = document.getElementById('searchButton');
const search = document.getElementById('searchBar');
const errorMessage = document.querySelector('.error');

const apiKey = "61e42b66c60f83abf228e70d74656a97";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  
  if(response.status === 404) {
    document.querySelector(".weather").style.display = "none";
    errorMessage.style.display = 'block';
    return;
  }
  errorMessage.style.display = "none";
  
  let data = await response.json();

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}&deg;c`;
  document.querySelector(".humidity").innerHTML = `${data.main.temp}&#37;`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} km&sol;h`;

  const weatherIcon = document.querySelector(".weather-icon");
  
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  } 

  document.querySelector('.weather').style.display = 'block';
} 


button.addEventListener("click", () => {
  checkWeather(search.value);
});

search.addEventListener('keydown', event => {
  if(event.key === 'Enter') {
    checkWeather(search.value);
  }
});
