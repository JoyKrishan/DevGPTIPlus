// Assuming you have the actual implementation matching these declarations
import { call } from './myLibrary';

const result = call('foo/bar', 123); // result is inferred as SomeObject
const anotherResult = call('foo/baz', true); // anotherResult is inferred as AnotherObject