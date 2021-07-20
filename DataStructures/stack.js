//Last in first out - LIFO
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let current = this.first;
      this.first = newNode;
      this.first.next = current;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  print() {
    var current = this.first;
    var arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
console.log(stack.pop());
console.log(stack.push(6));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

stack.print();
