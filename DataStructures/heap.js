class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    const BubbleUp = (values) => {
      let index = values.length - 1;
      while (true) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (values[parentIndex] < values[index]) {
          [values[parentIndex], values[index]] = [
            values[index],
            values[parentIndex],
          ];
        } else break;

        index = parentIndex;
      }
    };
    BubbleUp(this.values);
    return this.values;
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length <= 0) return max;
    this.values[0] = end;

    const sinkDown = () => {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild > element) swap = leftChildIdx;
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    };

    sinkDown();

    return max;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(2);
heap.insert(100);
heap.insert(20);
heap.insert(13);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
