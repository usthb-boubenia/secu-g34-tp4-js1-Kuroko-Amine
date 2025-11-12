"use strict";

// vu dans le cours slide 38 les tableau
const TabEtu = ["Etudiant1", "Etudiant2", "Etudiant3"];

//vu dans le cours slide 39 les objet
const Etu = {
  nom: "John",
  prenom: "Doe",
  age: 30,
};

//vu dans le cours slide 40 les tableau d'objet
const Tabo = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 },
];

function f1() {
  for(let i=0; i<TabEtu.length; i++){
    console.log(TabEtu[i]);
  }
}

function f2() {
  console.log(Etu);
}

function f3() {
  //les boucles slides 44 
  for (let i = 0; i < Tabo.length; i++) {
    console.log(Tabo[i].nom + "-" + Tabo[i].prenom + "-" + Tabo[i].age);
  }
}