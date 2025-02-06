var maxSlidingWindow = (nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3) => {
  const res = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && nums[i] > nums[deque[deque.length - 1]]) deque.pop();

    deque.push(i);

    if (deque[0] < i - k + 1) deque.shift(0);
    if (i + 1 >= k) res.push(nums[deque[0]]);
  }
  return res;
};
console.log(maxSlidingWindow());
