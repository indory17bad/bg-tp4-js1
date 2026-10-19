"use strict"; // Mode strict : doit être la toute première instruction  

// Déclaration de variables constantes avec const  
const nom = "John";    // Type chaîne de caractères / String  
const prenom = "Doe";  // Type chaîne de caractères / String  
const age = 30;        // Type nombre / Number 
const note = 15;       // Type nombre / Number
const pi = 3.14;       // Nombre décimal / Number 

// Déclaration d'une fonction, appelée par onclick="f1()" dans index.html 
function f1() {
    console.log(nom); // Affichage dans la console 
}

function f2() {
    console.log(prenom); // Affichage dans la console 
}

function f3() {
    // Concaténation de chaînes avec l'opérateur +
    console.log(nom + "-" + prenom);
}

function f4() {
    console.log(age); // Affichage d'un nombre 
}

function f5() {
    console.log(note); // Affichage d'un nombre 
}

function f6() {
    console.log(pi); // Affichage d'un nombre décimal
}
