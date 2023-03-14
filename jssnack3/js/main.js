/* Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */



let numbers 
let sum

for (let i = 0; i < 10; i++) {
    numbers[i] = prompt(`insert number ${i}`);
    console.log(numbers[i]);    
}

for (let i = 0; i < 10; i++) {
   // numbers [i] = Number(prompt('insert number ${i}'))
    sum = sum + numbers [i];
}

console.log(`the sum of all ten number is ${sum}`);









