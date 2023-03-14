/* Snack 1 Blocco 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const NumberOne = Number(prompt('inserisci il primo numero'));
const NumberTwo = Number(prompt('inserisci il secondo numero'));
if (NumberOne > NumberTwo) {
    console.log(NumberOne);
}else if(NumberTwo > NumberOne){
    console.log(NumberTwo);
} else {
    console.log('i numeri sono uguali');
}


