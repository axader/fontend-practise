var findAnagrams = (s = "cbaebabacd", p = "abc") => {
  const n = s.length;
  const std = "a".charCodeAt();
  const res = [];
  const cnt = Array.from({ length: 26 }, () => 0);
  let diff = 0;
  if (s.length < p.length) return res;

  for (let i = 0; i < p.length; i++) cnt[p[i].charCodeAt() - std]--;
  for (let i = 0; i < p.length; i++) cnt[s[i].charCodeAt() - std]++;
  for (let i = 0; i < 26; i++) if (cnt[i] !== 0) diff++;
  if (diff === 0) res.push(0);

  for (let i = p.length; i < s.length; i++) {
    cnt[s[i].charCodeAt() - std]++;
    if (cnt[s[i].charCodeAt() - std] === 1) diff++;
    else if (cnt[s[i].charCodeAt() - std] === 0) diff--;

    cnt[s[i - p.length].charCodeAt() - std]--;
    if (cnt[s[i - p.length].charCodeAt() - std] === -1) diff++;
    else if (cnt[s[i - p.length].charCodeAt() - std] === 0) diff--;

    if (diff === 0) res.push(i - p.length + 1);
  }
  return res;
};
console.log(findAnagrams());
