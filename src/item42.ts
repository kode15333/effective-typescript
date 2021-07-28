export {};

// 1. unknown 함수 반환값
function parseYAML(yarl: string): any {}

interface Book {
    name: string;
    author: string;
}

const book: Book = parseYAML(`
  name: Wuthering Heights
  author: Emily Bronte
`);

alert(book.title);
book("read");

function safeParseYAML(yaml: string): unknown {
    return parseYAML(yaml);
}

// worst
const book1 = safeParseYAML(`
  name: The Tenant of Wildfell Hall
  author: Anne Bronte
`);

// good
// unknown 에서 원하는 타입으로 바꾸는 방법 타입 assertion
const book1 = safeParseYAML(`
  name: The Tenant of Wildfell Hall
  author: Anne Bronte
`) as Book;

alert(book.title);
book1("read");

// 2. unknown 변수 선언
interface Feature {
    id?: string | number;
    geometry: Geometry;
    properties: unknown;
}

// instanceOf
function processValue(val: unknown) {
    if (val instanceof Date) {
        val;
    }
}

// 타입 가드
function isBook(val: unknown): val is Book {
    return (
        typeof val === "object" &&
        val !== null &&
        "name" in val &&
        "author" in val
    );
}

function processValue(val: unknown) {
    if (isBook(val)) {
        val;
    }
}

// worst
// 제네릭을 사용하는것은 좋지않다.
// 타입단언문과 달라 보이지만, 기능적으로 동일하다

// 제네릭 보다는 unknown을 반환하고 사용자가 직접 단언문을 사용하거나 원하는 대로 타입을 좁히도록 강제하는것이 좋다
function safeParseYAML<T>(yaml: string): T {
    return parseYAML(yaml);
}

// 3. unknown 단언문

declare const foo: Foo;

const barAny = foo as any as Bar;
// unknown 같은 경우에 에러를 뱉기때문에 any보다 타입을 숨기는것보다 좋다
const barUnk = foo as unknown as Bar;

// 추가사항 object , {};
// null, undefined가 없다면, unknown 보다는 {}를 사용해야 한다.
