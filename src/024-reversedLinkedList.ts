/*
 * OUTPUT: Revertir una lista enlazada
 * ALGORITMO: Recorrer la lista y cambiar los enlaces de siguiente en cada nodo
 * SKILL: Linked List
 */
import { ListNode } from "./utils/ListNode";

export function reverseList(head: ListNode | null): ListNode | null {
    
    let prevNode = null;
    let currentNode = head;

    // Mientras el actual no sea null,
    // porque significara que ya no hay nodos pendiente
    while (currentNode !== null) {
        // Guardamos el nodo siguiente para no perderlo
        const nextNode = currentNode.next;

        // cambiamos la direccion de la flecha del siguiente al anterior (de -> a <-)
        currentNode.next = prevNode;
        
        // marcamos el actual como el anterior 
        // y avanzamos al siguiente que teniamos en memoria.
        prevNode = currentNode;
        currentNode = nextNode;
    }
    
    // retornamos el anterior, ya que ocupara la posicion del nuevo head.
    return prevNode;
};