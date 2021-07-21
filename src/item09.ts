export {};

interface Person {
    name: string;
}

const alice: Person = { name: "Alice" };
const bob = { name: "Bob" } as Person;

const alice1: Person = {};
// 타입 assertion은 타입체커를 피한다!
const bob1 = { name: "Bob" } as Person;

const alice: Person = {
    name: "Alice",
    occupation: "Typescript developer",
};

const bob = {
    name: "Bob",
    occupation: "Typescript developer",
};

const people = ["alice", "bob", "jan"].map(name => ({ name }));
// People[] 원했지만, {name: string}[]이 나온다

// const people = ["alice", "bob", "jan"].map(name => ({} as Person));

// const people = ["alice", "bob", "jan"].map(name => {
//     const person: Person = { name };
//     return person;
// });

// const people = ["alice", "bob", "jan"].map((name): Person => ({ name }));

document.querySelector("#myButton").addEventListener("click", e => {
    e.currentTarget; //
    const button = e.currentTarget as HTMLButtonElement;
    button;
});

const elNull = document.getElementById("foo");
// const el = document.getElementById("foo")!;

const { body } = document;
const el = body as Person;
