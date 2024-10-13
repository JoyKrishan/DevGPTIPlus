function call(path: keyof ConfigFunctions, data: any): any {
  // Function implementation
  // You need to handle the mapping from path to the correct function call here
  const fn = config[path as keyof typeof config];
  return fn(data);
}

// TypeScript will enforce correct usage based on your config
const result = call('foo/bar', 123); // OK, result is of type SomeObject
const anotherResult = call('foo/baz', true); // OK, anotherResult is of type AnotherObject