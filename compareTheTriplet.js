function compareTriplets(a, b) {
  const finalArray = [0,0];
  for(let i = 0; i < a.length; i ++) {
      if(a[i] > b[i]) {
          finalArray[0] ++;
      } else if(a[i] < b[i]) {
          finalArray[1] ++;
      }
  }
  return finalArray;
}