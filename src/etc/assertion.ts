/*
현재 타입스크립트 assertion
- 과거
  <타입>
  const bob = <Person>{}
    리엑트에서 컴포넌트 태그로 인식해서 잘 사용되지 않는다
- 현재
as 타입


타입스크립트는 DOM의 접근을 하지 못한다!!!
그래서 해당 DOM API를 사용할땐 단언문을 쓰는것은 당연하다
단언문의 경우 컴파일시, 삭제되므로 상관없다

타입 단언문일 경우, 임의의 타입간의 타입 변환은 할 수 없다.
현재 타입에서 서브타입은 변환

HTMLButtonElement => HTMLElement 가능
HTMLButtonElement => string 현재 타입 스크립트가 알아서 바꿔준다 책에서는 as unknown as string 으로 변환하라고 에러가 나오지만 바뀜


결론
타입스크립트보다 타입을 더 잘안다! like 서버 응답값 및 Dom 속성 같은거는 타입선언을 쓰자! 확실하지 않다면 쓰지말자



*/
