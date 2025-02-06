var moveZeroes = (nums = [0, 1, 0, 3, 12]) => {
  const n = nums.length;
  let p1 = 0,
    p2 = 0;
  while (p2 < n) {
    if (nums[p2] !== 0) {
      nums[p1] = nums[p2];
      p1++;
    }
    p2++;
  }
  while (p1 < n) {
    nums[p1] = 0;
    p1++;
  }
  return nums;
};
console.log(moveZeroes());
