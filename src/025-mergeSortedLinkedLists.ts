/*
 * OUTPUT: Combinar dos listas enlazadas ordenadas en una sola lista ordenada
 * ALGORITMO: Fusionar las listas con dos punteros avanzando por cada lista
 * SKILL: Linked List
 */
import { ListNode } from "./utils/ListNode";

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  // Creamos nuestra linkedList para meter los valores ordenados
  let dummy = new ListNode();
  // Y creamos nuestras variable para recorrenla
  let current = dummy;

  // mientras Ambos tengan valores, vamos metiendo
  while (list1 && list2) {
    // linkeamos y avanzamos
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    // Al final avanzamos para no sobreescribir
    current = current.next;
  }

  // si quedo remanente de alguna, entonces la vinculamos
  if (list1 !== null) {
    current.next = list1;
  }
  if (list2 !== null) {
    current.next = list2;
  }

  // retornamos el next para saltarnos el nodo fantasma que se crea al instanciar
  return dummy.next;
}
