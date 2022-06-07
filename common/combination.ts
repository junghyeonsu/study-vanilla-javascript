// combination: 조합, 순서를 따지지 않음
function combination(arr, num) {
  const res = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map(combination => [v, ...combination]);
    res.push(...attach);
  });

  return res;
}

function combinationWithType<T>(arr: T[], num: number): T[][] {
  const res = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((v: T, idx: number, arr: T[]) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination: T[]) => [v, ...combination]);
    res.push(...attach);
  });

  return res;
}

console.log(combination([1, 2, 3], 2));
console.log(combinationWithType<number>([1, 2, 3], 2));
