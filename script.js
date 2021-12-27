//sneeuw
let sneeuwnu = new Date();
let sneeuwd1 = new Date(2021, 11, 27, 18)
let sneeuwd2 = new Date(2021, 11, 27, 20)

if (sneeuwnu > sneeuwd1 && sneeuwnu < sneeuwd2) {
document.querySelector(".sneeuwoverlay").style.display = "none";
}  else {
document.querySelector(".sneeuwoverlay").style.display = "default";
}
//sneeuwsluit

let inp = document.querySelector(".inp");
let price1 = document.querySelector(".price1");
let price2 = document.querySelector(".price2");

inp.addEventListener("change", bereken);

function bereken() {
price1.textContent = '\u20AC' + (inp.value * 2.85).toFixed(2) + ",-";
price2.textContent = '\u20AC' + (inp.value * 5.75).toFixed(2) + ",-";
}


let d1 = new Date();
let d2 = new Date(2022, 0, 1);
let hoi = d2 - d1;
let aantaluurvoorkerst = Math.round(hoi/3600000);
document.querySelector(".kerstaanduiding").textContent = aantaluurvoorkerst;

function veranderkerstboom(wat) {
let img = document.querySelector(".kerstboomaanuit");
img.setAttribute("src", "kerstboom/lichtjes" + wat + ".png");
}






