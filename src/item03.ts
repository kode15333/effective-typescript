export {};
const x = "hello";
// x = 1234;

/*
interface Square {
    width: number;
}

interface Rectangle extends Square {
    height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    }
    return shape.width * shape.width;
}

function calculateArea(shape: Shape) {
    if ("height" in shape) {
        return shape.width * shape.height;
    }
    return shape.width * shape.width;
}
*/

// tagged union
/*

interface Square {
    kind: "square";
    width: number;
}

interface Rectangle {
    kind: "rectangle";
    height: number;
    width: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }

    return shape.width * shape.width;
}
*/

// class

/* class Square {
    constructor(public width: number) {}
}

class Rectangle extends Square {
    constructor(public width: number, public height: number) {
        super(width);
    }
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    }
    return shape.width * shape.width;
} */
/*
function asNumber(val: number | string): number {
return val as number;
}
*/

function asNumber(val: number | string): number {
    return typeof val === "string" ? Number(val) : val;
}

function setLightSwitch(value: boolean) {
    switch (value) {
        case true:
            // turnLightOn();
            break;
        case false:
            // turnLightOff()
            break;
        default:
            console.log("no come in");
    }
}

interface LightApiResponse {
    lightSwitchValue: boolean;
}

async function setLight() {
    const response = await fetch("/light");
    const result: LightApiResponse = await response.json();
    setLightSwitch(result.lightSwitchValue);
}

// function add(a: number, b: number) {}
// function add(a: string, b: string) {}

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a, b) {
    return a + b;
}
