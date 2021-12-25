window.onload = laadmenu;

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


