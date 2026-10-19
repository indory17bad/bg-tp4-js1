"use strict"; 


const Students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];


function B(note) {
    
    return note >= 10;
}


function A() {
    
    for (let i = 0; i < Students.length; i++) {
        const etudiant = Students[i]; 

        const decision = B(etudiant[3]) ? "ADMIS" : "AJOURNÉ";

        console.log(etudiant[0] + ": " + decision);
    }
}
