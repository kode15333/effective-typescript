export {};

// 몽키패치
document.monkey = "Test";

// 타입 체커 통과 방법1
(document as any).monkey = "Test";
// 단점 : 타입 안정성 상실
(document as any).monkey = "Tes11";
(document as any).monkey = /234234/;

// interface 보강기능을 사용하여 쉽게 할수 있다.
// 모듈의 관점에서 (타입스크립트는 import / export를 사용하는 경우) 제대로 동작하게 하려면 global 선언을 추가해야 합니다.
declare global {
    interface Document {
        monkey: string;
    }
}

document.monkey = "Tamarin";


// Document 타입을 건드리지 않고 별도로 확장하는 새로운 타입을 도입해서 모듈 문제도 해결
interface MonkeyDocument extends Document {
    monkey: string;
}

(document as MonkeyDocument).monkey = "Monkey";
