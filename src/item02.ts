export {};

// noImplicitAny : Any 안되!
function add(a: number, b: number) {
    return a + b;
}

// strickNullChecks: Null 안되!
add(10, null);

const x: number = null;

// strickNullChecks로 인해 null이 유추되서 안된다.
const el = document.getElementById("status");
el.textContent = "Ready";
