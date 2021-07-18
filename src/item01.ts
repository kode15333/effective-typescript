export {};
// const city = "new york city";
// console.log(city.toUpperCase());

// const states = [
//     { name: "Alabama", capital: "Montgomery" },
//     { name: "Alaska", capital: "Juneau" },
//     { name: "Arizona", capital: "Phoenix" },
// ];

// for (const state of states) {
//     console.log(state.capital);
// }

interface State {
    name: string;
    capital: string;
}

const states: State[] = [
    { name: "Alabama", capital: "Montgomery" },
    { name: "Alaska", capital: "Juneau" },
    { name: "Arizona", capital: "Phoenix" },
];

const names = ["Alice", "Bob"];
console.log(names[2].toUpperCase());
