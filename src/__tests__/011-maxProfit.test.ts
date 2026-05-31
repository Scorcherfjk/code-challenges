import { describe, it, expect } from 'vitest';
import { maxProfit } from '../011-maxProfit';

describe('maxProfit', () => {
  it('returns the maximum profit for a standard price list', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('returns 0 when prices only decrease', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it('returns 0 for a single price', () => {
    expect(maxProfit([5])).toBe(0);
  });

  it('returns 0 for empty input', () => {
    expect(maxProfit([])).toBe(0);
  });

  it('returns the profit from the earliest low to the highest later price', () => {
    expect(maxProfit([2, 4, 1, 7, 5, 3])).toBe(6);
  });
});
