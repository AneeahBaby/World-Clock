let newyorkElement = document.querySelector("#new-york");
let newyorkDateElement = newyorkElement.querySelector(".date");
let newyorkTimeElement= newyorkElement.querySelector(".time");
let newyorkTime = moment().tz("America/New_York");


newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
newyorkTimeElement.innerHTML = newyorkTime.format("h:mm:ss [<small>]A[</small>]");

let pensacolaElement = document.querySelector("#pensacola");
let pensacolaDateElement = pensacolaElement.querySelector(".date");
let pensacolaTimeElement = pensacolaElement.querySelector(".time");
let pensacolaTime = moment().tz("America/Florida");

pensacolaDateElement.innerHTML = pensacolaTime.format("MMMM Do YYYY");
pensacolaTimeElement.innerHTML = pensacolaTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

