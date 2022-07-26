class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {

    // Your code here
    return this.data[index];

  }

  push(val) {

    // Your code here
    if (this.length === this.capacity) { this.resize() }
    this.data[this.length] = val;
    this.length++;

  }


  pop() {

    // Your code here
    let removed = this.data[this.length - 1];

    this.data[this.length - 1] = undefined;
    this.length--

    return removed;

  }

  shift() {

    // Your code here
    let removed = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }

    this.length--;
    return removed;
  }

  unshift(val) {

    // Your code here
    if (this.capacity === this.length) { this.resize() }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1];
    }

    this.data[0] = val;
    this.length++;
  }

  indexOf (val) {

    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) { return i }
    }

    return -1;

    // Your code herethis
  }

  resize () {

    // Your code here
    let resized = new Array(this.capacity * 2);

    for (let i = 0; i < this.data.length; i++) {
      resized[i] = this.data[i];
    }

    this.data = resized;
    this.capacity *= 2;

  }

}
let dynamicArr = new DynamicArray();

console.log(dynamicArr[1]);
module.exports = DynamicArray;
