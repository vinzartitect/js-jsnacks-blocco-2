// Crea un array di numeri interi e fai la somma di tutti 
// gli elementi che sono in posizione dispari

let arrayNum = [];
let somma = 0;

for (let i = 0; i < 6; i++) {
    
    arrayNum[i] = parseInt(prompt("inserisci un numero please!"));

    console.log("numero da te inserito: " + arrayNum);

    if ( i % 2 !=0 ) {

        somma += arrayNum[i];
    
    }

}

console.log("Somma totale: " + somma);


