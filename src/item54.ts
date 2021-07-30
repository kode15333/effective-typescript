export {};

const obj = {
    one: "uno",
    two: "dos",
    three: "tres",
};
let k: keyof typeof obj;
for (k in obj) {
    const v = obj[k];
}

interface ABC {
    a: string;
    b: string;
    c: number;
}

function foo(abc: ABC) {
    let k: keyof ABC;
    for (k in abc) {
        const v = abc[k];
    }
}

const x = { a: "a", b: "b", c: 2, d: new Date() };
foo(x);

/**
 * 배열을 순회하는 방법?????
 * Object.entries()를 쓰세요
 * */

function bar(abc: ABC) {
    for (const [k, v] of Object.entries(abc)) {
        k;
        v;
    }
}


