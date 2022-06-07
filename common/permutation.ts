// permutations = 순열, 순서가 중요함

/* javascript */
function permutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map(permutation => [v, ...permutation]);
    res.push(...attach);
  });
  return res;
}

/* typescript */
function permutationWithType<T>(arr: T[], num: number): T[][] {
  const res = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((v: T, idx: number, arr: T[]) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation: T[]) => [v, ...permutation]);
    res.push(...attach);
  });

  return res;
}

console.log(permutation([1, 2, 3], 2));
console.log(permutationWithType<number>([1, 2, 3], 2));
