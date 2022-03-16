// Inserisci un numero, se è pari stampa il numero, 
// se è dispari stampa il numero successivo.


let inputNumero = parseInt(prompt(`inserisci un numero please!`));

let risultato = document.getElementById(`result`);

if (isNaN(inputNumero)) {

    alert(`we testina ricarica la pagina e inserisci un numero per cortesia!`);

} else {

    if ((inputNumero % 2) !==0 ) {

        let numeroPlus = inputNumero + 1;

        console.log(numeroPlus);
        risultato.innerHTML = `il numero da te inserito era ${inputNumero} ma è stato incrementato di uno per renderlo pari, eccolo: ${numeroPlus} è pari adesso!`;

    } else {

        console.log(inputNumero);
        risultato.innerHTML = `${inputNumero} è pari!`;        

    }

}