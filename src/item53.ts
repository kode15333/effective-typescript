export {};

/**
 * 숫자형 열거형
 * 1. 0,1,2 외의 다른 숫자가 할당되면 매우 위험(설계 자체가 비트 플래그 구조를 표현)
 * 2. 상수 열거형은 보통의 열거형과 다르게 런타임에서 제거된다.
 * 3. const enum Flavor로 바꾸면 Flavor.CHOCOLATE를 0으로 바꾼다.
 * */
enum Flavor {
    VANILLA = 0,
    CHOCOLATE = 1,
    STRAWBERRY = 2,
}

const flavor = Flavor.CHOCOLATE;
Flavor[0];
/**
 * 문자열 열거형
 * 문자열 열거형은 명목적 타이핑을 사용한다.
 * 함수의 시그니처(인자)로 사용될 경우 딱 그 값만 해당하기 떄문에, (자바스크립트에서는 에러 없다) 타입 스크립트에서는 에러
 * 이러한 차이로 인해 안쓰는게 좋다 (유니온 타입을 쓰는게 더 좋다)
 * 라이브러리를 공개할때, 필요하다.
 * */
enum Flavor1 {
    VANILLA = "vanilla",
    CHOCOLATE = "chocolate",
    STRAWBERRY = "strawberry",
}

let flavor1 = Flavor1.CHOCOLATE;
flavor1 = "strawberry";

function scoop(flavor: Flavor1) {
    /**/
}

scoop("vanilla");

/**
 * 매개변수 속성을 사용하면서 기존에 있던 방법을 사용하면 혼란을 야기한다.
 * 클래스에 아래와 같이 매개변수 속성만 존재할때는 클래스 대신 인터페이스를 만들고 객체 리터럴을 사용하는게 좋다.
 * */
class Person {
    first: string;

    last: string;

    constructor(public name: string) {
        [this.first, this.last] = name.split(" ");
    }
}

// 구조적 타이핑으로 인해 에러가 발생하지 않는다.
const p: Person = { name: "Jed Bartlet", first: "Jed", last: "Bartlet" };
namespace foo {
    function bar() {}
}

/// <reference path="other.ts/>
foo.bar();

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @logged
    greet() {
        return `hello,${this.greeting}`;
    }
}

function logged(target: any, name: string, descriptor: PropertyDescriptor) {
    const fn = target[name];
    descriptor.value = function () {
        console.log(`Calling ${name}`);
        return fn.apply(this, arguments);
    };
}

console.log(new Greeter("Dave").greet());
