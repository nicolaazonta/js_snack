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

for (let i = 0; i < guests.length; i++) {
    const thisGuest = guests[i];


    //console.log(thisGuest);
    if (thisGuest === userGuest) {
        console.log('sei in lista');
    } else if (thisGuest != userGuest){
        console.log('non puoi entrare');
    }     
}


