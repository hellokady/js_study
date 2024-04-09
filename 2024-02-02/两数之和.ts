function getPosition(list: number[], total: number) {
  const map = new Map();

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const remain = total - item;

    if (map.has(item)) {
      return [map.get(item), i];
    } else {
      map.set(remain, i);
    }
  }

  return -1;
}

console.log(getPosition([1, 2, 3], 4));
