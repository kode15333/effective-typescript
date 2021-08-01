export {};
// Common JS
// a.js
// ECMAScript moudle
// a.ts
import * as b from "./b";

const b = require("./b");

console.log(b);

// b.js
const name = "Module b";
module.exports = { name };
console.log(b.name);

// b.ts
export const name = "Module B";
/**
 * Prototype 보다는 Class로 바꾸자
 */
function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype.getName = function () {
    return `${this.first} ${this.last}`;
};

const marie = new Person("Marir", "Curie");
const personName = marie.getName();

class Person {
    first: string;

    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    getName() {
        return `${this.first} ${this.last}`;
    }
}

const marie = new Person("Marir", "Curie");
const personName = marie.getName();

/**  const let을 사용하자
 * 호이스팅 떄문에 직관적이지 못하지만, 문제 없다
 * 나의 경우에는 린트를 통해서 함수를 호출하려면 호출한 곳보다 위에 정의가 되있어야 한다.
 */
function foo() {
    bar();
    function bar() {
        console.log("hello");
    }
}

/**
 *  for 대신 for-of 또는 배열 메서지 사용하기
 * */

for (let i = 0; i < array.length; i++) {
    const el = array[i];
}

for (const el of array) {
}

array.forEach((el, i) => {});

/**
 * 함수 표현식 보다는 화살표 함수 사용하기
 * */

// not good
class Foo {
    method() {
        console.log(this);
        [1, 2].forEach(function (i) {
            console.log(this);
        });
    }
}
const f = new Foo();
f.method();
// strick Mode Foo, undefined. undefined
// non-strick Foo, window, window

// better
class Foo {
    method() {
        console.log(this);
        [1, 2].forEach(i => {
            console.log(this);
        });
    }
}

/**
 * 단축 객체 표현과 구조 분해 할당
 * */

const x = 1;
const y = 2;
const z = 3;
const pt = {
    x,
    y,
    z,
};

["A", "B", "C"].map((char, idx) => ({ char, idx }));

const obj = {
    onClickLong(e) {},
    onClickCompact(e) {},
};

const { props } = obj;
const { a } = props;
const { b } = props;

const {
    props: { a, b },
} = obj;

// not good
let { a } = obj.props;
if (a === undefined) a = "default";

// better
const { a = "default" } = obj.props;

const point = [1, 2, 3];
const [x, y, z] = point;
const [, a, b] = point;

const points = [
    [1, 2, 3],
    [4, 5, 6],
];

points.forEach(([x, y, z]) => console.log(x + y + z));

function log2(a, b) {
    console.log(a, b);
}

log2();
/**
 * 함수 매개변수 기본값
* */
function parseNum(str, base) {
    base = base || 10;
    return parseInt(str, base);
}

function parseNum(str, base = 10) {
    return parseInt(str, base);
}

/**
 * 저수준 프로미스나 콜백 대신 async/await 사용하기
 * */
function getJSON(url: string) {
    return fetch(url).then(response => response.json());
}

function getJSONCallback(url: string, cb(result: unknown) => void){

}

async function getJSON(url: string){
  const response = await fetch(url);
  return response.json()
}
/**
 * 연관 배열에 객체 대신 Map Set 사용하기
* */

// not good
function countWords(text: string){
  const counts: {[word: string]: number} = {};
  for(const word of text.split(/[\s,.]+/)) {
    counts[word] = 1 + (counts[word] || 0)
  }
  return counts
}
// fail case
countWords('Objects have a constructor')

// better
function countWordsMap(text: string) {
  const counts = new Map<string, number>();
  for(const word of text.split(/[\s,.]+/)) {
    counts.set(word,  1 + (counts.get(word) || 0))
  }
  return counts
}

/**
 * 타입스크립트에 use strict 넣지 않기
 * */


