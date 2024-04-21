function secondLargest(nums) {
  const deDuplicate = [...new Set(nums)];
  deDuplicate.sort((a, b) => b - a);
  return deDuplicate[1];
  /* let n = nums.length;
  let larg1 = Number.MIN_SAFE_INTEGER;
  let larg2 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let x = nums[i];
    if (x > larg1) {
      larg2 = larg1;
      larg1 = x;
    } else if (x > larg2 && x !== larg1) {
      larg2 = x;
    }
  }
  return larg2; */
}

console.log(secondLargest([5, 1, 4, 6, 6]));
