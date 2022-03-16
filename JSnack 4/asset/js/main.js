// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando 
// ne avrà tanti quanti l’altro.

let arrayLungo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayCorto = [1, 2, 3, 4];

console.log(arrayLungo);
console.log(arrayCorto);

for ( let i = arrayCorto.length; arrayCorto.length < arrayLungo.length; i++ ){

    arrayCorto.push(Math.floor((Math.random()*10)));

}

console.log(arrayCorto);


