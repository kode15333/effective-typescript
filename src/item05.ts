export {};

let age: number;
age = "12";
age = "12" as any;

age += 1;

function calculateAge(birthDate: Date): number {
    return 1;
}

const birthDate: any = "1990-01-19";

calculateAge(birthDate);

const person = { first: "George", last: "Washington" };

// person. first  => autoComplete be supported
// if use any type, dont supported that

/* interface Person {
    first: string;
    last: string;
}

const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;

 */
// if use any type, when you try change property in interface to different name, cant catch IDE

interface Person {
    firstName: string;
    last: string;
}

// like this
const formatName = (p: Person) => `${p.firstName} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;

interface ComponentProps {
    onSelectItem: (item: number) => void;
}

function renderSelector(props: ComponentProps) {}

let selectedId: number = 0;
function handleSelectItem(item: any) {
    selectedId = item.id;
}

renderSelector({ onSelectItem: handleSelectItem });

// there is no error code, even thought you run it, get error
