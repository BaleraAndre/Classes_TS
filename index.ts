interface Pessoa<T> {
    nome: string;
    idade: T;
    endereco: {
      rua: string;
      cidade: string;
    };
  }
  
  class Gerenciador<T> {
    private itens: T[] = [];
  
    adicionarItem(item: T): void {
      this.itens.push(item);
    }

    removerItem(condicao: (item: T) => boolean): void {
      this.itens = this.itens.filter((item) => !condicao(item));
    }
  
    obterItens(): T[] {
      return this.itens;
    }
  
    calcularMedia<A extends number>(getValorNumerico: (item: T) => A): number {
      if (this.itens.length === 0) {
        return 0;
      }
  
      const somaValores = this.itens.reduce((soma, item) => soma + getValorNumerico(item), 0);
      return somaValores / this.itens.length;
    }
  }
  
  const gerenciador = new Gerenciador<Pessoa<number>>();
  
  const pessoa1: Pessoa<number> = {
    nome: 'Andre',
    idade: 28,
    endereco: {
      rua: 'Alameda',
      cidade: 'jacarei',
    },
  };
  
  const pessoa2: Pessoa<number> = {
    nome: 'Adriano',
    idade: 30,
    endereco: {
      rua: 'alameda',
      cidade: 'SP',
    },
  };
  
  gerenciador.adicionarItem(pessoa1);
  gerenciador.adicionarItem(pessoa2);
  
  console.log('Pessoas:', gerenciador.obterItens());
  console.log('Média de Idade:', gerenciador.calcularMedia((pessoa) => pessoa.idade));
  
  gerenciador.removerItem((pessoa) => pessoa.nome === 'Adriano');
  console.log('Pessoas após remoção:', gerenciador.obterItens());
  console.log('Média de Idade após remoção:', gerenciador.calcularMedia((pessoa) => pessoa.idade));