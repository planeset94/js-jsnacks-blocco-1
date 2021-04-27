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
var numero=new Array();
var i;

for (i=0; i<10; i++){
       numero.push(Number(prompt('Insert a number')));
      
}

console.log(numero);









// Il programma stampa la somma di tutti i numeri inseriti. 