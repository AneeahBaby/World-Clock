function updateTime() {

let newyorkElement = document.querySelector("#new-york");
if(newyorkElement) {
let newyorkDateElement = newyorkElement.querySelector(".date");
let newyorkTimeElement= newyorkElement.querySelector(".time");
let newyorkTime = moment().tz("America/New_York");


newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
newyorkTimeElement.innerHTML = newyorkTime.format("h:mm:ss [<small>]A[</small>]");
}

let CostaRicaElement = document.querySelector("#CostaRica");
if(CostaRicaElement) {
let CostaRicaDateElement = CostaRicaElement.querySelector(".date");
let CostaRicaTimeElement = CostaRicaElement.querySelector(".time");
let CostaRicaTime = moment().tz("America/Costa_Rica");

CostaRicaDateElement.innerHTML = CostaRicaTime.format("MMMM Do YYYY");
CostaRicaTimeElement.innerHTML = CostaRicaTime.format(
  "h:mm:ss [<small>]A[</small>]"
  );
}
}

function updateCity(event) {
let cityTimeZone = event.target.value;
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML= `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
 }

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addeventlistener("change", updateCity);