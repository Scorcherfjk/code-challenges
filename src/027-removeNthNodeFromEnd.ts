/*
 * OUTPUT: Eliminar el enésimo nodo desde el final de una lista enlazada
 * ALGORITMO: Usar dos punteros separados por n nodos para encontrar el objetivo
 * SKILL: Linked List + Two Pointers
 */
import { ListNode } from "./utils/ListNode";

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;

    // Tenemos 2 amigos que estan al inicio
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // El amigo rapido se va hacia adelante
    for (let i = 0; i < n; i++) {
        fast = fast!.next;
    }

    // si el amigo rapido terminó, significa que no hay nadie mas que sacar que el primero
    if (fast === null) {
        return head.next;
    }

    // Ambos amigos avanzan al mismo ritmo hasta que el rapido llegue al final
    while (fast?.next) {
        slow = slow!.next;
        fast = fast.next;
    }

    // ahora sacamos al que esta delante del lento, que es el que no queremos
    slow!.next = slow!.next!.next;

    return head;

};