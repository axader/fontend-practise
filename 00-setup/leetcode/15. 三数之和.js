var threeSum = (nums = [-1, 0, 1, 2, -1, -4]) => {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i !== 0 && nums[i - 1] === nums[i]) continue;
    let p1 = i + 1,
      p2 = nums.length - 1;
    while (p1 < p2) {
      const now = nums[i] + nums[p1] + nums[p2];
      if (now < 0) p1++;
      else if (now > 0) p2--;
      else {
        res.push([nums[i], nums[p1], nums[p2]]);
        p1++;
        p2--;
        while (nums[p1] === nums[p1 - 1]) p1++;
        while (nums[p2] === nums[p2 + 1]) p2--;
      }
    }
  }
  return res;
};
console.log(threeSum());
