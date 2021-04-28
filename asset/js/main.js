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

// var user_number;
// var somma = 0;
// var list = new Array();
// for (var i = 0; i < 3; i++) {
//     user_number = Number(prompt('Insert a number'));
//     list.push(user_number);
//     somma = somma + list[i];

// }

// console.log("il risultato è " + somma);


// var somma=0;
// for (var i=0; i< 10; i++){
//     var number = Number(prompt('Inserisci un numero'));
//     somma= somma + number;
// }

// console.log(somma);


// Snack 4:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//  chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// // Definisco il contenuto della matrice 
// var list= new Array("andrea", "luca", "giovanni");
// // chiedo all'utente il suo nome 
// var user_Name = prompt('What\'s your name?').toLowerCase();
// console.log(user_Name);
// Definisco le variabili del ciclo di verifica 



// var invitato= false;
// var i;


// for (i=0; i<=list.length; i++){
//     var risultato= list[i];
//     if (risultato==user_Name){
//        invitato=true;
//        console.log(invitato);

//     } 
// }

// if (invitato){
//     document.getElementById('stampa').innerHTML="You are IN";
// } else{
//     document.getElementById('stampa').innerHTML="sorry, you aren't in the List.";
// }



// SNACK 5

// // Crea un array vuoto.
// var list=new Array();

// // Chiedi per 6 volte all’utente di inserire un numero,

// for (i=1; i<=6; i++){
//     var user_number = Number(prompt('insert a number'));
//     if (user_number % 2 !== 0){
//         list.push(user_number);
//     }


// }



// // se è dispari inseriscilo nell’array.
// document.getElementById('stampa').innerHTML= "I numeri presenti nella seguente Array sono dispari : "+list;


// ----------------- SNACK 6 --------------------
// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente. 

// var user_number = Number(prompt('Tell me a number'));

// var i = 0;
// while (i <= user_number) {
//     var risultato = Math.pow(i, 3);
//     var element = document.getElementById('stampa').innerHTML;
//     document.getElementById('stampa').innerHTML = element + "<li>" + risultato + "</li>";

//     i++;
// }

// ----------------- SNACK 8 --------------------

// Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero. 
var list = [];
var string_number = prompt('Tell me a 4-digit number');
var leng = string_number.length;

console.log(leng);

var somma = 0;
for (var i = 0; i <= leng; i++) {
    var user_number = Number(string_number.charAt(i));
    somma += user_number;


}

console.log(somma);


// var somma = 0;
// for (var i = 0; i <= list.length; i++) {
//     somma = somma + list[i];

// }
// console.log(risultato);




// controllo che il numero sia effettivamente di 4 cifre 
