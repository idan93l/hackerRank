function staircase(n) {
  const space = " ";
  const hash = "#";
  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + hash.repeat(i));
  }
}
