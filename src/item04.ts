export {};

interface Vector2D {
    x: number;
    y: number;
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
    name: string;
    x: number;
    y: number;
}

// const v: NamedVector = { x: 3, y: 4, name: "Zoe" };
calculateLength(v);

// 타입스크립트 타입 시스템은 자바스크립트의 런타임 동작을 모델링합니다.

interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function normalize(v: Vector3D) {
    const length = calculateLength(v);
    return {
        x: v.x,
        y: v.y,
        z: v.z,
    };
}

normalize({ x: 3, y: 5, z: 6 });

/*
자바스크립트를 기준으로 생각해보자
coord 가 과연 number만 들어올까???
그렇게 Vertor3D는 무조건 x , y, z를 받아야하는데
타입스크립트는 타입체커는 자바스크립트의  런타임을 모델링하기 때문에,
덕타이핑이니까, 어떤 타입 === 어떤 키가 올지 모르는거지,
그래서 오브젝트의 키값은 스트링이기 때문에, 그런 default 값으로 가는거죠..
근데 v는 타입이 지정되있다 => 근데 불명확한 string이 들어온다 그러면 추론 불가 -> any
*/
function calculateLength1(v: Vector3D) {
    let length = 0;
    for (const axis of Object.keys(v)) {
        const coord = v[axis];
        length += Math.abs(coord);
    }
    return length;
}

/* 해결책
키의
function calculateLength1(v: Vector3D) {
    let length = 0;
    let axis: keyof typeof v;
    for (axis in v) {
        const coord = v[axis];
        length += Math.abs(coord);
    }
    return length;
}

function calculateLength1(v: Vector3D) {
    let length = 0;
    for (const [key, value] of Object.entries(v)) {
        length += Math.abs(value);
    }
    return length;
}
*/

// Loop 보다는 직관적으로 다 더해주는것이 좋다..
// 이유는 런타임 과정에서 키의 형태가 어떠한 타입이 올 수 도 있기 때문에 any
function calculateLength2(v: Vector3D) {
    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

class C {
    foo: string;

    constructor(foo: string) {
        this.foo = foo;
    }
}

const c = new C("instance of C");
const d: C = { foo: "Object literal" };

interface Author {
    first: string;
    last: string;
}

interface DB {
    runQuery: (sql: string) => any[];
}

// 덕타이핑을 활요한 Mocking DB 생성
function getAuthors(database: DB): Author[] {
    const authorRows = database.runQuery("SELECT FIRST, LAST FROM AUTHORS");
    return authorRows.map(row => ({ first: row[0], last: row[1] }));
}

test("getAuthors", () => {
    const authors = getAuthors({
        runQuery(sql: string) {
            return [
                ["Toni", "Morrison"],
                ["Maya", "Angelou"],
            ];
        },
    });
    expect(authors).toEqual([
        { first: "Toni", last: "Morrison" },
        { first: "Maya", last: "Angelou" },
    ]);
});
