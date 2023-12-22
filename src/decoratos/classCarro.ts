export default function classCarro<t extends new (...args: any[]) => any>(target:any):any{
    return class extends target{
        modelo: string;
        marca: string;
        hp = this.separar("200cv");
        

        constructor(...args:any[]){
            super(...args);
            this.modelo = this.separar(args[0]);
            this.marca = this.separar(args[1]);
            
            
        }


        separar(valor:string): string {
            return valor.split("").toString();
        }

        

    }
}