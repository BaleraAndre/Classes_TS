"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decoradorPropriedade = void 0;
function decoradorPropriedade(classPrototype, nome) {
    var valorPropriedade;
    return {
        get: function () { return valorPropriedade; },
        set: function (valor) {
            valorPropriedade = valor.split('').reverse().join('');
        },
    };
}
exports.decoradorPropriedade = decoradorPropriedade;
