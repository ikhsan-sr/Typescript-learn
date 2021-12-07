// Case example

// function getData(value: any) {
//   return value;
// }

// console.log(getData("Ikhsan").length);
// console.log(getData(123).length);

// Generic
function myData<T>(value: T) {
  return value;
}

console.log(myData("Ikhsan").length);
console.log(myData(123));

const arrowFunc = <T>(value: T) => {
  return value;
};

const arrowJsx = <T>(value: T) => {
  return value;
};
