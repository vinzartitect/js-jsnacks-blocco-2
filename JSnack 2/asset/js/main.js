// Generatore di “nomi cognomi” casuali: 
// il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

let listaNomi = ["Pippo", "Peppe", "Franco", "Ciccio", "Ajeje", "Helmut", "Asdrubale"];
let listaCognomi = ["Baudo", "Alzheimer", "Pivetta", "Brazorf", "Fatarni", "Marinalli", "Cisafrulli"];

let listaFalsa = [];
let listaFalsaStamp = document.getElementById(`result`);

console.log(listaNomi);
console.log(listaCognomi);

for ( let i = 0; i < 7; i++) {

    let nomiRandom = Math.floor(Math.random() * listaNomi.length);
    let cognomiRandom = Math.floor(Math.random() * listaCognomi.length);

    let nomeFesta = listaNomi[nomiRandom];
    let cognomeFesta = listaCognomi[cognomiRandom];

    let invitatoFesta = `${nomeFesta} ${cognomeFesta}`;

    console.log(invitatoFesta);
    
    listaFalsa.includes(invitatoFesta);

    console.log(listaFalsa);

}

listaFalsaStamp.innerHTML = `questa è la lista: ${listaFalsa}`;

