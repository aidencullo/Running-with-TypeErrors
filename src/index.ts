// @ts-check

function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, 2);
console.log(result);

const result2 = add(4, 6);
console.log(result2);

const x: number = 7;
const y: number = 8;
const result3 = add(x, y);
console.log(result3);
