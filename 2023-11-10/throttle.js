function throttle(fn, wait) {
  let pre = 0;
  return function (...args) {
    let now = Date.now();
    if (now - pre >= wait) {
      fn.call(this, ...args);
      pre = now;
    }
  };
}

export default throttle;
