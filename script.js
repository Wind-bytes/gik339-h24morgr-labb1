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
    bara nås inom blocket, samma med const dock så är var i global scope.
*/

let number = "5"

console.log(number == 5);  // true, värde jämförelse
console.log(number === 5); // false, värde och typ jämförelse

console.log(NaN === NaN); // false, NaN är inte lika med något, inte ens sig själv
console.log(NaN == NaN);  // false
console.log(NaN == 5);    // false
console.log(NaN === 5);   // false
console.log(NaN == '5');  // false
console.log(NaN === '5'); // false

console.log(undefined == null);  // true, båda representerar "ingen värde"
console.log(undefined === null); // false, olika typer

console.log(undefined ? true : false) // false, undefined är falsy

// == gör typkonvertering medan === inte gör det.   === är en strikt jämförelse.

/*
    Typkonvertering sker med == operatorn, medan === kräver både värde och typ att strikt matcha varann.
    En typkonvertering är samma som att "casta" i C# t.ex (int)"5"
    När ett uttryck står för sig självt blir det en bool-check och uttrycket kommer returnera antingen true eller false.
    NaN står för "Not a number" och returnerar false om man järmför med allt som inte är ett nummer.
*/