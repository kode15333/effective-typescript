export {};

// 공집합
const x: never = 12;

// 리터럴 단 하나의 집합
type A = "A";
type B = "B";
type Twelve = 12;

// 합집합(2 ~ 3개)
type AB = "A" | "B";
type AB12 = "A" | "B" | 12;

// 집합의 관점에서 ~의 원소(값과 타입의 관계) 또는 ~의 부분 집합(두 타입의 관계)

const a: AB = "A";
const c: AB = "C";

const ab: AB = Math.random() < 0.5 ? "A" : "B";
const ab12: AB12 = ab;

declare let twelve: AB12;
const back: AB = twelve;

interface Identified {
    id: string;
}

// 어떠한 객체가 id라는 키를 string으로 가지고 있다면!!! indentified이다!!!

interface Person {
    name: string;
}

interface Lifespan {
    birth: Date;
    death?: Date;
}

type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
    name: "Alen Turing",
    birth: new Date("1919/06/23"),
    death: new Date("1954/06/07"),
};

type Person1 = {
    name: string;
};

type Lifespan1 = {
    birth: Date;
    death?: Date;
};

type PersonSpan1 = Person1 & Lifespan1;

const ps1: PersonSpan1 = {
    name: "Alen Turing",
    birth: new Date("1919/06/23"),
    death: new Date("1954/06/07"),
};

type K = keyof (Person & Lifespan);
type P = keyof Person;
type R = keyof Lifespan;
const aa: R = "name";

// keyof (A&B) = (keyof A) | (keyof B);
// keyof (A|B) = (keyof A) & (keyof B);

export {};
interface Person {
    name: string;
}

interface PersonSpan extends Person {
    birth: Date;
    death?: Date;
}
interface Vector1D {
    x: number;
}
interface Vector2D extends Vector1D {
    y: number;
}
interface Vector3D extends Vector2D {
    z: number;
}

interface Vector1D {
    x: number;
}
interface Vector2D {
    x: number;
    y: number;
}
interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function getkey<T extends string>(val: any, key: T) {}

getkey({}, "33");
getkey({}, Math.random() < 0.5 ? "A" : "B");
getkey({}, document.title);
getkey({}, 12);

interface Point {
    x: number;
    y: number;
}

type PointKeys = keyof Point;

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {}

const pts: Point[] = [
    { x: 1, y: 1 },
    { x: 2, y: 0 },
];

sortBy(pts, "x");
sortBy(pts, "y");
sortBy(pts, Math.random() < 0.5 ? "x" : "y");
sortBy(pts, "z");

const list = [1, 2];
const tuple: [number, number] = list;

const triple: [number, number, number] = [1, 2, 3];
const doble: [number, number] = triple;

type T = Exclude<string | Date, string | number>;
type NonZeroNums = Exclude<number, 0>;
