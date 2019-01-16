export class Eleve{
    public _firstname : string;
    public _age : number;
    public _address : Address;
    public _note : Array<number>;
    public _languages : Array<string>;
    constructor(data){
      this.firstname = data.firstname;
      this.age = data.age;
      this.note = data.note;
      this.address = data.address;
}

get firstname(){
    return this._firstname
}

set firstname(firstname :string) {
    this._firstname = firstname;
}

get age(){
    return this._age
}
set age(age : number){
    this._age = age;
}

get address() {
    return this._address;
}

set address(address : Address) {
    this._address = address;
}

get note(){
    return this._note;
  }
  set note(note: Array<number>){
    let allNote = [];
    for(let element of note){
      if(element >= 0 && element <= 20) {
        allNote.push(element);
      }
    }
    this._note = allNote;
  }

  get languages(){
    return this._languages;
  }
  set languages(languages : Array<string>){
    this._languages = languages;
  }

  getInfo() : Array<string>{
    let info = []
    info['firstname'] = this.firstname;
    info['age'] = this.age;
    info['address'] = this.address;
    return info;
  }

  getMoyenne(){
    let note = this.note;
    let value : number = 0;
    let divided :number = this.note.length;
    for(let elements of note){
      value += elements
    }
    let result : number = value / divided
    return result
  }
  getNote(){
    let moyenne = this.getMoyenne();
    let note = this.note;
    note.push(moyenne);
    return note;
  }
}
export interface Address {
  rue : string;
  cp : number|string;
  ville: string;
  appartement? : string;
}
