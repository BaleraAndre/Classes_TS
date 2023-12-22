export function decoradorParametro(
    classPrototype: any,
    nomeMetodo: string,
    index: number,
): any {
    const metodoOriginal = classPrototype[nomeMetodo];

    classPrototype[nomeMetodo] = function (...args: any[]) {
        const valorDoParametro = args[index];
  
        if (typeof valorDoParametro === 'string' && valorDoParametro.length <= 6) {
            throw new Error(`O valor do parâmetro na posição ${index} deve ter mais de 6 caracteres.`);
        }
        return metodoOriginal.apply(this, args);
    };
}