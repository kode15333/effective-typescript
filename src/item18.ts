export {};

interface ScatterProps {
    // The Data
    xs: number[];
    ys: number[];

    // Display
    xRange: [number, number];
    yRange: [number, number];
    color: string;

    // Events
    onClick: (x: number, y: number, index: number) => void;

    // 참고: 여기에 속성을 추가하려면, shouldUpdate를 고치세요
}

// 값이 변경될떄마다 차트를 다시 그린다 => 보수적 접근법, 실패에 닫힌 접근법
// 문제점 : 차트는 정확하지만? 너무 자주 그려진다
// 사용처: 보안과 관련된곳!
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
    let k: keyof ScatterProps;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k]) {
            if (k !== "onClick") return true;
        }
    }

    return false;
}

// 실패에 열린 접근법
// 누락될 경우도 있다?
// 사용처: 기능에는 무리없고, 사용성이 중요한곳
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
    return (
        oldProps.xs !== newProps.xs ||
        oldProps.ys !== newProps.ys ||
        oldProps.xRange !== newProps.xRange ||
        oldProps.yRange !== newProps.yRange ||
        oldProps.color !== newProps.color
    );
}

const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
    xs: true,
    ys: true,
    xRange: true,
    yRange: true,
    color: true,
    onClick: false,
};

// 타입체크를 활용하여, 필드가 추가될때마다 수정안해도 된다.
function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
    let k: keyof ScatterProps;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
            return true;
        }
    }
    return false;
}
