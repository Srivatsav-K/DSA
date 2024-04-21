Array.prototype.swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    arr.swap(i, j);
    i++;
    j--;
  }

  return arr;
}

console.log(reverseArray([2, 4, 5, 6, 7, 3]));
