import { describe, it, expect } from "vitest";
import { isAnagram } from "./validAnagram";

describe("isAnagram", () => {
  it("should return true if valid anagram", () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true);
  });

  it("should return false if no anagram", () => {
    expect(isAnagram("car", "rat")).toEqual(false);
  });

  it("should return false if different length", () => {
    expect(isAnagram("anagrama", "nagaram")).toEqual(false);
  });

    it("should return false if different frequent", () => {
    expect(isAnagram("cacc", "aacc")).toEqual(false);
  });
});
