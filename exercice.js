"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eleve_module_1 = require("./eleve.module");
var nombre_a;
var nombre_b;
var prenom;
var age;
function hello(prenom, age) {
    return "Mon prenom est " + prenom + "et j'ai " + age + "ans";
}
var response = hello("Kevin", 24);
console.log(response);
var tableau = ["Julien", "Kevin", "Benoit"];
function hello_friend(tableau) {
    for (var pseudo in tableau) {
        var bonjour = "Bonjour " + tableau[pseudo] + " tu vas bien ?";
        console.log(bonjour);
    }
}
var resp = hello_friend(tableau);
/////////////////////////////////////////////////
var adresse = {
    'numero': 11,
    'rue': 'Rue des lilas',
    'ville': 'Valence',
    'postal': 82400,
};
function affiche_adresse(address) {
    console.log("J'habite \u00E0 cette adresse :" + address.numero + " " + address.rue + ", " + address.ville + ", " + address.postal);
}
affiche_adresse(adresse);
///////////////////////////////////////////
var eleve1Data = {
    "firstname": 'Kevin',
    'age': 24,
    'address': [11, "Rue des lilas", "82400", "Valence d'Agen"],
    'note': [18, 15, 14, 14, 19, -5, 99]
};
var eleve1 = new eleve_module_1.Eleve(eleve1Data);
console.log(eleve1.getInfo());
console.log(eleve1.getMoyenne());
console.log(eleve1.getNote());
