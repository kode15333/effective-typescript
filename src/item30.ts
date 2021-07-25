export {};
// worst
/*
  전경색(foreground) 문자열을 반환합니다.
  0개 또는 1 개의 매개변수를 받습니다.
  매개변수가 없을 떄는 표준 전경색을 반환합니다.
  매개변수가 있을 때는 특정 페이지의 전경색을 반화합니다.
*/
function getForegroundColor(page?: string) {
    return page === "login" ? { r: 127, g: 127, b: 127 } : { r: 0, g: 0, b: 0 };
}
// best
/* 애플리케이션 또는 특정 페이지의 전경색을 가져옵니다. */
function getForegroundColor(page?: string): Color {}

// worst
/** nums를 변경하지 않습니다. * */
function sort(nums: number[]) {}

// best
function sort(nums: readonly number[]) {}


