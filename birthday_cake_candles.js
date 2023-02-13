function birthdayCakeCandles(candles) {
  const max = Math.max(...candles);
  let sum = 0;
  for (let i = 0; i < candles.length; i++) {
      if (candles[i] === max) {
          sum++;
      }
  }
  return sum;
}