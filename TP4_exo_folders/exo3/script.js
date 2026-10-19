"use strict"; // Mode strict : doit être la toute première instruction  

// Données "Students" : tableau de tableaux  
// Chaque ligne = [identifiant, prénom, nom, note, dernière valeur]
// La dernière valeur n'est pas utilisée : l'énoncé ne précise pas son rôle.
const Students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];

// Fonction B : un seul paramètre de type float (la note) et retourne un booléen  
function B(note) {
    // Opérateur de comparaison >= : true si la note est au moins 10  
    return note >= 10;
}

// Fonction A : appelée par onclick="A()" sur le bouton "Délibération", elle appelle B  
function A() {
    // Boucle for pour parcourir tous les étudiants  
    for (let i = 0; i < Students.length; i++) {
        const etudiant = Students[i]; // Accès à un élément par son indice  

        // Opérateur ternaire : ADMIS si B retourne true, sinon AJOURNÉ  
        const decision = B(etudiant[3]) ? "ADMIS" : "AJOURNÉ";

        // Affichage un par un avec console.log uniquement  
        console.log(etudiant[0] + ": " + decision);
    }
}
