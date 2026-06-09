import { describe, it, expect } from 'vitest';
import { reverseList } from '../024-reversedLinkedList';
import { arrayToList, listToArray } from './listHelpers';

describe('reverseList', () => {
  it('should reverse a list of multiple nodes', () => {
    const list = arrayToList([1, 2, 3, 4, 5]);
    const reversed = reverseList(list);
    expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  it('should return null for an empty list', () => {
    expect(reverseList(null)).toBeNull();
  });

  it('should return the same single-node list', () => {
    const list = arrayToList([1]);
    const reversed = reverseList(list);
    expect(listToArray(reversed)).toEqual([1]);
  });
});