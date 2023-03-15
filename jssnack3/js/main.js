/* Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */



/* let numberEl 
let sum = 0;

for (let i = 0; i < 10; i++) {
    numberEl = Number(prompt('digita un numero'));
    sum = sum + numberEl;
    //console.log('ciao' + numberEl);
    //console.log(sum);
}



console.log(`the sum of all ten number is ${sum}`); */






//SNACK 3
/*Rifare con WHILE LOOP:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let k = 0;
let sum = 0;

while ( k < 10) {
    numberEl = Number(prompt('digita un numero'));
    sum = sum + numberEl;
    k++
}

console.log(`the sum of all ten number is ${sum}`);




