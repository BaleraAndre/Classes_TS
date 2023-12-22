"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decoradorMetodo = void 0;
function decoradorMetodo(target, nomeMetodo, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
exports.decoradorMetodo = decoradorMetodo;
