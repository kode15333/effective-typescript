export {};
// interface Cylinder {
//     radius: number;
//     height: number;
// }

// const Cylinder = (radius: number, height: number) => ({ radius, height });

function calculateVolume(shape: unknown) {
    if (shape instanceof Cylinder) {
        shape.radius;
    }
}

// type T1 = "string literal";
// type T2 = 123;
const v1 = "string literal";
const v2 = 123;

interface Person {
    first: string;
    last: string;
}

const p: Person = { first: "Jane", last: "Jacobs" };

function email(p: Person, subject: string, body: string): Response {}

class Cylinder {
    radius = 1;

    height = 1;
}

function calculateValume(shape: unknown) {
    if (shape instanceof Cylinder) {
        shape;
        shape.radius;
    }
}

// class는 타입으로 쓰일때는 형태(속성과 메서드)가 사용되며, 값으로 쓰일때는 생성자가 사용됩니다.

type T1 = typeof p;
type T2 = typeof email;

const v = typeof Cylinder;
type T = typeof Cylinder;

declare let fn: T;
const c = new fn();

type C = InstanceType<typeof Cylinder>;

// const first: Person['first'] = p['first'];

type PersonEl = Person["first" | "last"];
type Tuple = [string, number, Date];
type TupleEl = Tuple[number];

function email1({ person: Person, subject: string, body: string }) {}
function email1({
    person,
    subject,
    body,
}: {
    person: Person;
    subject: string;
    body: string;
}) {}
