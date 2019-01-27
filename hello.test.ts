import { hello } from "./hello";

it('hello should return the correct value', () => {
  expect(hello("Test")).toBe("Hello, Test")
})
