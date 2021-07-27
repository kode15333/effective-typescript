export {};

declare function cacheLast<T extends Function>(fn: T): T;

declare function shallowEqual(a: any, b: any): boolean;

// 타입을 단언하는 것은 함수 안쪽에서 함수의 시그니처는 타입을 명확히 정해주자
function cacheLast<T extends Function>(fn: T): T {
    let lastArgs: any[] | null = null;
    let lastResult: any;
    return function (...args: any[]) {
        if (!lastArgs || !shallowEqual(lastArgs, args)) {
            lastResult = fn(...args);
            lastArgs = args;
        }
        return lastResult;
    } as unknown as any;
}

declare function shallowObjectEqual<T extends object>(a: T, b: T): boolean;

function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
    for (const [k, aVal] of Object.entries(a)) {
        if (!(k in b) || aVal !== (b as any)[k]) {
            return false;
        }
    }

    return Object.keys(a).length === Object.keys(b).length;
}
