"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eleve = /** @class */ (function () {
    function Eleve(data) {
        this.firstname = data.firstname;
        this.age = data.age;
        this.note = data.note;
        this.address = data.address;
    }
    Object.defineProperty(Eleve.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (firstname) {
            this._firstname = firstname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "note", {
        get: function () {
            return this._note;
        },
        set: function (note) {
            var allNote = [];
            for (var _i = 0, note_1 = note; _i < note_1.length; _i++) {
                var element = note_1[_i];
                if (element >= 0 && element <= 20) {
                    allNote.push(element);
                }
            }
            this._note = allNote;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "languages", {
        get: function () {
            return this._languages;
        },
        set: function (languages) {
            this._languages = languages;
        },
        enumerable: true,
        configurable: true
    });
    Eleve.prototype.getInfo = function () {
        var info = [];
        info['firstname'] = this.firstname;
        info['age'] = this.age;
        info['address'] = this.address;
        return info;
    };
    Eleve.prototype.getMoyenne = function () {
        var note = this.note;
        var value = 0;
        var divided = this.note.length;
        for (var _i = 0, note_2 = note; _i < note_2.length; _i++) {
            var elements = note_2[_i];
            value += elements;
        }
        var result = value / divided;
        return result;
    };
    Eleve.prototype.getNote = function () {
        var moyenne = this.getMoyenne();
        var note = this.note;
        note.push(moyenne);
        return note;
    };
    return Eleve;
}());
exports.Eleve = Eleve;
