import Endereco from "./endereco";
import Carro from "./carro";
import Animal from "./animal";
import Console from "./console";

export default class Pessoa {
    private _nome: string;
    private _idade: number;
    private _enderecos: Endereco[]; 
    private _animais?: Animal[];  
    private _carros?: Carro[];   
    private _consoles?: Console[];   

    constructor(nome: string, idade: number, enderecos: Endereco[], animais?: Animal[], carros?: Carro[], consoles?: Console[]) {
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

    
    public adicionarAnimal(animal: Animal): void {
        if (!this._animais) {
            this._animais = [];
        }
        this._animais.push(animal);
    }

    public removerAnimal(animal: Animal): void {
        if (this._animais) {
            const index = this._animais.indexOf(animal);
            if (index !== -1) {
                this._animais.splice(index, 1);
            }
        }
    }

    public adicionarCarro(carro: Carro): void {
        if (!this._carros) {
            this._carros = [];
        }
        this._carros.push(carro);
    }

    public removerCarro(carro: Carro): void {
        if (this._carros) {
            const index = this._carros.indexOf(carro);
            if (index !== -1) {
                this._carros.splice(index, 1);
            }
        }
    }

    public adicionarEndereco(endereco: Endereco): void {
        if (!this._enderecos) {
            this._enderecos = [];
        }
        this._enderecos.push(endereco);
    }

    public removerEndereco(endereco: Endereco): void {
        if (this._enderecos) {
            const index = this._enderecos.indexOf(endereco);
            if (index !== -1) {
                this._enderecos.splice(index, 1);
            }
        }
    }

    public adicionarConsole(console: Console): void {
        if (!this._consoles) {
            this._consoles = [];
        }
        this._consoles.push(console);
    }

    public removerConsole(console: Console): void {
        if (this._consoles) {
            const index = this._consoles.indexOf(console);
            if (index !== -1) {
                this._consoles.splice(index, 1);
            }
        }
    }

    public toString(): string {
        return `Nome: ${this._nome}\nIdade: ${this._idade}\nEndereços: ${JSON.stringify(this._enderecos)}\nAnimais: ${JSON.stringify(this._animais)}\nCarros: ${JSON.stringify(this._carros)}\nConsoles: ${JSON.stringify(this._consoles)}`;
    }
}