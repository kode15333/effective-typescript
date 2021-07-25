export {};

const xs = [1, 2, 3];
const x0 = xs[0];
const x1 = xs["1"];

function get<T>(array: T[], k: string): T {
    return array[k];
}

const keys = Object.keys(xs);
for (const key in xs) {
    key;
    const x = xs[key]; // index과 String이지만, 작동한다.
}

// index를 사용할려고 한다면 이렇게
xs.forEach((x, i) => {
    i;
    x;
});

// 중간에 멈춰야 한다면
for (let i = 0; i < xs.length; i++) {
    const x = xs[i];
    if (x < 0) break;
}

function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
    if (i < xs.length) {
        return xs[i];
    }
    throw new Error(`배열의 끝을 지나서 ${i}를 접근하려고 합니다`);
}

const tupleLike: ArrayLike<string> = {
    "0": "A",
    length: 1,
};
