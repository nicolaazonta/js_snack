/* SNACK 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */


const wordOne = prompt('type a word');
const wordTwo = prompt('type a second word');


if(wordOne.length > wordTwo.length) {
    console.log(`the shortest word is ${wordTwo}`);
}else if (wordTwo.length > wordOne.length) {
    console.log(`the shortest word is ${wordOne}`);
}else {
    console.log(`the words have the same length`);
}

