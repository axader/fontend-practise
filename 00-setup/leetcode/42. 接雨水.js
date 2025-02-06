var trap = (height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) => {
  let res = 0;
  const l = Array.from({ length: height.length }, () => 0);
  const r = Array.from({ length: height.length }, () => 0);
  l[0] = height[0];
  r[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) l[i] = Math.max(height[i], l[i - 1]);

  for (let i = height.length - 2; i >= 0; i--)
    r[i] = Math.max(height[i], r[i + 1]);

  console.log(l, r);
  for (let i = 0; i < height.length; i++) {
    if (height[i] < l[i] && height[i] < r[i]) {
      res += Math.min(l[i], r[i]) - height[i];
    }
  }

  return res;
};
console.log(trap());
