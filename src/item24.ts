export {};
const borough = { name: "Brooklyn", location: [40.688, -73.979] };
const loc = borough.location;
// location을 loc로 별칭해서 코드를 파악하기 힘들다
loc[0] = 0;

interface Coordinate {
    x: number;
    y: number;
}

interface BoundingBox {
    x: [number, number];
    y: [number, number];
}

interface Polygon {
    exterior: Coordinate[];
    holes: Coordinate[][];
    bbox?: BoundingBox;
}

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
    if (polygon.bbox) {
        if (
            pt.x < polygon.bbox.x[0] ||
            pt.x > polygon.bbox.x[1] ||
            pt.y < polygon.bbox.y[0] ||
            pt.y > polygon.bbox.y[1]
        ) {
            return false;
        }
    }
}
// 별칭을 일관되게 하지않으면, 타입 체크한 부분에 대해서 인식하지 못한다.
function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
    const box = polygon.bbox;
    if (polygon.bbox) {
        if (
            pt.x < box.x[0] ||
            pt.x > box.x[1] ||
            pt.y < box.y[0] ||
            pt.y > box.y[1]
        ) {
            return false;
        }
    }
}

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
    const box = polygon.bbox;
    if (box) {
        if (
            pt.x < box.x[0] ||
            pt.x > box.x[1] ||
            pt.y < box.y[0] ||
            pt.y > box.y[1]
        ) {
            return false;
        }
    }
}

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
    const { bbox } = polygon;
    if (bbox) {
        const { x, y } = bbox;
        if (pt.x < x[0] || pt.x > x[1] || pt.y < y[0] || pt.y > y[1]) {
            return false;
        }
    }
}

function fn(p: Polygon) {} //

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
    const { bbox } = polygon;
    if (bbox) {
        const { x, y } = bbox;
        fn(polygon); //  polygon이 어떠한 값으로 바꿀지 모른다...
        if (pt.x < x[0] || pt.x > x[1] || pt.y < y[0] || pt.y > y[1]) {
            return false;
        }
    }
}


