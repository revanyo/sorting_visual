const bubbleSort = (array) => {
  const inner = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        count++;
        let tempOne = array[i];
        let tempTwo = array[i + 1];
        array[i] = tempTwo;
        array[i + 1] = tempOne;
      }
    }
    if (count > 0) {
      inner(array);
    }
  };
  inner(array);
  return array;
};

const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
};

const mergeSort = (array) => {
  const half = Math.floor(array.length / 2);

  if (array.length < 2) return array;

  const left = array.splice(0, half);
  return this.merge(this.mergeSort(left), this.mergeSort(array));
};

const selectSort = (array) => {
  let result = [];
  const inner = (array) => {
    let smallest = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];
      }
    }
    result.push(smallest);
    array.splice(array.indexOf(smallest), 1);
    if (array.length !== 0) {
      inner(array);
    }
  };
  inner(array);
  return result;
};

export { bubbleSort, merge, mergeSort, selectSort };
