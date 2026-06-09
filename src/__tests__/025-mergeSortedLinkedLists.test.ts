import { describe, it, expect } from 'vitest';
import { mergeTwoLists } from '../025-mergeSortedLinkedLists';
import { arrayToList, listToArray } from './listHelpers';

describe('mergeTwoLists', () => {
  it('should merge two sorted lists into one sorted list', () => {
    const list1 = arrayToList([1, 2, 4]);
    const list2 = arrayToList([1, 3, 4]);
    const merged = mergeTwoLists(list1, list2);
    expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it('should return the non-empty list when the other list is null', () => {
    const list1 = arrayToList([1, 3, 5]);
    expect(listToArray(mergeTwoLists(list1, null))).toEqual([1, 3, 5]);
  });

  it('should return null when both lists are null', () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });
});