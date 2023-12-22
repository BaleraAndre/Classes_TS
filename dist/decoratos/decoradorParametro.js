"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decoradorParametro = void 0;
function decoradorParametro(classPrototype, nomeMetodo, index) {
    var metodoOriginal = classPrototype[nomeMetodo];
    classPrototype[nomeMetodo] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var valorDoParametro = args[index];
        if (typeof valorDoParametro === 'string' && valorDoParametro.length <= 6) {
            throw new Error("O valor do par\u00E2metro na posi\u00E7\u00E3o ".concat(index, " deve ter mais de 6 caracteres."));
        }
        return metodoOriginal.apply(this, args);
    };
}
exports.decoradorParametro = decoradorParametro;
