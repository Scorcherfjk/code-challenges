import { describe, it, expect } from 'vitest';
import { removeNthFromEnd } from '../027-removeNthNodeFromEnd';
import { arrayToList, listToArray } from './listHelpers';

describe('removeNthFromEnd', () => {
  it('should remove the second node from the end', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(head, 2);
    expect(listToArray(result)).toEqual([1, 2, 3, 5]);
  });

  it('should remove the head when n equals the list length', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(head, 5);
    expect(listToArray(result)).toEqual([2, 3, 4, 5]);
  });

  it('should return null when removing the only node', () => {
    const head = arrayToList([1]);
    expect(removeNthFromEnd(head, 1)).toBeNull();
  });
});