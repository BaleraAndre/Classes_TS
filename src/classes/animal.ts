import decorators from "../decoratos/classAnimal";
import { decoradorMetodo } from "../decoratos/decoradorMetodo";
import { decoradorPropriedade } from "../decoratos/decoradorPropriedade";
import { decoradorParametro } from "../decoratos/decoradorParametro";

@decorators
export default class Animal{    

    @decoradorPropriedade
    private _nome : string ;
    private _raca : string;
    

    public constructor(nome : string  , raca:string){
        this._nome = nome;
        this._raca = raca;
    }

    public fazerBarulho(@decoradorParametro som:string){
        return som;
    }

    @decoradorMetodo
    public toString(): string {
        return `Animal: Nome: ${this._nome} Raça: ${this._raca}\n  `;
    }

    }