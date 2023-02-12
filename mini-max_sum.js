function miniMaxSum(arr) {
  const sortedArr = arr.sort();
  let sum = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    sum += arr[i];
  }
  console.log(`${arr[0] + sum} ${sum + arr[arr.length - 1]}`);
}
