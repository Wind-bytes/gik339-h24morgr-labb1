{
    let Hello = 1;
    var World = 1;
    const foo = 1;
}

console.log(typeof Hello);
console.log(typeof World);
console.log(typeof foo);

/*
    Alla loggar "undefined" såvida de inte är tilldelade ett värde. Dock om har ett värde så fungerar de som förväntat, let kan
    bara nås inom blocket, samma med const. Var fungerar dock i global scope, dvs. vart som helst i dokumentet.
*/

console.log('5' == 5);               // True, värde jämförelse
console.log('5' === 5);              // False, värde och typ jämförelse

console.log("Start av NaN bool-checkar")
console.log(NaN === NaN);            // False, NaN är inte lika med något, inte ens sig själv, förutom jämförelsen om NaN inte är lika med ett nummer, vilket är sant.
console.log(NaN == NaN);             // False
console.log(NaN == 5);               // False
console.log(NaN === 5);              // False
console.log(NaN == '5');             // False
console.log(NaN === '5');            // False
console.log(NaN != '5')              // True "Inte ett nummer är inte lika med ett nummer" --> Sant.
console.log(NaN !== '5')             // True "Inte ett nummer är inte lika med ett nummer" --> Sant.
console.log("Slutet på NaN bool-checkar")


console.log(undefined == null);         // True, båda representerar "ingen värde"
console.log(undefined === null);        // False, undefined-typen är inte samma som null-typen.

console.log(undefined ? true : false)   // False, undefined är inte true.

// == gör typkonvertering medan === gör en strikt jämförelse mellan både typ och värde.

/*
    Typkonvertering sker med == operatorn, medan === kräver både värde och typ att strikt matcha varann.
    En typkonvertering är samma som att "casta" i C# t.ex (int)"5" --> strängen 5 blir konverterad till en interger.

    När ett uttryck står för sig självt blir det en bool-check och uttrycket kommer returnera antingen true eller false.

    NaN står för "Not a number" och returnerar false för alla typer av booliska jämförelser, med ett undantag som demonstreras ovan.
    undefined står för "odefinierad" och menar på att det saknas ett värde.
    null står för "inget" och är ett tomt värde.
    Skillnaden mellan undefined och null är att null kan användas med avsikt och undefined är oftast returnerat då man gjort ett misstag och inte använt variabelvärdestilldelning korrekt.
*/

//console.log(greet(name)) // Kastar ett ReferenceError  error-meddelande.

function greet(name) {
    return `Hej ${name}`
}

console.log(greet("på dig")) // Returnerar "Hej på dig"
console.log(greet()) // Returnerar "Hej undefined"

//console.log(greet(name)) // Kastar ett ReferenceError  error-meddelande.

let name = "på mig"

console.log(greet(name)) // Returnerar "Hej på mig"

/*
    Funktionsdeklaration ( funktionen den som demonstreras ovan som greet(name) ) läses in innan koden körs lika som med variabler mm.
    De är enkla att tyda och förstå sig på och används ofta i objekt orienterad programmering för dess simplicitet.
    Jag valde denna då den är simplast och simpelt är oftast bäst.
*/

/*
    Arrowfunktioner eller "lambda expressions" skapas som:
    const greet = (name) => {
    return "Hej " + name;
    };

    Och kan även skapas på en rad:
    const greet = name => "Hej " + name;
    
    Dessa funktioner skapas dynamiskt då de exekveras i programmet.
*/

/*
    Funktionsuttryck skapas som:
    const greet = function(name) {
    return "Hej " + name;
    };

    Funktionsuttryck är nära lika funktionsdeklaration och är också tydliga samt enkla att förstå sig på.
    Det är ett värde som innehåller en funktion.
    Den är inte tillgänglig förens exekvering, dvs. programmet måste nå den i körtid innan den kan användas.

*/