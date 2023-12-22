export default function classEndereco<t extends new (...args: any[]) => any>(target:any):any{
    return class extends target{
        rua: string;
        bairro: string;
        numero:string
        

        constructor(...args:any[]){
            super(...args);
            this.rua = this.separar(args[0]);
            this.bairro = this.separar(args[1]);
            this.numero = this.separar(args[2].toString());
            
        }

        separar(valor:string): string {
            return valor.split("").toString();
        }

    }
}

