/*
export {};
왜 export {};를 써주는걸까?
파일변로 모듈로 인식해서 스코프를 제한해주려고
export 하고 빈 객체를 리턴하면 타입스크립트는 이 코드를 모듈이라고 생각한다.
파일안의 변수들은 이 파일안으로 정해진다.
*/
