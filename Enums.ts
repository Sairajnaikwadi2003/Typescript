// Arrays and Tuples
// Arrays: Use the Array<T> or T[] syntax to define an array of a specific type.

let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
// Tuples: A fixed-size array where elements can have different types.

let person2: [string, number] = ["Alice", 30];
// 3. Enums
// Enums allow you to define a set of named constants, useful for representing discrete values.
// Numeric Enum:
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
// String Enum:
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}

// 4. Functions
// TypeScript allows you to specify the types for function parameters and return types.

function greet(name: string): string {
  return `Hello, ${name}`;
}
``
// Optional and Default Parameters: Parameters can be optional or have default values.

function sum(a: number, b: number = 5): number {
  return a + b;
}

// 5. Interfaces
// Interfaces define the shape of objects, including properties and methods.

interface Person1 {
  name: string;
  age: number;
  greet(): void;
}
const person3: Person1 = {
  name: "Alice",
  age: 25,
  greet() {
    console.log("Hello!");
  }
};

// 6. Type Aliases
// Type aliases allow you to define a custom type using the type keyword.

type Point = { x: number; y: number };
const point: Point = { x: 5, y: 10 };

// 7. Classes
// TypeScript supports object-oriented programming using classes, constructors, and methods.

class Car1 {
  brand: string;
  model: string;
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }
  drive() {
    console.log(`${this.brand} ${this.model} is driving!`);
  }
}
const car = new Car1("Tesla", "Model S");
car.drive();

// 8. Inheritance
// Classes can extend other classes, and TypeScript supports the inheritance of properties and methods.

class ElectricCar extends Car1 {
  battery: number;
  constructor(brand: string, model: string, battery: number) {
    super(brand, model);
    this.battery = battery;
  }
}
const eCar = new ElectricCar("Tesla", "Model 3", 100);

// 9. Generics
// Generics allow you to write flexible, reusable functions, classes, and interfaces with type parameters.

function identity<T>(value: T): T {
  return value;
}
let num = identity(5);  // num is of type number
let str = identity("hello");  // str is of type string

// 10. Union and Intersection Types
// Union Types (|): A variable can be one of multiple types.

let value: string | number = "Hello";
value = 42; // Allowed

// Intersection Types (&): Combines multiple types into one.

interface A {
  name: string;
}
interface B {
  age: number;
}
type C = A & B;
const person: C = { name: "Alice", age: 25 };

// 11. Type Assertions
// Type assertions allow you to tell TypeScript about the type of a value when the compiler is unable to infer it.

let value1: unknown = "Hello";
let length: number = (value1 as string).length;

// 12. Modules and Namespaces
// TypeScript uses ES6 modules or namespaces to organize code into separate files and namespaces.
// ES6 Modules:
// file1.ts
export class Car2 { /*...*/ }

// file2.ts
// Namespaces:

namespace MyNamespace {
  export class Car { /*...*/ }
}

// 13. Decorators
// Decorators are a feature in TypeScript that allows you to modify classes, methods, or properties.
// Class Decorator:

function classDecorator(target: any) {
  console.log("Class decorator applied!");
}

@classDecorator
class MyClass {}

// 14. Type Guards
// Type guards allow you to narrow down the type of a variable within a specific block of code.

function isString(value: any): value is string {
  return typeof value === "string";
}

let myValue: unknown = "Hello";
if (isString(myValue)) {
  console.log(myValue.toUpperCase());  // Now `myValue` is treated as a string
}

// 15. Advanced Types
// Mapped Types: Modify existing types using a mapping structure.

type Person = { name: string; age: number };
type ReadOnlyPerson = { readonly [K in keyof Person]: Person[K] };

// Conditional Types: Conditional types allow you to choose types based on a condition.

type IsString<T> = T extends string ? "Yes" : "No";
type Test = IsString<string>;  // "Yes"

// 16. Utility Types
// TypeScript provides several utility types to manipulate types.
// Partial: Makes all properties of a type optional.
// Required: Makes all properties of a type required.
// Pick: Creates a type by picking specific properties.
// Record: Creates a type with a set of keys and values of a specific type.

type Person3 = { name: string; age: number };
type PartialPerson = Partial<Person3>; // { name?: string; age?: number }

// 17. Asynchronous Programming
// TypeScript fully supports asynchronous programming using Promises and async/await syntax.
// Async/Await:

async function fetchData(): Promise<string> {
  const response = await fetch("https://api.example.com");
  const data = await response.json();
  return data.message;
}