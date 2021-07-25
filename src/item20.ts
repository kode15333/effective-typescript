export {};
// 변수의 값은 바뀔 수 있지만, 타입은 변하지 않는다.


// bad
let id: string | number = "12-34-56";
fetchProduct(id);
id = 123234234;
fetchProductSerialNumber(id);

// bad2
const id1 = "12-34-54";
fetchProduct(id);
{
  const id2 = 123234234;
  fetchProductSerialNumber(id);
}


// best
const id = "12-34-54";
fetchProduct(id);

const serial = 123123;
fetchProductSerialNumber(serial);
