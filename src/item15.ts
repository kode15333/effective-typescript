export {};
const rocket = {
    name: "falcon 9",
    variant: "black 5",
    thrust: "7,607 kn",
};
/*
부정확한 방법
1. 모든 키를 받는다(string이면)
2. 타입체커 기능을 다 작동되지 않는다(수정 및 오류)
 */
type Rocket = { [property: string]: string };
const rocket: Rocket = {
    name: "falcon 9",
    variant: "black 5",
    thrust: "7,607 kn",
};

interface Rocket1 {
    name: string;
    variant: string;
    thrust_kN: number;
}

const falconHeavy: Rocket1 = {
    name: "falcon 9",
    variant: "black 5",
    thrust_kN: 15_200,
};

function parseCSV(
    input: string
): { [columnName: string]: string | undefined }[] {
    const lines = input.split("\n");
    const [header, ...rows] = lines;
    const headerColumns = header.split(",");
    return rows.map(rowStr => {
        const row: { [columnName: string]: string } = {};
        rowStr.split(",").forEach((cell, i) => {
            row[headerColumns[i]] = cell;
        });
        return row;
    });
}

interface ProductRow {
    productId: string;
    name: string;
    price: string;
}

declare let csvData: string;
const products = parseCSV(csvData) as unknown as ProductRow[];

const rows = parseCSV(csvData);
const prices: { [product: string]: number } = {};
for (const row of rows) {
    prices[row.productId] = Number(row.price);
}

const safeRows = safeParceCSV(csvData);
for (const row of safeRows) {
    prices[row.productId] = Number(row.price);
}

// bad
interface Row1 {
    [column: string]: number;
}

// good
interface Row2 {
    a: number;
    b?: number;
    c?: number;
    d?: number;
}

// best
type Row3 =
    | { a: number }
    | { a: number; b: number }
    | { a: number; b: number; c: number }
    | { a: number; b: number; c: number; d: number };

type Vec3D = Record<"x" | "y" | "z", number>;

type Vec3D = { [k in "x" | "y" | "z"]: number };

// best best
type ABC = {/ [k in "a" | "b" | "c"]: k extends "b" ? string : number };
