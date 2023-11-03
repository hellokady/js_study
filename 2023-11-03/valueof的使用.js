class Car {
  constructor(color, cost) {
    this.color = color;
    this.cost = cost;
  }
  valueOf() {
    return this.cost;
  }
}

const car1 = new Car('红色', 100);
const car2 = new Car('蓝色', 200);

const total1 = car1.cost.valueOf() + car2.cost.valueOf();
const total2 = car1 + car2;

console.log(total1);
console.log(total2);
console.log(car1, car2);