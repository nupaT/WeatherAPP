const ID = "9852ba4ce54f5e1ee00dcc5331937ad8";
const searchCity = document.getElementById("searchCity");
const serachButton = document.getElementById("searchButt");
const stats = document.querySelector("status");

const currCity = document.getElementById("currCity");
const tempValue = document.getElementById("tempValue");


// let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},BY&appid=9852ba4ce54f5e1ee00dcc5331937ad8`;
// let url1 =
//   "http://api.openweathermap.org/geo/1.0/reverse?lat=55.194419&lon=30.176051&limit=3&appid=9852ba4ce54f5e1ee00dcc5331937ad8";

serachButton.addEventListener("click", () => {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&units=metric&exclude=current&lang=ru&appid=${ID}`;
  getFetch(url);
});

searchCity.addEventListener('keyup', () => {

})

async function getFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const temp = data?.main?.temp;
    const city = data?.name;
    addWeatherCard(city, temp);
    console.log(data); //!!
  } catch (err) {
    console.log(err);
  }
}

function addWeatherCard(city, temp) {
  currCity.innerHTML = city;
  tempValue.innerHTML = `${temp} &#176C`;
}
