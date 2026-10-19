"use strict"; // Mode strict : doit être la toute première instruction (vu dans le slide __)

// Fonction appelée par le bouton "Tableau Etudiants" (onclick dans index.html) (vu dans le slide __)
function f1() {
    // Déclaration d'un tableau (Array) (vu dans le slide __)
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Boucle for pour parcourir le tableau, avec sa propriété length (vu dans le slide __)
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]); // Accès à un élément par son indice (vu dans le slide __)
    }
}

// Fonction appelée par le bouton "Objet Etudiant" (vu dans le slide __)
function f2() {
    // Déclaration d'un objet littéral avec des propriétés nom, prenom, age (vu dans le slide __)
    const etudiant = { nom: "John", prenom: "DOE", age: 30 };

    console.log(etudiant); // Affiche l'objet entier dans la console (vu dans le slide __)
}

// Fonction appelée par le bouton "Tableau d'objets Etudiants" (vu dans le slide __)
function f3() {
    // Tableau d'objets : chaque élément du tableau est un objet (vu dans le slide __)
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Boucle for pour parcourir le tableau (vu dans le slide __)
    for (let i = 0; i < etudiants.length; i++) {
        const e = etudiants[i]; // Variable locale à la boucle (vu dans le slide __)
        // Accès aux propriétés d'un objet avec la notation point + concaténation (vu dans le slide __)
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}
