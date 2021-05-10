

// 1A
// Da mettere in una sottocartella nella repo della volta scorsa js-jsnacks-blocco-1
// 1a:
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

/*
var Palla = {
    nome: 'palla',
    peso: 10,
};

console.log(Palla);

*/

//1B
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

/*
var Palla = {
    nome: 'palla',
    peso: 10,
};

console.log(Palla);
userWeight = Number(prompt('Scrivi il peso della palla'));
Palla['peso'] = userWeight;
console.log(Palla);
*/


//SNACK 2
// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.

var triangolo = {
    base: 10,
    altezza: 30,

}

triangolo.ipotenusa = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2));

console.log(triangolo);

function snackFunction() {
    var perimetro = 0;
    for (var key in triangolo) {
        perimetro += triangolo[key];

    };
    return perimetro
}

// function snackFunction() {
//     return perimetro = triangolo.base + triangolo.altezza + triangolo.ipotenusa;
// }



triangolo.perimetro = snackFunction();

console.log(triangolo);


triangolo.area = (triangolo.base * triangolo.altezza) / 2;

console.log(triangolo);