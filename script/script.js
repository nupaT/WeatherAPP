const ID = "9852ba4ce54f5e1ee00dcc5331937ad8";
const searchCity = document.getElementById("searchCity");
const serachButton = document.getElementById("searchButt");
const stats = document.querySelector("status");

const currCity = document.getElementById("currCity");
const weatherIco = document.getElementById("weatherIco");
const tempValue = document.getElementById("tempValue");
const FeelsTemp = document.getElementById("FeelsTemp");
const currClouds = document.getElementById("currClouds");

// let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},BY&appid=9852ba4ce54f5e1ee00dcc5331937ad8`;
// let url1 =
//   "http://api.openweathermap.org/geo/1.0/reverse?lat=55.194419&lon=30.176051&limit=3&appid=9852ba4ce54f5e1ee00dcc5331937ad8";

serachButton.addEventListener("click", () => {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&units=metric&exclude=current&lang=ru&appid=${ID}`;
  getFetch(url);
});

async function getFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const city = await data?.name;
    const currWeatherIco = await data?.weather[0]?.icon;
    const temp = await data?.main?.temp;
    const feelsTempValue = await data?.main?.feels_like;
    const currCloudsValue = await data?.weather[0]?.description;
    addWeatherCard(city, temp, currWeatherIco, feelsTempValue, currCloudsValue);
    console.log(data); //!!
  } catch (err) {
    console.log(err);
  }
}

function addWeatherCard(city, temp, currWeatherIco, feelsTempValue, currCloudsValue) {
  currCity.innerHTML = city;
  const weatherUrl = `http://openweathermap.org/img/wn/${currWeatherIco}.png`;
  weatherIco.style.backgroundImage = `url('${weatherUrl}')`;
  tempValue.innerHTML = `${temp} &#176C`;
  FeelsTemp.innerHTML = `${feelsTempValue} &#176C`;
  currClouds.innerHTML = `${currCloudsValue}`;
}
