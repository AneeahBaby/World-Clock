let newyorkElement = document.querySelector("#New-York");
let newyorkDateElement = newyorkElement.querySelector(".date");
let newyorkTimeElement= newyorkElement.querySelector(".time");
let newyorkTime = moment().tz("America/New_York");


newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
newyorkTimeElement.innerHTML = newyorkTime.format("h:mm:ss [<small>]P[</small>]");