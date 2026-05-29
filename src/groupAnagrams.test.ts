import { describe, it, expect } from 'vitest';
import { groupAnagrams } from './groupAnagrams';

function normalizeGroups(groups: string[][]): string[][] {
  return groups
    .map((group) => [...group].sort())
    .sort((a, b) => a.join(',').localeCompare(b.join(',')));
}

describe('groupAnagrams', () => {
  it('should group words that are anagrams', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const expected = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];

    expect(normalizeGroups(groupAnagrams(input))).toEqual(normalizeGroups(expected));
  });

  it('should return an empty array for an empty input', () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  it('should handle single-word input', () => {
    expect(groupAnagrams(['hello'])).toEqual([['hello']]);
  });

  it('should group identical words together', () => {
    const input = ['abc', 'bca', 'abc', 'cab'];
    const expected = [['abc', 'bca', 'abc', 'cab']];

    expect(normalizeGroups(groupAnagrams(input))).toEqual(normalizeGroups(expected));
  });
});
