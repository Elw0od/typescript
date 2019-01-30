export class Camion {
    public _type : string;
    public _immat : Array<number>;
    public _carburant : number;
    public _roue : number;
    public _moteur : string;
    public _vitesse : number;
    public _poids : number;

    constructor(data) {
        this._type = data.type;
        this._immat = data.immat;
        this._carburant = data.carburant;
        this._roue = data.roue;
        this._moteur = data.moteur;
        this._vitesse = data.vitesse;
        this._poids = data.poids;
    }


    get type(){
        return this._type;
    }
    
    set type(type :string) {
        this._type = type;
    }

    get immat(){
        return this._immat;
    }
    set immat(immat: Array<number>){
        let allImmat = [];
        for(let element of immat){
          if(element >= 0 && element <= 20) {
            allImmat.push(element);
          }
        }
        this._immat = allImmat;
    }

    get carburant(){
        return this._carburant;
    }
    
    set carburant(carburant :number) {
        this._carburant = carburant;
    }

    get roue(){
        return this._roue;
    }
    
    set roue(roue :number) {
        this._roue = roue;
    }

    get moteur(){
        return this._moteur;
    }
    
    set moteur(moteur :string) {
        this._moteur = moteur;
    }

    get vitesse(){
        return this._vitesse;
    }
    
    set vitesse(_vitesse :number) {
        this._vitesse = _vitesse;
    }

    set poids(_poids : number) {
        this._poids = _poids;
    }
    
}