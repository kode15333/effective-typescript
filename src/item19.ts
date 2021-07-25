export {};

// 타입을 넣어야할곳 : 시그니처, 객체 리터럴 타입
let x: number = 12;
let x = 12;

const person: {
    name: string;
    born: {
        where: string;
        when: string;
    };
    died: {
        where: string;
        when: string;
    };
} = {
    name: "Sojourner Truth",
    born: {
        where: "Swaretekill , NY",
        when: "c.1797",
    },
    died: {
        where: "Battle Creek, MI",
        when: "Nov. 26, 1883",
    },
};
const person = {
    name: "Sojourner Truth",
    born: {
        where: "Swaretekill , NY",
        when: "c.1797",
    },
    died: {
        where: "Battle Creek, MI",
        when: "Nov. 26, 1883",
    },
};

function square(nums: number[]) {
    return nums.map(x => x * x);
}

const square = square([1, 2, 3, 4]);

const axis1: string = "x";
const axis2 = "y";

interface Product {
    id: string;
    name: string;
    price: number;
}

// 비구조화 할당문은 모든 지역 변의 타입이 추론된다.
function logProduct(product: Product) {
    const { id } = product;
    const { name } = product;
    const { price } = product;
    console.log(id, name, price);
}

// 함수와 메서드에는 시그니처에 타입 구문을 포함하지만, 지역변수에는 타입 구문을 넣지 않는다.

// default value가 있을경우에는 타입을 넣지 않는다.
function parseNumber(str: string, base = 10) {}

// no
app.get("/heath", (request: express.Request, response: express.Response) => {
    response.send("OK");
});

// ok
app.get("/heath", (request, response) => {
    response.send("OK");
});

const elmo: Product = {
    name: "Tickle Me Elmo",
    id: "048188 627152",
    price: 28.99,
};

const furby = {
    name: "Tickle Me Elmo",
    id: 54818827152,
    price: 28.99,
};

// 객체 리터럴에는 타입을 지정해줘야한다. 추가적인 잉여 체크까지 포함되서 더 효과적이다.
logProduct(furby);

function getQuote(ticker: string) {
    return fetch(`https://quotes.example.com/?q=${ticker}`).then(response =>
        response.json()
    );
}

// 함수의 시그니처에 타입을 정해주면, 에러를 핸들링하기 쉽다.
const cache: { [ticker: string]: number } = {};
function getQuote(ticker: string): Promise<number> {
    if (ticker in cache) {
        return cache[ticker];
    }

    return fetch(`https://quotes.example.com/?q=${ticker}`)
        .then(response => response.json())
        .then(quote => {
            cache[ticker] = quote;
            return quote;
        });
}

interface Vertor2D {
    x: number;
    y: number;
}

function add(a: Vertor2D, b: Vertor2D): Vertor2D {
    return { x: a.x + b.x, y: a.y + b.y };
}
