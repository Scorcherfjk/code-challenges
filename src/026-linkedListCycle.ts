/*
 * OUTPUT: Detectar si una lista enlazada contiene un ciclo
 * ALGORITMO: Dos punteros rápido y lento (Floyd) para detectar una vuelta
 * SKILL: Linked List + Two Pointers
 */
import { ListNode } from "./utils/ListNode";

export function hasCycle(head: ListNode | null): boolean {
    // Solucion 1 - Funcional - O(n)
    // const seen = new Set();
    // if (!head) return false;

    // let current = head;
    // while(current) {
    //     if (seen.has(current)) {
    //         return true;
    //     }
    //     seen.add(current);
    //     current = current.next;
    // }

    // return false;

    // Solucion O(1)    
    let slow = head;
    let fast = head; 

    while (fast && fast.next) {
        // El rapido avanza el doble de rapido que el lento
        slow = slow!.next; 
        fast = fast.next!.next;

        // Si se encuentran, la unica explicacion es que 
        if (fast === slow) {
            return true;
        }
    }

    return false;
};