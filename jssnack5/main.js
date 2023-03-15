/* 
Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */
/* let numbers = []; ------------with for cycle

for (let i = 0; i < 6; i++) {

    const attempt = Number(prompt('type a number'));

    if ((attempt % 2) != 0){
        numbers.push(attempt)
    }
    
}

console.log(numbers); */




for (let i = 0; i < 6; i++) {

    const attempt = Number(prompt('type a number'));

    if ((attempt % 2) != 0){
        numbers.push(attempt)
    }
    
}

console.log(numbers);
