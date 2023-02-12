function diagonalDifference(arr) {
  let ld = 0;
  let rd = 0;
  for (let i = 0; i < arr.length; i++) {
      ld += arr[i][i];
      rd += arr[i][arr.length - 1 - i];
  }
  return Math.abs(ld - rd);
}