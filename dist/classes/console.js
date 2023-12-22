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
var classConsole_1 = __importDefault(require("../decoratos/classConsole"));
var decoradorMetodo_1 = require("../decoratos/decoradorMetodo");
var Console = /** @class */ (function () {
    function Console(nome, marca) {
        this._nome = nome;
        this._marca = marca;
    }
    Console.prototype.toString = function () {
        return "Console: Modelo: ".concat(this._nome, " Marca: ").concat(this._marca, "\n ");
    };
    __decorate([
        decoradorMetodo_1.decoradorMetodo,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Console.prototype, "toString", null);
    Console = __decorate([
        classConsole_1.default,
        __metadata("design:paramtypes", [String, String])
    ], Console);
    return Console;
}());
exports.default = Console;
