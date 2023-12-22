import classCarro from "../decoratos/classCarro"
import { decoradorMetodo } from "../decoratos/decoradorMetodo";
import { decoradorParametro } from "../decoratos/decoradorParametro";

@classCarro
export default class Carro{    


private _nome : string ;
private _marca : string;


constructor(nome : string , marca:string){
    this._nome = nome;
    this._marca = marca;
}

public fazerBarulho(@decoradorParametro som:string){
    return "vruuuuum";
}

@decoradorMetodo
public toString(): string {
    return `Carro: Modelo: ${this._nome} Marca: ${this._marca} HP: 200cv\n   `;
}

}