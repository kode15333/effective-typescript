export {};

interface Animal {
    name: string;
    endangered: boolean;
    habitat: string;
}

// worst
// 객체의 키값들이 명확하지 않다
const leopard: Animal = {
    name: "Snow Leopard",
    endangered: false,
    habitat: "tundra",
};



// best

// 데이터(국제 표준 체계, 분류기준)에 따라 타입을 지정
// 동의어를 쓰지말자! 명확한 타입 ( 코드와 동일하다)
type ConservationStatus = "EX" | "EW" | "CR" | "EN" | "VU" | "NT" | "LC";

type KoppenClimate =
    | "Af"
    | "Am"
    | "As"
    | "Aw"
    | "Bsh"
    | "Bsk"
    | "Bwh"
    | "Bwk"
    | "Cfa"
    | "Cfb"
    | "Cfc"
    | "Csa"
    | "Csb"
    | "Csc"
    | "Cwa"
    | "Cwb"
    | "Cwc"
    | "Dfa"
    | "Dfb"
    | "Dfc"
    | "Dfd"
    | "Dsa"
    | "Dsb"
    | "Dsc"
    | "Dwa"
    | "Dwb"
    | "Dwc"
    | "Dwd"
    | "EF"
    | "ET";

interface Animal1 {
    commonName: string;
    genus: string;
    species: string;
    status: ConservationStatus;
    climates: KoppenClimate[];
}

const snowLeopard1: Animal1 = {
    commonName: "Snow Leopard",
    genus: "Panthera",
    species: "Uncia",
    status: "VU", // 취약종
    climates: ["ET", "EF", "Dfd"], // 고산대(alpine) or 아고산대(subalpine)
};
