var groupAnagrams = function (
  strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
) {
  const map = new Map();
  for (let s of strs) {
    const now = [...s].sort().join("");
    if (map.has(now)) {
      map.get(now).push(s);
    } else map.set(now, [s]);
  }
  return [...map.values()];
};

console.log(groupAnagrams());
