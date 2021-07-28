export {};
// npx type-coverage (any가 아닌 심볼) / (전체 심볼)  (퍼센트가 낮을수록 any가 많다)

function getColumnInfo(name: string): any {
    return utils.buildColumnInfo(appState.dataSchema, name); // any를 반환합니다.
}

// utils.buildColumnInfo이 any를 반환하다가 명시적인 타입을 선언하고 바꿔주더라도 getColumnInfo에서 any로 반환타입을 선언하면 any가 되기때문에 항상 유념해야 한다.

// declare module "my-module";

// import { someMethod, someSymbol} from "my-module"

const pt1 = {
    x: 1,
    y: 2,
};

const p2 = someMethod(pt1, someSybol); // p2 타입은 any
