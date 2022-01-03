let inp = document.querySelector(".inp");
let price1 = document.querySelector(".price1");
let price2 = document.querySelector(".price2");

inp.addEventListener("change", bereken);

function bereken() {
price1.textContent = '\u20AC' + (inp.value * 2.85).toFixed(2) + ",-";
price2.textContent = '\u20AC' + (inp.value * 5.75).toFixed(2) + ",-";
}



