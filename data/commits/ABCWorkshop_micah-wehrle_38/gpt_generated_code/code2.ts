interface MathFunction {
  (x: number, y: number): number;
}

const add: MathFunction = (x, y) => {
  return x + y;
};

console.log(add(5, 3)); // Output: 8