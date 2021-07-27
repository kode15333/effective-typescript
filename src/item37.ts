export {};
// 덕타이핑으로 인해 타입체커가 상세하게 작동안할수 있다.
// 상표기법을 통해서 처리하는것이 좋다
// 타입 시스템에서만 동작하지만, 런타임에서 상표를 검사하는 것과 같다


// bad
interface Vector2D {
    x: number;
    y: number;
}

function calculateNorm(p: Vector2D) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
}

calculateNorm({ x: 3, y: 4 });
const vec3D = { x: 3, y: 4, z: 1 };
calculateNorm(vec3D);

// best
// 덕타이핑을 피하기 위해서는 nominal typing 처리(두 개의 데이터가 동일한지, 혹은 하나의 서브타입인지)
// _brand 라는 키를 통해 구분한다
// https://ko.wikipedia.org/wiki/%EB%AA%85%EB%AA%A9%EC%A0%81_%EC%9E%90%EB%A3%8C%ED%98%95_%EC%B2%B4%EA%B3%84
interface Vector2D1 {
    _brand: "2d";
    x: number;
    y: number;
}

function vec2d(x: number, y: number): Vector2D1 {
    return { x, y, _brand: "2d" };
}

function calculateNorm1(p: Vector2D1) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
}

calculateNorm1(vec2d(3, 4));
calculateNorm1(vec3D);

type AbsolutePath = string & { _brand: "abs" };
function listAboslutePath(path: AbsolutePath) {}
function isAbsolutePath(path: string): path is AbsolutePath {
    return path.startsWith("/");
}

function f(path: string) {
    if (isAbsolutePath(path)) {
        listAboslutePath(path);
    }
    listAboslutePath(path);
}

function binarySearch<T>(xs: T[], x: T): boolean {
    let low = 0;
    let high = xs.length - 1;
    while (high >= low) {
        const mid = low + Math.floor((high - low) / 2);
        const v = xs[mid];
        if (v === x) return true;
        [low, high] = x > v ? [mid + 1, high] : [low, mid - 1];
    }

    return false;
}

// 이미 정렬된 상태라면, 탐색이 가능하지만, 목록이 정렬되어 있지 않다면, 잘못된 결과가 나옵니다.

// 정렬의 되었는지, 상표기법으로 보장해준다.
type SortedList<T> = T[] & { _brand: "sorted" };

function isSorted<T>(xs: T[]): xs is SortedList<T> {
    for (let i = 1; i < xs.length; i++) {
        if (xs[i] < xs[i - 1]) {
            return false;
        }
    }
    return true;
}

function binarySearch<T>(xs: SortedList<T>, x: T): boolean {}

// 기본형에 상표기법 사용하기
type Meters = number & { _brand: "meters" };
type Seconds = number & { _brand: "seconds" };

const meters = (m: number) => m as Meters;
const seconds = (s: number) => s as Seconds;

const oneKm = meters(1000);
const oneMin = seconds(60);

const tenKm = oneKm * 10;
const v = oneKm / oneMin;
