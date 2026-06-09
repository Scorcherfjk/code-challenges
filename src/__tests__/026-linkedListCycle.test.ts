import { describe, it, expect } from 'vitest';
import { hasCycle } from '../026-linkedListCycle';
import { ListNode } from '../utils/ListNode';

describe('hasCycle', () => {
  it('should return true when the list contains a cycle', () => {
    const node1 = new ListNode(3);
    const node2 = new ListNode(2);
    const node3 = new ListNode(0);
    const node4 = new ListNode(-4);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;

    expect(hasCycle(node1)).toBe(true);
  });

  it('should return false when the list does not contain a cycle', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    node1.next = node2;
    expect(hasCycle(node1)).toBe(false);
  });

  it('should return false for an empty list', () => {
    expect(hasCycle(null)).toBe(false);
  });
});