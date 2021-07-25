export {};

const el = document.getElementById("foo");
{
    if (el) {
        el;
        el.innerHTML = "Party Time".blink();
    } else {
        el;
        alert("No element #foo");
    }
}

if (!el) throw new Error("Unable to find #foo");

el.innerHTML = "Party Time".blink();

function contains(text: string, search: string | RegExp) {
    if (search instanceof RegExp) {
        search;
        return !!search.exec(text);
    }
    search;
    return text.includes(search);
}

interface A {
    a: number;
}
interface B {
    a: number;
}

function pickAB(ab: A | B) {
    if ("a" in ab) {
        ab;
    } else {
        ab;
    }

    ab;
}

function contains(text: string, terms: string | string[]) {
    const termList = Array.isArray(terms) ? terms : [terms];
    termList;
}

const el = document.getElementById("foo");
if (typeof el === "object") {
    el;
}

function foo(x?: number | string | null) {
    if (!x) {
        x;
    }
}

interface UploadEvent {
    type: "upload";
    filename: string;
    contents: string;
}

interface DownloadEvent {
    type: "download";
    filename: string;
}

type AppEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AppEvent) {
    switch (e.type) {
        case "download":
            e;
            break;
        case "upload":
            e;
            break;
    }
}

function isInputElement(el: HTMLElement): el is HTMLInputElement {
    return "value" in el;
}

function getElementContent(el: HTMLElement) {
    if (isInputElement(el)) {
        el;
        return el.value;
    }
    el;
    return el.textContent;
}

const jackson5 = ["Jackie", "Tito", "Jermaine", "Marlon", "Michael"];
const members = ["Janet", "Michael"].map(who => jackson5.find(n => n === who));

// 추가적이지만, undefined를 제거해준다.
function isDefined<T>(x: T | undefined): x is T {
    return x !== undefined;
}

const members1 = ["Janet", "Michael"]
    .map(who => jackson5.find(n => n === who))
    .filter(isDefined);
