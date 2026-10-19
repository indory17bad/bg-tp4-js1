"use strict"; // Mode strict : doit être la toute première instruction (vu dans le slide __)

// Données "Students" : tableau de tableaux (vu dans le slide __)
// Chaque ligne = [identifiant, prénom, nom, note, dernière valeur]
// La dernière valeur n'est pas utilisée : l'énoncé ne précise pas son rôle.
const Students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];

// Fonction B : un seul paramètre de type float (la note) et retourne un booléen (vu dans le slide __)
function B(note) {
    // Opérateur de comparaison >= : true si la note est au moins 10 (vu dans le slide __)
    return note >= 10;
}

// Fonction A : appelée par onclick="A()" sur le bouton "Délibération", elle appelle B (vu dans le slide __)
function A() {
    // Boucle for pour parcourir tous les étudiants (vu dans le slide __)
    for (let i = 0; i < Students.length; i++) {
        const etudiant = Students[i]; // Accès à un élément par son indice (vu dans le slide __)

        // Opérateur ternaire : ADMIS si B retourne true, sinon AJOURNÉ (vu dans le slide __)
        const decision = B(etudiant[3]) ? "ADMIS" : "AJOURNÉ";

        // Affichage un par un avec console.log uniquement (vu dans le slide __)
        console.log(etudiant[0] + ": " + decision);
    }
}
