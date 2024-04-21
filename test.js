Array.prototype.swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

function test(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr.swap(i, j);
      j++;
    }
  }
  return arr;
}

console.log(test([5, 1, 0, 0, 4, 6, 6, 0]));
