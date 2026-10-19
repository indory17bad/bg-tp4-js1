"use strict"; // Mode strict : doit être la toute première instruction  

// Fonction appelée par le bouton "Tableau Etudiants" (onclick dans index.html)  
function f1() {
    // Déclaration d'un tableau (Array)  
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Boucle for pour parcourir le tableau, avec sa propriété length  
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]); // Accès à un élément par son indice  
    }
}

// Fonction appelée par le bouton "Objet Etudiant"  
function f2() {
    // Déclaration d'un objet littéral avec des propriétés nom, prenom, age  
    const etudiant = { nom: "John", prenom: "DOE", age: 30 };

    console.log(etudiant); // Affiche l'objet entier dans la console  
}

// Fonction appelée par le bouton "Tableau d'objets Etudiants"  
function f3() {
    // Tableau d'objets : chaque élément du tableau est un objet  
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Boucle for pour parcourir le tableau  
    for (let i = 0; i < etudiants.length; i++) {
        const e = etudiants[i]; // Variable locale à la boucle  
        // Accès aux propriétés d'un objet avec la notation point + concaténation  
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}
