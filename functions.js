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

// Funktion mit 2 Parametern, welche das Produkt berechnet
function berechneProdukt(a, b) {
  const produkt = a * b;
  console.log("Produkt von", a, "und", b, "ist:", produkt);
}

// Funktionsaufrufe mit verschiedenen Parametern
berechneProdukt(2, 3);
berechneProdukt(5, 10);
berechneProdukt(7, 4);

// functions.js
// Demonstration von Funktionen in JavaScript

// Funktion zur Umrechnung von Celsius in Fahrenheit
function celsiusZuFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  console.log(celsius + " Grad Celsius sind " + fahrenheit + " Grad Fahrenheit");
}

// Funktionsaufrufe mit verschiedenen Parametern
celsiusZuFahrenheit(0);
celsiusZuFahrenheit(20);
celsiusZuFahrenheit(37);
celsiusZuFahrenheit(100);

// Arrow-Funktion für Modulo
const modulo = (a, b) => {
  const result = a % b;
  console.log(a + " modulo " + b + " ist " + result);
};

// Funktionsaufrufe mit verschiedenen Parametern
modulo(10, 3);
modulo(15, 4);
modulo(21, 5);
