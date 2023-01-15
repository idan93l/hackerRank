function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCounter = 0;
  let orangesCounter = 0;

  for (let i = 0; i < apples.length; i++) {
    const position = apples[i] + a;
    if (position >= s && position <= t) {
      applesCounter++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    const position = oranges[i] + b;
    if (position >= s && position <= t) {
      orangesCounter++;
    }
  }

  return orangesCounter, applesCounter;
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));