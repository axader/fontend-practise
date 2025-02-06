var lengthOfLongestSubstring = (s = "abcabcbb") => {
  let res = 0;
  const set = new Set();
  let p1 = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[p1]);
      p1++;
    }
    set.add(s[i]);
    res = Math.max(i - p1 + 1, res);
  }
  return res;
};
console.log(lengthOfLongestSubstring());
