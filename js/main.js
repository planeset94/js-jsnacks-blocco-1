// // L’utente inserisce due parole in successione, con due prompt.
// var parola_1= prompt('Insierisci una parola');
// var parola_2= prompt('Insierisci un\'altra parola');

// console.log(parola_1);
// console.log(parola_2);

// // Il software stampa prima la parola più corta, poi la parola più lunga.
// var lunghezza_1;
// var lunghezza_2;

// lunghezza_1=parola_1.length;
// lunghezza_2=parola_2.length;




// switch (true){
//     case lunghezza_1 < lunghezza_2:
//         console.log('prima parola: ' +lunghezza_1);
//         console.log('seconda parola: ' +lunghezza_2);

//     break;

//     case lunghezza_1 > lunghezza_2:
//         console.log('seconda parola: ' +lunghezza_2);
//         console.log('prima parola: ' +lunghezza_1);

//     break;
// }

// Snack 3:


// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. 

// var somma=0;
// for (var i=0; i< 10; i++){
//     var number = Number(prompt('Inserisci un numero'));
//     somma= somma + number;
// }

// console.log(somma);


// Snack 4:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//  chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Definisco il contenuto della matrice 
var list= new Array("andrea", "luca", "giovanni");
// chiedo all'utente il suo nome 
var user_Name = prompt('What\'s your name?').toLowerCase();
console.log(user_Name);
// Definisco le variabili del ciclo di verifica 



var invitato= false;
var i;


for (i=0; i<=list.length; i++){
    var risultato= list[i];
    if (risultato==user_Name){
       invitato=true;
       console.log(invitato);
        
    } 
}

if (invitato){
    document.getElementById('stampa').innerHTML="You are IN";
} else{
    document.getElementById('stampa').innerHTML="sorry, you aren't in the List.";
}

