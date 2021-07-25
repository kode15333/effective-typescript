export {};
interface Vertor3D {
    x: number;
    y: number;
    z: number;
}
function getComment(vector: Vertor3D, axis: "x" | "y" | "z") {
    return vector[axis];
}
// let x = "x";
// let vec = { x: 10, y: 20, z: 30 };
// getComment(vec, x);

const mixed = ["x", 1];

let x = "x";
x = "a";
x = "four score and";

let xy = "x";
xy = /x|y|z/;
xy = "four score and";

const v: { x: 1 | 3 | 5 } = {
    x: 1,
};

v.x = 3;
v.x = "3";
v.y = 4;
v.name = "Pythagoras";

const v1 = { x: 1, y: 2 };
const v2 = { x: 1 as const, y: 2 };
const v3 = { x: 1, y: 2 } as const;

const a1 = [1, 2, 3];
const a2 = [1, 2, 3] as const;
