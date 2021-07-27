export {};

function getLengthBad(array: any) {
    return array.length;
}

function getLength(array: any[]) {
    return array.length;
}

// any를 사용하더라도! 더 작은 범위로 가야한다.
getLengthBad(/123/);
getLength(/123/);

function hasTwelveLetterKey(o: { [key: string]: any }) {
    for (const key in o) {
        if (key.length === 12) {
            return true;
        }
    }

    return false;
}

function hasTwelveletterKey(o: object) {
    for (const key in o) {
        if (key.length === 12) {
            console.log(key, o[key]);
            return true;
        }
    }

    return false;
}

type Fn0 = () => any;
type Fn1 = (arg: any) => any;
type FnN = (...arg: any[]) => any;
