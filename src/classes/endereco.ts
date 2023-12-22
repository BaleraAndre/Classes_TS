import classEndereco from "../decoratos/classEndereco";
import { decoradorMetodo } from "../decoratos/decoradorMetodo";

@classEndereco
export default class Endereco{    


    private _rua : string ;
    private _bairro : string;
    private _numero: string;
    
    constructor(rua : string , bairro:string , numero:string ){
        this._rua = rua;
        this._bairro = bairro;
        this._numero = numero;
    }

    @decoradorMetodo
    public toString(): string {
        return `Endereco: Rua: ${this._rua} Bairro: ${this._bairro} Numero: ${this._numero}\n   `;
    }

    
    }