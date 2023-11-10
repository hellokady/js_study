function debounce(fn, wait, immediate) {
  let timer = null;

  return function (...args) {
    if (timer) clearTimeout(timer);

    if (immediate && !timer) {
      fn.call(this, ...args);
    }

    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, wait);
  };
}

export default debounce;
