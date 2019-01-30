"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var voiture_module_1 = require("./typeVehicule/voiture.module");
var voiture = {
    "type": 'Scenic',
    'immat': 456567566,
    'carburant': [11, "Litres"]
};
var voiture1 = new voiture_module_1.Voiture(voiture);
console.log(voiture1.type());
console.log(voiture1.immat());
console.log(voiture1.carburant());
