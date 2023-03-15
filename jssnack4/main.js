/* Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */


let guests =[
    'pippo',
    'pluto',
    'paperino',
    'qui',
    'quo',
    'qua'
]

const userGuest = prompt('please insert your name');
let result 

/* for (let i = 0; i < guests.length; i++) {
    const thisGuest = guests[i];
    if (thisGuest === userGuest) {
        result = true;
    }     
} */

let k = 0;
while ( k < guests.length) {
    const thisGuest = guests[k];
    if (thisGuest === userGuest) {
        result = true;
    }     
    k++;
}

if(result == true) {console.log('sei in lista');}
else{console.log('non puoi entrare');}


