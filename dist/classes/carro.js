"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classCarro_1 = __importDefault(require("../decoratos/classCarro"));
var decoradorMetodo_1 = require("../decoratos/decoradorMetodo");
var decoradorParametro_1 = require("../decoratos/decoradorParametro");
var Carro = /** @class */ (function () {
    function Carro(nome, marca) {
        this._nome = nome;
        this._marca = marca;
    }
    Carro.prototype.fazerBarulho = function (som) {
        return "vruuuuum";
    };
    Carro.prototype.toString = function () {
        return "Carro: Modelo: ".concat(this._nome, " Marca: ").concat(this._marca, " HP: 200cv\n   ");
    };
    __decorate([
        __param(0, decoradorParametro_1.decoradorParametro),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Carro.prototype, "fazerBarulho", null);
    __decorate([
        decoradorMetodo_1.decoradorMetodo,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Carro.prototype, "toString", null);
    Carro = __decorate([
        classCarro_1.default,
        __metadata("design:paramtypes", [String, String])
    ], Carro);
    return Carro;
}());
exports.default = Carro;
