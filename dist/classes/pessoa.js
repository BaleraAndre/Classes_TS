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
Object.defineProperty(exports, "__esModule", { value: true });
var decoradorPropriedade_1 = require("../decoratos/decoradorPropriedade");
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, enderecos, animais, carros, consoles) {
        if (enderecos.length === 0) {
            throw new Error("A pessoa deve ter pelo menos um endereço.");
        }
        this._nome = nome;
        this._idade = idade;
        this._enderecos = enderecos;
        this._animais = animais || [];
        this._carros = carros || [];
        this._consoles = consoles || [];
    }
    Pessoa.prototype.adicionarAnimal = function (animal) {
        if (!this._animais) {
            this._animais = [];
        }
        this._animais.push(animal);
    };
    Pessoa.prototype.removerAnimal = function (animal) {
        if (this._animais) {
            var index = this._animais.indexOf(animal);
            if (index !== -1) {
                this._animais.splice(index, 1);
            }
        }
    };
    Pessoa.prototype.adicionarCarro = function (carro) {
        if (!this._carros) {
            this._carros = [];
        }
        this._carros.push(carro);
    };
    Pessoa.prototype.removerCarro = function (carro) {
        if (this._carros) {
            var index = this._carros.indexOf(carro);
            if (index !== -1) {
                this._carros.splice(index, 1);
            }
        }
    };
    Pessoa.prototype.adicionarEndereco = function (endereco) {
        if (!this._enderecos) {
            this._enderecos = [];
        }
        this._enderecos.push(endereco);
    };
    Pessoa.prototype.removerEndereco = function (endereco) {
        if (this._enderecos) {
            var index = this._enderecos.indexOf(endereco);
            if (index !== -1) {
                this._enderecos.splice(index, 1);
            }
        }
    };
    Pessoa.prototype.adicionarConsole = function (console) {
        if (!this._consoles) {
            this._consoles = [];
        }
        this._consoles.push(console);
    };
    Pessoa.prototype.removerConsole = function (console) {
        if (this._consoles) {
            var index = this._consoles.indexOf(console);
            if (index !== -1) {
                this._consoles.splice(index, 1);
            }
        }
    };
    Pessoa.prototype.toString = function () {
        return "Nome: ".concat(this._nome, " Idade: ").concat(this._idade, "\n");
    };
    __decorate([
        decoradorPropriedade_1.decoradorPropriedade,
        __metadata("design:type", String)
    ], Pessoa.prototype, "_nome", void 0);
    __decorate([
        decoradorPropriedade_1.decoradorPropriedade,
        __metadata("design:type", Number)
    ], Pessoa.prototype, "_idade", void 0);
    return Pessoa;
}());
exports.default = Pessoa;
