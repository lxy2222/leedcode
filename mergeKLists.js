/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 使用分治法
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
var mergeKLists = function(lists) {
  let amounts = lists.length;
  for (let i = 0; i < amounts; i++) [
    lists[i] = arrToListNode(lists[i])
  ]
  if (amounts === 0) return lists;
  let interval = 1;
  while (interval < amounts) {
    for (let i = 0; i <= amounts - interval; i += interval * 2) {
      lists[i] = merge2Lists(lists[i], lists[i + interval])
    }
    interval = interval * 2
  }
  console.log(listToArr(lists[0]))
  return lists[0];
};
let merge2Lists = (p1, p2) => {
let head = new ListNode(0);
let point = head;
while (p1 && p2) {
  if (p1.val <= p2.val) {
    point.next = p1;
    p1 = p1.next;
  } else {
    point.next = p2;
    p2 = p2.next;
  }
  point = point.next
}
if (p1) {
  point.next = p1
} else if (p2) {
  point.next = p2
}
return head.next;
}
console.log(mergeKLists([]))