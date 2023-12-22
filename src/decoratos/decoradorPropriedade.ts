export function decoradorPropriedade(classPrototype: any, nome: string): any {
    
  let valorPropriedade : any;
  return {
    get: () => valorPropriedade,
    set:(valor:any) => {
      valorPropriedade = valor.split('').reverse().join('');
    },
  };
    
  

  }