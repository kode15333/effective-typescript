export {};
const surfaceArea = (r, h) => 2 * Math.PI * r * (r + h);
const volume = (r, h) => Math.PI * r * r * h;
for (const [r, h] of [
    [1, 1],
    [1, 2],
    [2, 1],
]) {
    console.log(
        `Cylinder ${r} x ${h}`,
        `Surface area: ${surfaceArea(r, h)}`,
        `Volume: ${volume(r, h)}`
    );
}

interface Person {
    firstName: string;
    lastName: string;
}

interface PersonWithBirthDate {
    firstName: string;
    lastName: string;
    birth: Date;
}

function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

interface Point2D {
    x: number;
    y: number;
}

function distance(a: Point2D, b: Point2D) {}

function get(url: string, opts: Options): Promise<Response> {}
function post(url: string, opts: Options): Promise<Response> {}

type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
const get: HTTPFunction = (url, opts) => {};
const post: HTTPFunction = (url, opts) => {};

interface PersonWithBirthDate extends Person {
    birth: Date;
}

type PersonWithBirthDate = Person & { birth: Date };

interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}

interface TopNavState {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
}

type TopNavState = {
    userId: State["userId"];
    pageTitle: State["pageTitle"];
    recentFiles: State["recentFiles"];
};

type TopNavState = {
    [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
};

type TopNavState = Pick<State, "userId" | "pageTitle" | "recentFiles">;
interface SaveAction {
    type: "save";
}
interface LoadAction {
    type: "load";
}

type Action = SaveAction | LoadAction;

type ActionType = "save" | "load";
type ActionType = Action["type"];
type ActionRec = Pick<Action, "type">;

interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
}

interface OptionsUpdate {
    width?: number;
    height?: number;
    color?: string;
    label?: string;
}

class UIWidget {
    constructor(init: Options) {}

    update(options: Partial<Options>) {}
}

type OptionsUpdate = { [k in keyof Options]?: Options[k] };

type OptionsKeys = keyof Options;

const INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: "#000000",
    label: "VGA",
};

type Options = typeof INIT_OPTIONS;

function getUserInfo(userId: string) {
    return {
        userId,
        name,
        age,
        height,
        weight,
        favoriteColor,
    };
}

type UserInfo = ReturnType<typeof getUserInfo>;

interface Name {
    first: string;
    last: string;
}

type DancingDuo<T extends Name> = [T, T];

const couple1: DancingDuo<Name> = [
    { first: "Fred", last: "Astaire" },
    { first: "Fred", last: "Astaire" },
];

const couple2: DancingDuo<{ first: string }> = [
    { first: "Fred" },
    { first: "Fred" },
];

const dancingDuo = <T extends Name>(x: DancingDuo<T>) => x;

const couple11: dancingDuo([
  { first: "Fred", last: "Astaire" },
  { first: "Fred1", last: "Astaire1" },
]);

type Pick<T, K extends keyof T> = {
  [k in K]: T[k]
}

type FirstLast = Pick<Name, 'first' | 'last'>;
type FirstMiddle = Pick<Name, 'first' | 'middle'>
