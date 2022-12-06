const searchText = document.getElementById("searchText");
const serachButton = document.getElementById("searchButt");
const stats = document.querySelector("status");

let url =
  "http://api.openweathermap.org/geo/1.0/direct?q=Vitebsk,BY&appid=9852ba4ce54f5e1ee00dcc5331937ad8";
let url1 =
  "http://api.openweathermap.org/geo/1.0/reverse?lat=55.194419&lon=30.176051&limit=3&appid=9852ba4ce54f5e1ee00dcc5331937ad8";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (text) {
    console.log(text[0].name);
    return text;
  });
