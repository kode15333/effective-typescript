export {};

declare function map<U, V>(array: U[], fn: (u: U) => V): V[];
map(["2017", "2018", "2019"], v => Number(v));

const lengths: number[] = map(["john", "paul"], name => name.length);

function assertType<T>(x: T) {}

assertType<number[]>(map(["john", "paul"], name => name.length));

const n = 12;
assertType<number>(n);

const beatles = ["john", "paul", "george", "ringo"];
assertType<{ name: string }[]>(
    map(beatles, name => ({
        name,
        inYellowSubmarine: (name = "ringo"),
    }))
);

const add = (a: number, b: number) => a + b;
assertType<(a: number, b: number) => number>(add);

/**
 * 성공인 이유?
 * 매개변수가 거 작은 함수 타입에  함수를 할달하는것이 문제 없다
 * 콜백을 받는 원리 (map, reducer, filter 두번째 인자 fn)
 */
const bouble = (x: number) => 2 * x;
assertType<(a: number, b: number) => number>(bouble); // 성공

const g: (x: string) => any = () => 12;

// lodash map
map(array, (name, index, array) => {
    /**/
});

const bouble2 = (x: number) => 2 * x;
const p: Parameters<typeof bouble2> = null;
assertType<[number, number]>(p);

const r: ReturnType<typeof bouble2> = null!;
assertType<number>(r);

declare function map1<U, V>(
    array: U[],
    fn: (this: U[], u: U, i: number, array: U[]) => V
): V[];

assertType<number[]>(
    map1(beatles, function (name, i, array) {
        assertType<string>(name);
        assertType<number>(i);
        assertType<string[]>(array);
        assertType<string[]>(this);
        return name.length;
    })
);

// 타입 관련된 테스트는 dtslint 도구를 사용해보자
// https://github.com/microsoft/dtslint
