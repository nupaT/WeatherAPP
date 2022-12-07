const searchCity = document.getElementById("searchCity");
const serachButton = document.getElementById("searchButt");
const stats = document.querySelector("status");

// let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},BY&appid=9852ba4ce54f5e1ee00dcc5331937ad8`;
let url1 =
  "http://api.openweathermap.org/geo/1.0/reverse?lat=55.194419&lon=30.176051&limit=3&appid=9852ba4ce54f5e1ee00dcc5331937ad8";

serachButton.addEventListener("click", () => {
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity.value},BY&units=metric&lang=ru&appid=9852ba4ce54f5e1ee00dcc5331937ad8`;
  // let url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity.value},BY&appid=9852ba4ce54f5e1ee00dcc5331937ad8`;
  getFetch(url);
});

async function getFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0].local_names.ru);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
