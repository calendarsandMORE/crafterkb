window.onload = doEverything;

function doEverything() {
laadmenu();
laadfooter();
laadtitle();
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

function laadtitle() {
let head = document.querySelector("head");
let title = document.createElement("title");

let path = window.location.pathname;
let page = path.split("/").pop();
let pagerhtm = page.substring(0, page.length - 4)

for (let i = 0; i < menuitems.length; i++) {
if (menuitems[i][1] == pagerhtm) {
title.innerHTML = "CK - " + menuitems[i][0];
}
}

head.appendChild(title);

}


