"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moto = /** @class */ (function () {
    function Moto(data) {
        this._type = data.type;
        this._immat = data.immat;
        this._carburant = data.carburant;
        this._roue = data.roue;
        this._moteur = data.moteur;
        this._vitesse = data.vitesse;
    }
    Object.defineProperty(Moto.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Moto.prototype, "immat", {
        get: function () {
            return this._immat;
        },
        set: function (immat) {
            var allImmat = [];
            for (var _i = 0, immat_1 = immat; _i < immat_1.length; _i++) {
                var element = immat_1[_i];
                if (element >= 0 && element <= 20) {
                    allImmat.push(element);
                }
            }
            this._immat = allImmat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Moto.prototype, "carburant", {
        get: function () {
            return this._carburant;
        },
        set: function (carburant) {
            this._carburant = carburant;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Moto.prototype, "roue", {
        get: function () {
            return this._roue;
        },
        set: function (roue) {
            this._roue = roue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Moto.prototype, "moteur", {
        get: function () {
            return this._moteur;
        },
        set: function (moteur) {
            this._moteur = moteur;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Moto.prototype, "vitesse", {
        get: function () {
            return this._vitesse;
        },
        set: function (_vitesse) {
            this._vitesse = _vitesse;
        },
        enumerable: true,
        configurable: true
    });
    return Moto;
}());
exports.Moto = Moto;
