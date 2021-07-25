export {};

const pt = {};
pt.x = 3;
pt.y = 4;

interface Point {
    x: number;
    y: number;
}

const pt: Point = {};
pt.x = 1;
pt.y = 3;

const pt = {
    x: 3,
    y: 3,
};

const pt = {} as Point;
pt.x = 3;
pt.y = 4;

const pt: Point = {
    x: 3,
    y: 4,
};

const pt = { x: 3, y: 4 };
const id = { name: "Pythagoras" };
const namePoint = {};

// bad
Object.assign(namePoint, pt, id);

// good
const namedPoint = { ...pt, ...id };
namePoint.name;

const pt0 = {};
const pt1 = { ...pt0, x: 3 };
const ptt: Point = { ...pt1, y: 4 };

declare let hasMiddle: boolean;
const firstLast = { first: "Harry", last: "Truman" };
const persident = { ...firstLast, ...(hasMiddle ? { middle: "S" } : {}) };

declare let hasDates: boolean;
const nameTitle = { name: "Khufu", title: "Pharaoh" };
const pharaoh = {
    ...nameTitle,
    ...(hasDates ? { start: -2589, end: -2566 } : {}),
};
pharaoh.start;

function addOptional<T extends object, U extends object>(
    a: T,
    b: U | null
): T & Partial<U> {
    return { ...a, ...b };
}

const pharaohh = addOptional(
    nameTitle,
    hasDates ? { start: -2589, end: -2566 } : null
);

pharaohh.start;
