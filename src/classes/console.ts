import classConsole from "../decoratos/classConsole"
import { decoradorMetodo } from "../decoratos/decoradorMetodo";

@classConsole
export default class Console{    


    private _nome : string ;
    private _marca : string;
    
    constructor(nome : string , marca:string){
        this._nome = nome;
        this._marca = marca;
    }
    
    @decoradorMetodo
    public toString(): string {
        return `Console: Modelo: ${this._nome} Marca: ${this._marca}\n `;
    }
    
    }