Array.prototype.forEach = function forEach(callback, context) {
  let self = this,
    i = 0,
    len = self.length;
  context = context == null ? globalThis || window : context;
  for (; i < len; i++) {
    typeof callback === "function"
      ? callback.call(context, self[i], i, self)
      : null;
  }
};

[1, 2, 3].forEach((item, i, arr) => {
  console.log(item, i, arr);
});
