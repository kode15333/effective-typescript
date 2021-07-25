type Point = { x: number; y: number };
type P = keyof Point; // type '"x" || "y"' 유니온타입으로 나온다

type Language = "EN" | "ES";
const userLanguage: Language = "EN";
const preferences = { language: userLanguage, theme: "light" };

console.log(typeof preferences); // "object"
type Preferences = typeof preferences; // type '{language: 'EN''; theme: string; }'

/*
typeof는 값을 읽어서 타입으로 만들어준다
자바스크립트는 값으로 쓰이고 (=), 타입스크립트는 (:, as) 타입으로 쓰인다.
클래스는 타입, 값으로 둘다 사용가능하지만, 타입으로 쓰일때는 필드와 메서드로써, 값으로는 생성자로 쓰인다
*/
