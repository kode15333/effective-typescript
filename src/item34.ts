export {};

type GeoPosition = [number, number];
interface Point {
    type: "Point";
    // coordinates: number[];  // worst
    coordinates: GeoPosition; // 좋은 줄 알았는데, 만약 경도 위도 말고 고도까지 나오면??? 사용하는 쪽은 assertion을 해줘야한다.
}
interface LineString {
    type: "LineString";
    // coordinates: number[];  // worst
    coordinates: GeoPosition; // 좋은 줄 알았는데, 만약 경도 위도 말고 고도까지 나오면??? 사용하는 쪽은 assertion을 해줘야한다.
}
interface Polygon {
    type: "Polygon";
    // coordinates: number[];  // worst
    coordinates: GeoPosition; // 좋은 줄 알았는데, 만약 경도 위도 말고 고도까지 나오면??? 사용하는 쪽은 assertion을 해줘야한다.
}

type Geometry = Point | LineString | Polygon;

type Expression1 = any;
type Expression2 = number | string | any[];

const tests: Expression2[] = [
    10,
    "red",
    true,
    ["+", 10, 5],
    ["case", [">", 20, 10]],
    ["**", 2, 31],
    ["rgb", 255, 128, 64],
    ["rgb", 255, 0, 127, 0],
];

type FnName = "+" | "-" | "*" | "/" | ">" | "<" | "case" | "rgb";
type CallExpression = [FnName, ...any[]];
type Expression3 = number | string | CallExpression;

const tests1: Expression3[] = [
    10,
    "red",
    true,
    ["+", 10, 5],
    ["case", [">", 20, 10]],
    ["**", 2, 31],
    ["rgb", 255, 128, 64],
    ["rgb", 255, 0, 127, 0],
];
type CallExpression = MathCall | CaseCall | RGBCall;

type Expression4 = number | string | CallExpression;

interface MathCall {
    0: "+" | "-" | "*" | "/" | ">" | "<";
    1: Expression4;
    2: Expression4;
    3: Expression4;
    length: 4 | 6 | 10 | 12 | 14 | 16;
}

interface RGBCall {
    0: "rgb";
    1: Expression4;
    2: Expression4;
    3: Expression4;
    length: 4;
}

const tests2: Expression4[] = [
    10,
    "red",
    true,
    ["+", 10, 5],
    ["case", [">", 20, 10]],
    ["**", 2, 31],
    ["rgb", 255, 128, 64],
    ["rgb", 255, 0, 127, 0],
];

const okExpressions: Expression4[] = [
    ["-", 12],
    ["+", 1, 2, 3],
    ["*", 2, 3, 4],
];

// 타입 안정성에서 불쾌한 골짜기는 피해야 합니다. any같은 unknown으로 추상화해야 한다.
