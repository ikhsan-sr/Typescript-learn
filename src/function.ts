//  Data type in return function

function getName(): string {
  return "Hello, my name is Ikhsan";
}

console.log(getName());

function getAge(): number {
  return 23;
}

console.log(getAge());

// No Returns
function printName(): void {
  console.log("print name");
}

// Arguments Type
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

const result = multiply(2, 3);

console.log(result);

// Function as type
type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1, val2) => val1 + val2;
console.log(Add(5, 5));

// Default Parameter
const fullName = (firstName: string, lastName: string = "Ikhsan"): string => {
  return firstName + " " + lastName;
};

console.log(fullName("Muhammad"));

// Optional Parameter
const getAddress = (val1: string, val2?: string): string => {
  return val1 + " " + val2;
};

console.log(getAddress("Magelang"));
