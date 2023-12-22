export function decoradorMetodo(
    target: any,
    nomeMetodo: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): any {
        const result = originalMethod.apply(this, args);

        if (typeof result === 'string') {
            return result.toUpperCase();
        }

        return result;
    };

    return descriptor;
}