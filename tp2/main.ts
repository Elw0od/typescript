import {Voiture} from './typeVehicule/voiture.module';
import {Moto} from './typeVehicule/moto.module';
import {Camion} from './typeVehicule/camion.module';

let voiture = {
    "type" : 'Scenic',
    'immat' : 456_567_566,
    'carburant' : [11,"Litres"]
  }
  let voiture1 = new Voiture(voiture);
  console.log(voiture1.type());
  console.log(voiture1.immat());
  console.log(voiture1.carburant());