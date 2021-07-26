export {};
// 데이터를 보고 타입을 만드는것보다 명세를 보고 타입을 만들자!
// 왜? 현재 데이터 말고 추가되는 데이터가 있으면 대응불가..


function calculateBoundingBox(f: Feature): BoundingBox | null {
    const box: BoundingBox | null = null;
    const helper = (coords: any[]) => {};

    const { geometry } = f;
    if (geometry) {
        helper(geometry.coordinates);
    }

    return box;
}

function calculateBoundingBox(f: Feature): BoundingBox | null {
    const box: BoundingBox | null = null;
    const helper = (coords: any[]) => {};

    const { geometry } = f;

    if (geometry) {
        if (geometry.coordinates === "GeometryCollection") {
            throw new Error("GeometryCollections are not supported");
        }
        helper(geometry.coordinates);
    }

    return box;
}

const geometryHelper = (g: Geometry) => {
    if (geometry.coordinates === "GeometryCollection") {
        geometry.geometris.forEach(geometryHelper);
    } else {
        helper(geometry.coordinates);
    }
};

function calculateBoundingBox(f: Feature): BoundingBox | null {
    const box: BoundingBox | null = null;
    const helper = (coords: any[]) => {};

    const { geometry } = f;

    if (geometry) {
        if (geometry.coordinates === "GeometryCollection") {
            throw new Error("GeometryCollections are not supported");
        }
        helper(geometry.coordinates);
    }

    return box;
}
