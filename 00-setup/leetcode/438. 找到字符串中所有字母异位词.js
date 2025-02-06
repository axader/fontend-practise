var findAnagrams = (s = "aa", p = "bb") => {
  const res = [];
  let p1 = 0,
    p2 = 0;
  if (s.length < p.length) return res;

  let diff = 0;
  const cnt = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < p.length; i++) {
    cnt[p[i].charCodeAt() - "a".charCodeAt()]--;
  }

  while (p2 - p1 + 1 < p.length) {
    cnt[s[p2].charCodeAt() - "a".charCodeAt()]++;
    p2++;
  }
  cnt[s[p2].charCodeAt() - "a".charCodeAt()]++;

  for (let i = 0; i < 26; i++) {
    if (cnt[i] !== 0) diff++;
  }

  if (!diff) res.push(0);

  while (p2 + 1 < s.length) {
    p1++, p2++;
    cnt[s[p1 - 1].charCodeAt() - "a".charCodeAt()]--;
    if (cnt[s[p1 - 1].charCodeAt() - "a".charCodeAt()] === -1) diff++;
    else if (cnt[s[p1 - 1].charCodeAt() - "a".charCodeAt()] === 0) diff--;

    cnt[s[p2].charCodeAt() - "a".charCodeAt()]++;
    if (cnt[s[p2].charCodeAt() - "a".charCodeAt()] === 1) diff++;
    else if (cnt[s[p2].charCodeAt() - "a".charCodeAt()] === 0) diff--;

    if (!diff) res.push(p1);
  }
  return res;
};
console.log(findAnagrams());
