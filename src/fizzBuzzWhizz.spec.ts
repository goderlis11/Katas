import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should works', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
  test('should works 2', () => {
    const result = game(2);
    expect(result).toEqual(2);
  });
  test('should return Fizz when number is 3', () => {
    const result = game(3);
    expect(result).toEqual('Fizz');
  });
test('should return Fizz when number is multiple of 3', () => {
    const result = game(6);
    expect(result).toEqual('Fizz');
  });
});
