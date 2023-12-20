"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, idade, enderecos, animais, carros, consoles) {
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
    adicionarAnimal(animal) {
        if (!this._animais) {
            this._animais = [];
        }
        this._animais.push(animal);
    }
    removerAnimal(animal) {
        if (this._animais) {
            const index = this._animais.indexOf(animal);
            if (index !== -1) {
                this._animais.splice(index, 1);
            }
        }
    }
    adicionarCarro(carro) {
        if (!this._carros) {
            this._carros = [];
        }
        this._carros.push(carro);
    }
    removerCarro(carro) {
        if (this._carros) {
            const index = this._carros.indexOf(carro);
            if (index !== -1) {
                this._carros.splice(index, 1);
            }
        }
    }
    adicionarEndereco(endereco) {
        if (!this._enderecos) {
            this._enderecos = [];
        }
        this._enderecos.push(endereco);
    }
    removerEndereco(endereco) {
        if (this._enderecos) {
            const index = this._enderecos.indexOf(endereco);
            if (index !== -1) {
                this._enderecos.splice(index, 1);
            }
        }
    }
    adicionarConsole(console) {
        if (!this._consoles) {
            this._consoles = [];
        }
        this._consoles.push(console);
    }
    removerConsole(console) {
        if (this._consoles) {
            const index = this._consoles.indexOf(console);
            if (index !== -1) {
                this._consoles.splice(index, 1);
            }
        }
    }
    toString() {
        return `Nome: ${this._nome}\nIdade: ${this._idade}\nEndereços: ${JSON.stringify(this._enderecos)}\nAnimais: ${JSON.stringify(this._animais)}\nCarros: ${JSON.stringify(this._carros)}\nConsoles: ${JSON.stringify(this._consoles)}`;
    }
}
exports.default = Pessoa;
