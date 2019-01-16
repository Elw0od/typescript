import {Eleve} from './eleve.module';
import {Address} from './eleve.module';

let nombre_a: number;
let nombre_b: number;

let prenom: string;
let age: number;

function hello(prenom:string, age:number) : string {
    return "Mon prenom est " + prenom + "et j'ai " + age + "ans";
} 

let response = hello("Kevin", 24);
console.log(response);

let tableau : Array<string> = ["Julien", "Kevin", "Benoit"]

function hello_friend(tableau : Array<string>) : void {
    for(let pseudo in tableau ){
        let bonjour = "Bonjour " + tableau[pseudo] + " tu vas bien ?";
        console.log(bonjour);
    }
}

let resp = hello_friend(tableau);


/////////////////////////////////////////////////

let adresse = {
    'numero' : 11,
    'rue' : 'Rue des lilas',
    'ville' : 'Valence',
    'postal' : 82400,
};

function affiche_adresse(address : { numero:number, rue:string, ville:string, postal:string|number }) : void {
    console.log(`J'habite à cette adresse :${address.numero} ${address.rue}, ${address.ville}, ${address.postal}`)
}

affiche_adresse(adresse);

///////////////////////////////////////////

let eleve1Data = {
    "firstname" : 'Kevin',
    'age' : 24,
    'address' : [11,"Rue des lilas","82400","Valence d'Agen"],
    'note' : [18,15,14,14,19,-5,99]
  }
  let eleve1 = new Eleve(eleve1Data);
  console.log(eleve1.getInfo());
  console.log(eleve1.getMoyenne());
  console.log(eleve1.getNote());