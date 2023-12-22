export  default function classAnimal<t extends new (...args: any[]) => any>(target: any): any {
    return class extends target {
        
       
        nome: string;
        raca: string;


        constructor(...args: any[]) {
            super(...args);
            this.nome = this.separar(args[0]);
            this.raca = this.separar(args[1]);


        }
         
        separar(valor: string): string {
            return valor.split("").toString();
        }



    };
}

