export {};

// any를 진화하는것보다는 역시 명시적 타입이 더 좋다

// @ts-ignore
function rangeJS(start, limit) {
    const out = [];
    for (let i = start; i < limit; i++) {
        out.push(i);
    }

    return out;
}

function range(start: number, limit: number) {
    const out = []; // 초기 타입은 any[]
    for (let i = start; i < limit; i++) {
        out.push(i); // number[]
    }

    return out; // number[]
}

const result = [];
result.push("a");
result;
result.push(1);
result;

// 암시적 any일 경우에만, 값이 할당되거나, 변경되었을떄, 타입이 진화? 한다
let val;
if (Math.random() < 0.5) {
    val = /hello/;
    val;
} else {
    val = 123;
    val;
}

val;

let val2 = null;
try {
    somethingDangerous();
    val2 = 12;
    val2;
} catch (e) {
    console.warn("alias");
}

val2;

let val3: any;

if (Math.random() < 0.5) {
    val3 = /hello/;
    val3;
} else {
    val3 = 12;
    val3;
}

val3;

// 암시적 any상태 일때는 값을 읽을려고하면 오류가 발생한다.
function range3(start: number, limit: number) {
    const out = [];

    if (start === limit) {
        return out;
    }

    for (let i = start; i < limit; i++) {
        out.push(i);
    }
    return out;
}

// forEach의 람다는 타입 추론에 영향을 줄수 없기때문에, 에러
function makeSquares(start: number, limit: number) {
    const out = [];
    range3(start, limit).forEach(i => {
        out.push(i);
    });
    return out;
}
