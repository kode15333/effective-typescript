export {};

// 단축키 /** + Enter

// 인사말을 생성합니다. 결과는 보기 좋게 꾸며집니다.
function greet(name: string, title: string) {
    return `Hello ${title} ${name}`;
}
/** 인사말을 생성합니다. 결과는 보기 좋게 꾸며집니다. */
function greetJSDoc(name: string, title: string) {
    return `Hello ${title} ${name}`;
}

greet("John Doe", "Sir");

greetJSDoc("John Doe", "Sir");

/**
 * 인사말을 생성합니다.
 * @param name 인사할 사람의 이름
 * @param title 그 사람의 칭호
 * @returns 사람의 보기 좋은 형태의 인사 말
 */
function greetFullTSDoc(name: string, title: string) {
    return `Hello ${title} ${name}`;
}

greetFullTSDoc();

/** 특정 시간과 장소에서 수행된 측정 */
interface Measurement {
    /** 어디에서 측정되었나? */
    position: Vector3D;
    /** 언제 측정되었나? epoch에서부터 초 단위로 */
    time: number;
    /** 측정된 운동량 */
    momentum: Vertor3D;
}

/**
 * 이 _interface_는 **세 가지** 속성을 가집니다.
 * 1. x
 * 2. y
 * 3. z
 */
interface Vertor3D {
    x: number;
    y: number;
    z: number;
}
