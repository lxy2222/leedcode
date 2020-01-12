/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var arrToListNode = (arr) => {
  let head = null;
  let index = 0;
  let cur = null;
  while (index < arr.length) {
    if (index === 0) {
      head = new ListNode(arr[index]);
      cur = head;
    } else {
      cur.next = new ListNode(arr[index]);
      cur = cur.next
    }
    index ++
  }
  return head;
  // point.next = null;
}
var listToArr = (list) => {
  let res = [];
  let head = list;
  while (head) {
    res.push(head.val)
    head = head.next;
  }
  return res
}
var reverse = function (head, k) {
  head = arrToListNode(head);
  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy.next;
  cur = reverseKGroup(cur, k);
  console.log(listToArr(cur))
  return cur;
}
var reverseKGroup = function(head, k) {
    let cur = head;
    let count = 0;
    let next = null;
    let pre = null;
    let tmp = head;
    let listLen = 0;
    while (tmp) {
      listLen ++;
      tmp = tmp.next;
    }
    if (listLen < k) return head;
    while (cur !== null && count < k) {
      next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
      count++;
    }
    if (next) {
      head.next = reverseKGroup(next, k)
    }
    return pre;
};
let arr = [1,2,3,4,5];
let k = 3
console.log(reverse(arr, k));