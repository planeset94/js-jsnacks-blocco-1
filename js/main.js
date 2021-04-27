// L’utente inserisce due parole in successione, con due prompt.
var parola_1= prompt('Insierisci una parola');
var parola_2= prompt('Insierisci un\'altra parola');

console.log(parola_1);
console.log(parola_2);

// Il software stampa prima la parola più corta, poi la parola più lunga.
var lunghezza_1;
var lunghezza_2;

lunghezza_1=parola_1.length;
lunghezza_2=parola_2.length;




switch (true){
    case lunghezza_1 < lunghezza_2:
        console.log('prima parola: ' +lunghezza_1);
        console.log('seconda parola: ' +lunghezza_2);

    break;

    case lunghezza_1 > lunghezza_2:
        console.log('seconda parola: ' +lunghezza_2);
        console.log('prima parola: ' +lunghezza_1);

    break;
}

