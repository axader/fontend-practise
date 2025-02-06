var minWindow = (s = "ADOBECODEBANC", t = "ABC") => {
  let diff = 0;
  let cnt = Array.from({ length: 128 }, () => 0); //ascii 128
  for (let i = 0; i < t.length; i++) {
    console.log(t[i].charCodeAt());
    // if(cnt[t[i].charCodeAt()] === 0 )
  }
};
console.log(minWindow());
