//sneeuw
let sneeuwnu = new Date();
let sneeuwd1 = new Date(2021, 11, 31, 18)
let sneeuwd2 = new Date(2021, 11, 31, 20)

if (sneeuwnu > sneeuwd1 && sneeuwnu < sneeuwd2) {
document.querySelector(".sneeuwoverlay").style.display = "none";
}  else {
document.querySelector(".sneeuwoverlay").style.display = "default";
}
//sneeuwsluit

//nieuwjaar
let nieuwjaard1 = new Date(2021, 11, 31, 14, 33);
let nieuwjaard2 = new Date(2021, 11, 31, 14, 34);
if (sneeuwnu > nieuwjaard1 && sneeuwnu < nieuwjaard2) {
document.querySelector(".nieuwjaaroverlay").style.display = "block";
}

document.querySelector(".nieuwjaaroverlayurenminuten").textContent = "We are allready " + sneeuwnu.getHours() + " hours and " + sneeuwnu.getMinutes() + " minutes into 2022!"
document.querySelector(".nieuwjaaroverlay").addEventListener("click", function() {
document.querySelector(".nieuwjaaroverlay").style.display = "none";
}, false);

//nieuwjaarsluit



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

let aantaldagen = String(aantaluurvoorkerst/24);
let splitted = aantaldagen.split("");
let punt = splitted.indexOf(".");
let cijfersVoorPunt = "";//		//
for (let i = 0; i < punt; i++) {
cijfersVoorPunt += splitted[i]
}
//alert(cijfersVoorPunt);//		//
let cijfersNaPunt = "";//		//
for (let i = punt + 1; i < splitted.length; i++) {
cijfersNaPunt += splitted[i];
}
//alert(cijfersNaPunt);//		//
let uur = Number(cijfersNaPunt);
let macht = splitted.length - punt - 1;
let keermacht = Math.pow(10, -macht);
uur *= keermacht;
uur *= 24;
let uur2 = Math.round(uur);

document.getElementById("KERSTdays").textContent = cijfersVoorPunt;
document.getElementById("KERSThours").textContent = uur2;

//document.querySelector(".kerstaanduiding").textContent = aantaluurvoorkerst;


function veranderkerstboom(wat) {
let img = document.querySelector(".kerstboomaanuit");
img.setAttribute("src", "kerstboom/lichtjes" + wat + ".png");
}


