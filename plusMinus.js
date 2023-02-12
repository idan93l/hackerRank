function plusMinus(arr) {
  const rat = [0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      rat[0]++;
    } else if (arr[i] < 0) {
      rat[1]++;
    } else {
      rat[2]++;
    }
  }
  return console.log(
    (rat[0] / arr.length).toFixed(6) +
      "\n" +
      (rat[1] / arr.length).toFixed(6) +
      "\n" +
      (rat[2] / arr.length).toFixed(6)
  );
}
