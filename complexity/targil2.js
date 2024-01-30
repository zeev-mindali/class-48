class MyArray {
  constructor() {
    this.myArray = [];
    this.length = 0;
  }

  addToQueue = (item) => {
    //O(1)
    this.myArray[this.length] = item;
    this.length++;
  };

  removeFromQueue = () => {
    //O(1)
    if (this.length === 0) {
      return;
    }
    this.length--;
  };

  getLength = () => {
    //O(1)
    return this.length;
  };

  isEmpty = () => {
    //O(1)
    return this.length === 0;
  };

  getItems = ()=>{
    //O(n)
    let returnArray = [];
    for (let index=0;index<this.length;index++){
        returnArray[index]=this.myArray[index];
    }
    return returnArray;
  }

}
