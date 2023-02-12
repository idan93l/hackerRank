const circus = (x1,v1,x2,v2) => {
  let d1 = x1 > x2 ? x1 : x2;
  let d2 = x1 < x2 ? x1 : x2;
  const dif = d1 - d2;
  const s1 = d1 === x1 ? v1 : v2;
  const s2 = d2 === x2 ? v2 : v1;
  while(d1 > d2) {
    d1+=s1;
    d2+=s2;
    if(d1 - d2 === dif || d1 - d2 > dif) {
      break;
    }
  }
  return d1 === d2 ? 'YES' : 'NO'
}

console.log(circus(0,3,4,2));