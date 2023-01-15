class List {
  list = [];

  constructor(list) {
    this.list = [...list];
  }

  insertFirst(item) {
    for (let i = this.list.length; i > 0; i--) {
      this.list[i] = this.list[i - 1];
    }
    this.list[0] = item
  }

  insertLast(item) {
    this.list[this.list.length] = item;
  }
}

const list = new List([1, 2, 3]);

list.insertFirst(4);
list.insertFirst(5);
list.insertLast(6);

console.log(list);
