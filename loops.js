// loops.js
// Demonstration von Schleifen in JavaScript

// For-Schleife von 0 bis 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Schleife mit Zufallszahlen zwischen 1 und 10
// Verwendeter Schleifentyp: while-Schleife

let zufallsZahl;

while (true) {
  zufallsZahl = Math.floor(Math.random() * 10) + 1;
  console.log("Zufallszahl:", zufallsZahl);

  if (zufallsZahl > 8) {
    console.log("Zahl ist groesser als 8 - Schleife wird beendet.");
    break;
  }
}

// Array mit 5 Elementen
const zahlenArray = [10, 20, 30, 40, 50];


// Schleife zum Durchlaufen des Arrays
// Verwendeter Schleifentyp: for...of-Schleife


for (const zahl of zahlenArray) {
console.log("Array-Element:", zahl);
}