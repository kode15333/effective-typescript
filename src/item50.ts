// function double(x) {
//     return x + x;
// }

function double(x: number | string): number | string;
function double(x: any) {
    return x + x;
}

const num = double(12);
const str = double("x");

function double2<T extends number | string>(x: T): T;
function double2(x: any) {
    return x + x;
}

const num2 = double2(12);
const str2 = double2("x");

function double3(x: number): number;
function double3(x: string): string;
function double3(x: any) {
    return x + x;
}

function f(x: number | string) {
    return double3(x);
}

function double4<T extends number | string>(
    x: T
): T extends string ? string : number;
function double4(x: any) {
    return x + x;
}

const number4 = double4(12);
const string4 = double4("x");

export { double3, double, double2, double4 };
