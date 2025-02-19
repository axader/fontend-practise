var twoSum = function (nums = [3, 2, 4], target = 6) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else map.set(target - nums[i], i);
  }
};
console.log(twoSum());
