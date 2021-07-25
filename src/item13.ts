export {};
/*
타입과 인터페이스의 큰 차이는
타입의 유니온은 인터페이스의 불가능하며, 유니온타입에서 인터섹션까지하면 타입만 할 수 있는 기능
인터페이스의 기능 보강기능 추가적인 타입을 정의하는것이다.
  */

type TState = {
    name: string;
    capital: string;
};

interface IState {
    name: string;
    capital: string;
}

const wyoming: TState = {
    name: "wyoming",
    capital: "Cheyenne",
    population: 500_000,
};

type TDict = {
    [key: string]: string;
};

interface IDict {
    [key: string]: string;
}

type TFn = (x: number) => string;
interface IFn {
    (x: number): string;
}

const toStrT: TFn = x => `${x}`;
const toStrI: IFn = x => `${x}`;

type TFbWithProperties = {
    (x: number): number;
    prop: string;
};

interface IFnWithProperties {
    (x: number): number;
    prop: string;
}

type TPair<T> = {
    first: T;
    second: T;
};

interface IPair<T> {
    first: T;
    second: T;
}

interface IStateWithPop extends TState {
    population: number;
}

type TStateWithPop = IState & { population: number };

class StateT implements TState {
    name: string = "";

    capital: string = "";
}

class StateI implements IState {
    name: string = "";

    capital: string = "";
}

type AorB = "a" | "b";

type Input = {};

type Output = {};

interface VariableMap {
    [name: string]: Input | Output;
}

type NamedVariable = (Input | Output) & { name: string };

type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];

interface Tuple {
    0: number;
    1: number;
    length: 2;
}

const t: Tuple = [10, 20];

interface IState {
    name: string;
    capital: string;
}

interface IState {
    population: number;
}
