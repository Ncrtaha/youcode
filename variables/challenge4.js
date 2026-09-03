var prompt = require('prompt-sync')();


let kmh = +prompt("Saisir la vitesse en Km/h: ");
let ms ;

ms = kmh * 0.27778

console.log("la temperature en K = " + ms);
