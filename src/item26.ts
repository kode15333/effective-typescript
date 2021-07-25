export {};

setLanguage("Javascript");

const language = "Javascript";
setLanguage(language);

function setLanguage(language: string) {}
setLanguage("Javascript");

const language = "Javascript";
setLanguage(language);

type Language = "JavaScript" | "TypeScript" | "Python";
function setLanguage2(language: Language) {}

setLanguage2("JavaScript");

const lang: Language = "JavaScript";
setLanguage2(lang);

const lang2 = "Javascript";
setLanguage2(lang2);

function panTo(where: readonly [number, number]) {}

panTo([10, 20]);

// const loc = [10, 20];
// const loc: [number, number] = [10, 20];
// const loc = [10, 20] as const;
const loc = [10, 20, 30] as const;

panTo(loc);

type Language = "JavaScript" | "TypeScript" | "Python";
interface GovernedLanguage {
    language: Language;
    organization: string;
}

function complain(language: GovernedLanguage) {}

complain({ language: "TypeScript", organization: "Microsoft" });

const ts = { language: "TypeScript", organization: "Microsoft" };
complain(ts);

function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
    fn(Math.random(), Math.random());
}

callWithRandomNumbers((a, b) => {
    a;
    b;
    console.log(a + b);
});

const fn = (a, b) => {
    console.log(a + b);
};

callWithRandomNumbers(fn);
