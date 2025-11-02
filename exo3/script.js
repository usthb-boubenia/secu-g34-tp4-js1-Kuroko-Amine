"use strict";

// (Slide 18) Déclaration d’un tableau d’objets représentant les étudiants
const students = [
  {
    id: 1000,
    firstName: "JOHN",
    lastName: "DOE",
    note1: 14,
    note2: 5,
  },
  {
    id: 2000,
    firstName: "BOB",
    lastName: "CARLTON",
    note1: 7,
    note2: 1,
  },
  {
    id: 3000,
    firstName: "RAYANE",
    lastName: "SMITH",
    note1: 13,
    note2: 3,
  }
];

// (slide 28) fonction de délibération
function deliberation() {
  // (slide 33) boucle for...of pour parcourir le tableau
  for (const student of students) {
    const moyenne = (student.note1 + student.note2) / 2 + 5; 
    const passed = verifierNote(moyenne);

    // (slide 40) affichage selon le résultat
    if (passed) {
      console.log(`${student.id} : Admis `);
    } else {
      console.log(`${student.id} : Ajourné `);
    }
  }
}

// (slide 31) fonction avec paramètre et retour de valeur
// (slide 37) condition simple
function verifierNote(moyenne) {
  return moyenne >= 10;
}