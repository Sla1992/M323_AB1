// primitive_datatypes.js
// Demonstration der primitiven Datentypen in JavaScript

// 1. Number
let alter = 25;
let pi = 3.14159;
let temperatur = -4.5; // weitere Number-Variable

// 2. String
let name = "Max Mustermann";

// Zusaetzliche String-Variable
let begruessung = "Hallo Sladjan";
console.log("Begruessung:", begruessung);

// 3. Boolean
let istStudent = true;
let hatBestanden = false; // weitere Boolean-Variable

// 4. Undefined
let nichtDefiniert;
let nochNichtGesetzt = undefined; // explizit undefined gesetzt

// 5. Null
let absichtlichLeer = null;

// 6. BigInt
let grosseZahl = 1234567890123456789012345678901234567890n;

// 7. Symbol
let eindeutigeID = Symbol("id");

// 8. Verwendung von var und dynamische Typisierung
var dynamischeVariable = "Ich bin ein String";
console.log("var (String):", dynamischeVariable, "| Typ:", typeof dynamischeVariable);

dynamischeVariable = true;
console.log("var (Boolean):", dynamischeVariable, "| Typ:", typeof dynamischeVariable);

// Ausgabe der Werte und ihrer Datentypen
console.log("Number (alter):", alter, "| Typ:", typeof alter);
console.log("Number (pi):", pi, "| Typ:", typeof pi);
console.log("Number (temperatur):", temperatur, "| Typ:", typeof temperatur);

console.log("Boolean (istStudent):", istStudent, "| Typ:", typeof istStudent);
console.log("Boolean (hatBestanden):", hatBestanden, "| Typ:", typeof hatBestanden);

console.log("Undefined (nichtDefiniert):", nichtDefiniert, "| Typ:", typeof nichtDefiniert);
console.log("Undefined (nochNichtGesetzt):", nochNichtGesetzt, "| Typ:", typeof nochNichtGesetzt);

console.log("Null:", absichtlichLeer, "| Typ:", typeof absichtlichLeer);
console.log("BigInt:", grosseZahl, "| Typ:", typeof grosseZahl);
console.log("Symbol:", eindeutigeID, "| Typ:", typeof eindeutigeID);
