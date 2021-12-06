const contentNumbers = await Deno.readTextFile("input", "UTF-8");
const inputNumbers = contentNumbers.split(",").map((n) => Number(n));

let numis = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
];

inputNumbers.forEach((num) => {
  numis[num]++;
});

for (let i = 0; i < 256; i++) {
  const newNumis = [...numis];
  numis.forEach((num, numI) => {
    switch (numI) {
      case 0:
        newNumis[6] += num;
        newNumis[8] += num;
        newNumis[0] = 0;
        break;
      default:
        newNumis[numI] -= num;
        newNumis[numI - 1] += num;
    }
  });

  numis = newNumis;
}

console.log(numis.reduce((t, n) => t + n, 0));
