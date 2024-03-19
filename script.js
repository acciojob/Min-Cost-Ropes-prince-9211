function mincost(arr)
{ 
//write your code here
	function mincost(arr) {
    let minCost = 0;
    
    // Create a min heap
    let heap = new MinHeap(arr);
    
    // While there is more than one rope left in the heap
    while (heap.size() > 1) {
        // Extract the two smallest ropes from the heap
        let rope1 = heap.extractMin();
        let rope2 = heap.extractMin();
        
        // Calculate the cost of connecting these two ropes and add it to the total cost
        let cost = rope1 + rope2;
        minCost += cost;
        
        // Add the newly formed rope back to the heap
        heap.insert(cost);
    }
    
    return minCost;
}

// MinHeap implementation
class MinHeap {
    constructor(arr) {
        this.heap = [];
        if (arr) {
            arr.forEach((item) => this.insert(item));
        }
    }

    size() {
        return this.heap.length;
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) {
                break;
            }
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.size() === 0) {
            return null;
        }
        if (this.size() === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return min;
    }

    sinkDown(index) {
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;
            if (left < this.size() && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.size() && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}

// Example usage:
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33

// return the min cost
  
}

module.exports=mincost;
