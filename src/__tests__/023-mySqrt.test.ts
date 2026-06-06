import { describe, it, expect } from 'vitest';
import { mySqrt } from "../023-mySqrt";

describe("mySqrt", () => {
  it("should return 0 for input 0", () => {
    expect(mySqrt(0)).toBe(0);
  });

  it("should return 1 for input 1", () => {
    expect(mySqrt(1)).toBe(1);
  });

  it("should return 1 for input 2", () => {
    expect(mySqrt(2)).toBe(1);
  });

  it("should return 1 for input 3", () => {
    expect(mySqrt(3)).toBe(1);
  });

  it("should return 2 for input 4", () => {
    expect(mySqrt(4)).toBe(2);
  });

  it("should return 2 for input 8", () => {
    expect(mySqrt(8)).toBe(2);
  });

  it("should return 3 for input 9", () => {
    expect(mySqrt(9)).toBe(3);
  });

  it("should return 3 for input 15", () => {
    expect(mySqrt(15)).toBe(3);
  });

  it("should return 4 for input 16", () => {
    expect(mySqrt(16)).toBe(4);
  });

  it("should return 10 for input 100", () => {
    expect(mySqrt(100)).toBe(10);
  });

  it("should return 46 for input 2147395600", () => {
    expect(mySqrt(2147395600)).toBe(46340);
  });
});
