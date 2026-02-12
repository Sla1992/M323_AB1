// control_structures.js
// Demonstration von Kontrollstrukturen in JavaScript

// Zufallszahl zwischen 0 und 1 erzeugen
const zufallsZahl = Math.random();
console.log("Zufallszahl:", zufallsZahl);

// Kontrollstruktur: if / else if / else
if (zufallsZahl > 0.5) {
  console.log("Groesser als 0.5");
}

// Zweite Aufgabe: Ganzzahlige Zufallszahl zwischen 0 und 4
const zufallsGanzzahl = Math.floor(Math.random() * 5);
console.log("Ganzzahlige Zufallszahl:", zufallsGanzzahl);

// Kontrollstruktur: switch
switch (zufallsGanzzahl) {
  case 1:
    console.log("Der Wert der Zahl ist exakt 1");
    break;
  case 3:
    console.log("Der Wert der Zahl ist exakt 3");
    break;
  default:
    console.log("Der Wert der Zahl ist weder 1 noch 3");
}

