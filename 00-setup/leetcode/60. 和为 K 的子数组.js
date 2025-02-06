var subarraySum = (nums = [1, 2, 3], k = 3) => {
  let res = 0;
  const pre = Array.from({ length: nums.length }, () => 0);
  const map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    if (i !== 0) pre[i] += nums[i] + pre[i - 1];
    else pre[i] += nums[i];

    //pre[0...j] - pre[0...i] = k
    if (map.has(pre[i] - k)) res += map.get(pre[i] - k);
    map.set(pre[i], (map.get(pre[i]) || 0) + 1);
  }

  return res;
};
console.log(subarraySum());
