var color = "red";

const obj = {
  color: "green",
  getColor() {
    var color = "black";
    console.log(this.color);
  },
};

const getColor = obj.getColor;
obj.getColor();
getColor();


const arr = [];
arr[0] = 1
arr[2] = 2;
arr.a = 3;
console.log(arr.length);
console.log(Object.prototype.toString.call(1));