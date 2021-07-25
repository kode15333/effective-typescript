export {};

// 잉여속성 체크 => 객체 리터럴일때만 가능하면
// 피하는 방법은 임시 변수를 도입하면 된다.([optionsOther: string] : unknown]
// 공통속성 체크 => 약한 타입(모든 필드가 옵션일떄)는 두 타입이 공통된 타입을 가지고 있는지 확인
interface Room {
    numDoors: number;
    ceilingHeightFt: number;
}

// 잉여속성 체크
const r: Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: "present",
};

// obj는 Room타입의 부분 집합이다.
const obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: "present",
};

const rr: Room = obj;

interface Options {
    title: string;
    darkMode?: boolean;
}

function createWindow(options: Options) {
    if (options.darkMode) {
        setDarkMode();
    }
    //
}

createWindow({
    title: "Spider Solitaire",
    darkmode: true,
});

const o1: Options = document;
const o2: Options = new HTMLAnchorElement();

// 객체리터럴은 잉여타입을 체크한다.
const o: Options = { darkmode: true, title: "Ski free" };

const intermediate = { darkmode: true, title: "Ski free" };
const oo: Options = intermediate;

const oO: Options = { darkmode: true, title: "Ski free" } as Options;

interface Options1 {
    darkMode?: boolean;
    [otherOption: string]: unknown;
}

const o3: Options1 = { darkMode: true };


// 모든 타입이 optional이면 약한 타입이라고 한다
interface LineChartOptions {
    logscale?: boolean;
    invertedYAxis?: boolean;
    areaChart?: boolean;
}


// 이럴때는 타입스크립트에서 값 타입과 선언 타입의 공통적인 속성이 있는지 비교한다.
const opts = { logScale: true };

const o4: LineChartOptions = opts;
