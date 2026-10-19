"use strict"; // Mode strict : doit être la toute première instruction (vu dans le slide __)

// Déclaration de variables constantes avec const (vu dans le slide __)
const nom = "John";    // Type chaîne de caractères / String (vu dans le slide __)
const prenom = "Doe";  // Type chaîne de caractères / String (vu dans le slide __)
const age = 30;        // Type nombre / Number (vu dans le slide __)
const note = 15;       // Type nombre / Number (vu dans le slide __)
const pi = 3.14;       // Nombre décimal / Number (vu dans le slide __)

// Déclaration d'une fonction, appelée par onclick="f1()" dans index.html (vu dans le slide __)
function f1() {
    console.log(nom); // Affichage dans la console (vu dans le slide __)
}

function f2() {
    console.log(prenom); // Affichage dans la console (vu dans le slide __)
}

function f3() {
    // Concaténation de chaînes avec l'opérateur + (vu dans le slide __)
    console.log(nom + "-" + prenom);
}

function f4() {
    console.log(age); // Affichage d'un nombre (vu dans le slide __)
}

function f5() {
    console.log(note); // Affichage d'un nombre (vu dans le slide __)
}

function f6() {
    console.log(pi); // Affichage d'un nombre décimal (vu dans le slide __)
}
