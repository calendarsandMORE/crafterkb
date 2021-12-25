/*
Syntax:
0: titel
1: voorstukje
2: volledige tekst
*/

let blogs = [
["De eerste blog!", "Dit is de allereerste blog.", "Hoe vind je hem?"],
["We hebben een cakerol gebakken!", "Vandaag hebben wij iets lekkers gemaakt. Weet jij al wat?", "Gekke geiten zijn overal, en vandaag hebben wij een lekkere cake gebakken. Het was echt super leuk, en we deden het met heel erg veel plezier."],
["Geitenmelk...", "Ooit geitenmelk gedronken?", "Het is echt super lekker hoor!"],
];

const holder = document.querySelector(".holder");

for (let i = 0; i < blogs.length; i++) {
let a = blogs.length - 1 - i;
let blogitem = document.createElement("div");
blogitem.setAttribute("class", "blogitem");
holder.appendChild(blogitem);

let top = document.createElement("div");
top.setAttribute("class", "top");
blogitem.appendChild(top);

let titel = document.createElement("p");
titel.setAttribute("class", "title");
titel.textContent = blogs[a][0];
top.appendChild(titel);

let voorinformatie = document.createElement("p");
voorinformatie.setAttribute("class", "voorinformatie");
voorinformatie.textContent = blogs[a][1];
top.appendChild(voorinformatie);

//groene gedeelte
let bottom = document.createElement("div");
bottom.setAttribute("class", "bottom");
blogitem.appendChild(bottom);

let leesverder = document.createElement("p");
leesverder.setAttribute("class", "leesverder");
leesverder.textContent = "Lees verder...";
bottom.appendChild(leesverder);

let inhoud = document.createElement("p");
inhoud.setAttribute("class", "inhoud");
inhoud.textContent = blogs[a][2];
bottom.appendChild(inhoud);

}

