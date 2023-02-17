function getTotalX(a, b) {
  let count = 0;
  let maxA = Math.max(...a);
  let minB = Math.min(...b);
  for (let i = maxA; i <= minB; i++) {
    if (a.every((e) => i % e === 0) && b.every((e) => e % i === 0)) {
      count++;
    }
  }
  console.log(count);
}

getTotalX([2, 4], [16, 32, 96]);