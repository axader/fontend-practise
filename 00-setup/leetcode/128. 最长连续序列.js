var longestConsecutive = (nums = [100, 4, 200, 1, 3, 2]) => {
  const set = new Set(nums);
  let res = 0;
  for (let v of set) {
    if (!set.has(v - 1)) {
      let cnt = 0;
      while (set.has(v + cnt)) cnt++;
      res = res > cnt ? res : cnt;
    }
  }
  return res;
};
console.log(longestConsecutive());
