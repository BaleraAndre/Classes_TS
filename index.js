var Gerenciador = /** @class */ (function () {
    function Gerenciador() {
        this.itens = [];
    }
    Gerenciador.prototype.adicionarItem = function (item) {
        this.itens.push(item);
    };
    Gerenciador.prototype.removerItem = function (condicao) {
        this.itens = this.itens.filter(function (item) { return !condicao(item); });
    };
    Gerenciador.prototype.obterItens = function () {
        return this.itens;
    };
    Gerenciador.prototype.calcularMedia = function (getValorNumerico) {
        if (this.itens.length === 0) {
            return 0;
        }
        var somaValores = this.itens.reduce(function (soma, item) { return soma + getValorNumerico(item); }, 0);
        return somaValores / this.itens.length;
    };
    return Gerenciador;
}());
var gerenciador = new Gerenciador();
var pessoa1 = {
    nome: 'Andre',
    idade: 28,
    endereco: {
        rua: 'Alameda',
        cidade: 'jacarei',
    },
};
var pessoa2 = {
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
console.log('Média de Idade:', gerenciador.calcularMedia(function (pessoa) { return pessoa.idade; }));
gerenciador.removerItem(function (pessoa) { return pessoa.nome === 'Adriano'; });
console.log('Pessoas após remoção:', gerenciador.obterItens());
console.log('Média de Idade após remoção:', gerenciador.calcularMedia(function (pessoa) { return pessoa.idade; }));
