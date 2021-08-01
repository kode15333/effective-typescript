export {};

// js파일에서 타입체커를 이용하고 싶다면!
// 선언되지 않은 전역변수
// 알수 없는 라이브러리
// DOM 문제

// @ts-check
const person = { first: "Grace", last: "Hopper" };
person.first;

console.log(user.firstName);

// types.d.ts
interface UserData {
    firstName: string;
    lastName: string;
}

declare let user: UserData;

// @ts-check
/// <reference path="./type.d.ts"/>
console.log(user.firstName);

// @ts-check
$("#graph").style({ width: "100px", height: "100px" });

// @ts-check
const ageEl = document.getElementById("age");
ageEl.value = "12";

// @ts-check
const ageEl = /** @type {HTMLInputElement} */ document.getElementById("age");
ageEl.value = "12";

// ts-check
/**
 * 엘리먼트의 크기(픽셀 단위)를 가져 옵니다.
 * @param {Node} el 해당 엘리멘트
 * @return {{w: number, h: number}} 크기
 * */
function getSize(el) {
    const bounds = el.getBoundingClientRect();
    return { width: bounds.width, height: bounds.height };
}

// @ts-check
/**
 * @param {number} val
 * */
function double(val) {
    return 2 * val;
}

function loadData(data) {
    data.files.forEach(async file => {});
}


