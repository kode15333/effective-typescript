export {};

function rollDice1(sides: number): number {}

const rollDice2 = function (sides: number): number {};
const rollDice3 = (sides: number): number => {};

type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = sides => {
    return 1;
};

function add(a: number, b: number) {
    return a + b;
}
function sub(a: number, b: number) {
    return a - b;
}
function mul(a: number, b: number) {
    return a * b;
}
function div(a: number, b: number) {
    return a / b;
}

type BinaryFn = (a: number, b: number) => number;

const add1: BinaryFn = (a, b) => {
    return a + b;
};
const sub1: BinaryFn = (a, b) => {
    return a - b;
};
const mul1: BinaryFn = (a, b) => {
    return a * b;
};
const div1: BinaryFn = (a, b) => {
    return a / b;
};

const reponseP = fetch("/example.com/33");

async function getQuote() {
    const response = await fetch("example.com/33?bt=dfsdf");
    const quote = await response.json();
    return quote;
}

declare function fetch(
    input: RequestInfo,
    init?: RequestInit
): Promise<Response>;

async function checkedFetch(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (!response.ok) {
        // 비동기 함수 내에서 거절된 프로미스로 변환
        throw new Error(`Request failed${response.status}`);
    }

    return response;
}

const checkedFetch: typeof fetch = async (input, init) => {
    const response = await fetch(input, init);
    if (!response.ok) {
        return new Error(`Request failed${response.status}`);
    }
    return response;
};
