export {};
/**
 * 타입스크립트로 마이그레이션 할떄, 자주생기는 오류
 * 클래스 수많은 필드....
 * 객체의 속성...
 *
 *
 * 타입으로 인해 불필요한 JS-DOC은 삭제하는게 좋다
 */

// 누락된 멤버
class Greeting {
    constructor(name) {
        this.greeting = "Hello";
        this.name = name;
    }

    greet() {
        return `${this.greeting} ${this.name}`;
    }
}

// 타입이 바뀌는 값
const state = {};
state.name = "New York";
state.capital = "Albany";

// 타입스크립트느는 num이 any이기 때문에 타입체커가 통과시킨다.

/**
 * @param {number} num
 */
function double(num) {
    return 2 * num;
}

double("trouble");

