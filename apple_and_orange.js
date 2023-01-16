function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesLength = apples.length;
  const orangesLength = oranges.length;
  let applesCounter = 0;
  let orangesCounter = 0;

  const length = applesLength > orangesLength ? applesLength : orangesLength;

  for (let i = 0; i < length; i++) {
    if(applesLength !== i+2) {
      const position = apples[i] + a;
      if(position >= s && position <= t) {
        applesCounter++;
      }
    }
    if(orangesLength !== i+2) {
      const position = oranges[i] + b;
      if(position >= s && position <= t) {
        orangesCounter++;
      }
    }
  }

  return (applesCounter, orangesCounter)
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));