export {};

function parseCSV(contents: string | Buffer): { [column: string]: string }[] {
    if (typeof contents === "object") {
        return parseCSV(contents.toString("utf-8"));
    }

    contents;
}

/*
 *  @types/node를 devDependency로 추가할 경우,
 *  @types를 안쓰는 프론트 개발자, Node.js와 무관한 타입스크립 개발자
 *  그렇기 때문에, 구조적 타이핑을 적용해서 필요한 부분만 구현한다
 * */
interface CsvBuffer {
    toString(encoding: string): string;
}
function parseCSV(
    contents: string | CsvBuffer
): { [column: string]: string }[] {}

parseCSV(new Buffer("column1,column2\nval1,val2", "utf-8"));
