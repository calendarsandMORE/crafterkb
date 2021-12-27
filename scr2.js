window.onload = doEverything;

function doEverything() {
laadmenu();
laadfooter();
}

let menuitems = [
["Home", "index"],
["About", "about"],
["Merch","shopping"],
["Blog", "blogs"],
["Video's", "videos"],
];


function laadmenu() {
let menu = document.querySelector(".menu");
menu.innerHTML = "";

for (let i = 0; i < menuitems.length; i++) {
let aa = document.createElement("a");
aa.textContent = menuitems[i][0];
aa.setAttribute("href", menuitems[i][1] + ".htm");
menu.appendChild(aa);
}

}

function laadfooter() {
let body = document.querySelector("body");
let footer = document.createElement("div");
footer.setAttribute("class", "footer");

let date = new Date();
let year = date.getFullYear();

let para = document.createElement("p");
para.innerHTML = "&copy; " + year + " Crafter Kingston. All rights reserved.";
footer.appendChild(para);

let a = document.createElement("a");
a.setAttribute("href", "index.htm");
let img = document.createElement("img");
img.setAttribute("src", "ytlogo.jpg");
a.appendChild(img);
footer.appendChild(a);

body.appendChild(footer);
}

