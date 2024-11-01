/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeTwoLists (list1, list2) {
  //set up a dummy linked list (but we won't use this first node)
  let dummy = new ListNode();
  //in order to reassign the "next" value, we want to keep track of the last node we pointed to
  let prev = dummy;
  //go through each list until you get to an end
  while (list1 && list2){
    //reassign the "next" to whichever node has the lowest value, then move the pointer down the list that was used
      if (list1.val > list2.val){
          prev.next = list2;
          list2 = list2.next;
      } else {
          prev.next = list1;
          list1 = list1.next;
      }
      prev = prev.next;
  }
  //once you reach the end of one, assign the rest of the current list to the rest of the remaining given list
  prev.next = list1 || list2;
  return dummy.next;
};