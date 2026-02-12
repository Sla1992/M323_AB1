// arrays.js
// Demonstration von Listen (Arrays) in JavaScript

// Array mit 3 String-Elementen
const farben = ["Rot", "Gruen", "Blau"];

// Gesamtes Array ausgeben
console.log("Gesamte Liste:", farben);

// Einzelne Elemente ausgeben
console.log("Erstes Element:", farben[0]);
console.log("Zweites Element:", farben[1]);
console.log("Drittes Element:", farben[2]);

// Objekt zur Liste hinzufuegen
farben.push({
  name: "Gelb",
  hex: "#FFFF00",
  istPrimaerfarbe: true
});

// Aktualisierte Liste ausgeben
console.log("Liste nach Hinzufuegen eines Objekts:", farben);

// Das hinzugefuegte Objekt separat ausgeben
console.log("Neues Element (Objekt):", farben[3]);

// Erstes Element entfernen
const entferntesErstes = farben.shift();
console.log("Entferntes erstes Element:", entferntesErstes);

// Letztes Element entfernen
const entferntesLetztes = farben.pop();
console.log("Entferntes letztes Element:", entferntesLetztes);

// Liste nach dem Entfernen ausgeben
console.log("Liste nach dem Entfernen:", farben);
