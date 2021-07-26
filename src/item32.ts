export {};
// worst
interface Layer {
    layout: FillLayout | LineLayout | PointLayout;
    paint: FillPaint | LinePaint | PointPaint;
}

// best
interface FillLayer {
    layout: FillLayout;
    paint: FillPaint;
}

interface LineLayer {
    layout: LineLayout;
    paint: LinePaint;
}

interface PointLayer {
    layout: PointLayout;
    paint: PointPaint;
}

// 경우의 수를 줄이자 (interface 9개 => type 3개)
// 오류를 줄일 수 있다.
type Layer = FillLayer | LineLayer | PointLayer;

// Union의 수가 많아질수록 경우의 수는 더욱더 늘어난다.
interface Layer {
    type: "fill" | "line" | "point";
    layout: FillLayout | LineLayout | PointLayout;
    paint: FillPaint | LinePaint | PointPaint;
}

interface FillLayer {
    type: "fill";
    layout: FillLayout;
    paint: FillPaint;
}

interface LineLayer {
    type: "line";
    layout: LineLayout;
    paint: LinePaint;
}

interface PointLayer {
    type: "point";
    layout: PointLayout;
    paint: PointPaint;
}

// tag로 타입 줄이기
function drawLayer(layer: Layer) {
    if (layer.type === "fill") {
        const { paint } = layer;
        const { layout } = layer;
    } else if (layer.type === "line") {
        const { paint } = layer;
        const { layout } = layer;
    } else {
        const { paint } = layer;
        const { layout } = layer;
    }
}

// worst
// 타입에 주석을 가지고 있는거는 안좋다.
// null 값을 경계로 두어야 한다.
interface Person {
    name: string;
    // 다음은 둘 다 동시에 있거나, 동시에 없을수 잇다.
    placeOfBirth?: string;
    dateOfBirth?: Date;
}

// best
interface Person1 {
    name: string;
    birth?: {
        place: string;
        date: Date;
    };
}

const alanT: Person1 = {
    name: "Alan Turing",
    birth: {
        place: "London",
    },
};

function enlogize(p: Person1) {
    console.log(p.name);
    const { birth } = p;
    if (birth) {
        console.log(`was born on ${birth.date} in ${birth.place}`);
    }
}

// interface Union 을 하자
// interface 필드가 union보다는 이게 더 낫다
interface Name {
    name: string;
}

interface PersonWithBirth extends Name {
    placeOfBirth: string;
    dateOfBirth: Date;
}

type Person = Name | PersonWithBirth;

function enlogize(p: Person) {
    if ("placeOfBirth" in p) {
        p;
        const { dateOfBirth } = p;
    }
}
