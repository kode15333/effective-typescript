export {};

// function arraySum(arr: readonly number[]) {
//     let sum = 0;
//     let num;
//     while ((num = arr.pop()) !== undefined) {
//         sum += num;
//     }
//     return sum;
// }

function arraySum(arr: readonly number[]) {
    let sum = 0;
    let num;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

function printTriangles(n: number) {
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(i);
        console.log(arraySum(nums));
    }
}
printTriangles(5);

const a: number[] = [1, 2, 3];
const b: readonly number[] = a;
// const c: number[] = b;

function parseTaggedText(lines: string[]): string[][] {
    // const paragraphs: string[][] = [];
    let currPara: readonly string[] = [];
    const paragraphs: (readonly string[])[] = [];
    // 변경 가능한 배열의 readonly 배열

    const addParagraph = () => {
        if (currPara.length) {
            paragraphs.push(currPara);
            // paragraphs.push([...currPara]);
            // paragraphs.push(currPara as string[]);

            currPara = [];
        }
    };

    for (const line of lines) {
        if (!line) {
            addParagraph();
        } else {
            currPara = currPara.concat([line]);
        }

        addParagraph();
        return paragraphs;
    }
}
const dates: readonly Date[] = [new Date()];
dates.push(new Date());

// readyonly는 얕게 동작한다. (중요포인트)
dates[0].setFullYear(2045);

interface Outer {
    inner: {
        x: number;
    };
}

const o: Readonly<Outer> = { inner: { x: 0 } };
o.inner = { x: 1 };
o.inner.x = 1;

let obj: { readonly [k: string]: number } = {};

obj.hi = 45;

// let으로 선언을 하면, 타입이 덮어씌여진다.
obj = { ...obj, hi: 12 };
obj = { ...obj, bye: 34 };
