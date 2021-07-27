export {};

// 1. 함수에서의 any
function processBar(b: Bar) {}
function f() {
    const x = expressionReturnFoo();
    processBar(x);
}

// worst
function f1() {
    const x: any = expressionReturnFoo();
    // any 대신 @ts-ignore를 사용해도 되지만, 근본적인 문제 해결이 아니기때문에 사용하지 말아야 한다.
    processBar(x);
    return x; // 여기까지 타입이 any가 되므로 타입이 오염된다.
}

function g() {
    const foo = f1(); // 타입이 Any이기 때문에
    foo.fooMethod(); // 도움을 받을 수 없다.
}

// best
function f2() {
    const x = expressionReturnFoo();
    processBar(x as any);
    return x; // 사용될때만, any이고 여기서는 foo이다
}

// 2. 객체에서의 any

const config: Config = {
    a: 1,
    b: 2,
    c: {
        key: value, // error
    },
};


// worst
const config: Config = {
  a: 1,
  b: 2,
  c: {
    key: value,
  },
} as any;


// best
const config: Config = {
  a: 1,
  b: 2,
  c: {
    key: value as any,
  },
};
