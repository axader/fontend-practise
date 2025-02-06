var maxArea = (height = [1, 8, 6, 2, 5, 4, 8, 3, 7]) => {
  let res = 0;
  const n = height.length;
  let p1 = 0,
    p2 = n - 1;
  while (p1 < p2) {
    const now = Math.min(height[p1], height[p2]) * (p2 - p1);
    res = Math.max(now, res);
    if (height[p1] < height[p2]) p1++;
    else p2--;
  }
  return res;
};
console.log(maxArea());
