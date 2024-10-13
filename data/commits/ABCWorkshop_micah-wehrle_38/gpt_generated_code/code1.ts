type ObjectWithHr = {
  isHr: boolean;
};

type ObjectWithVariables = {
  isHr?: never;
  var1?: number;
  var2?: string;
  var3?: boolean;
};

type MyObject = ObjectWithHr | ObjectWithVariables;

const objects: MyObject[] = [
  { isHr: true },
  { var1: 10, var2: "hello", var3: true },
  { var1: 20 },
  { var2: "world" },
  { isHr: true, var1: 5 } // This will now result in a type error
];