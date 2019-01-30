"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Camion = /** @class */ (function () {
    function Camion(data) {
        this._type = data.type;
        this._immat = data.immat;
        this._carburant = data.carburant;
        this._roue = data.roue;
        this._moteur = data.moteur;
        this._vitesse = data.vitesse;
        this._poids = data.poids;
    }
    Object.defineProperty(Camion.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camion.prototype, "immat", {
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
    Object.defineProperty(Camion.prototype, "carburant", {
        get: function () {
            return this._carburant;
        },
        set: function (carburant) {
            this._carburant = carburant;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camion.prototype, "roue", {
        get: function () {
            return this._roue;
        },
        set: function (roue) {
            this._roue = roue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camion.prototype, "moteur", {
        get: function () {
            return this._moteur;
        },
        set: function (moteur) {
            this._moteur = moteur;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camion.prototype, "vitesse", {
        get: function () {
            return this._vitesse;
        },
        set: function (_vitesse) {
            this._vitesse = _vitesse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camion.prototype, "poids", {
        set: function (_poids) {
            this._poids = _poids;
        },
        enumerable: true,
        configurable: true
    });
    return Camion;
}());
exports.Camion = Camion;
