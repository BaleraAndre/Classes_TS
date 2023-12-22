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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classEndereco_1 = __importDefault(require("../decoratos/classEndereco"));
var decoradorMetodo_1 = require("../decoratos/decoradorMetodo");
var Endereco = /** @class */ (function () {
    function Endereco(rua, bairro, numero) {
        this._rua = rua;
        this._bairro = bairro;
        this._numero = numero;
    }
    Endereco.prototype.toString = function () {
        return "Endereco: Rua: ".concat(this._rua, " Bairro: ").concat(this._bairro, " Numero: ").concat(this._numero, "\n   ");
    };
    __decorate([
        decoradorMetodo_1.decoradorMetodo,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Endereco.prototype, "toString", null);
    Endereco = __decorate([
        classEndereco_1.default,
        __metadata("design:paramtypes", [String, String, String])
    ], Endereco);
    return Endereco;
}());
exports.default = Endereco;
