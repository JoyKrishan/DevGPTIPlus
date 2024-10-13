// myLibrary.d.ts

interface Config {
  'foo/bar': (value: number) => SomeObject;
  'foo/baz': (value: boolean) => AnotherObject;
  // Add other paths and function types as needed
}