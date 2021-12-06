const contentNumbers = await Deno.readTextFile("input", "UTF-8");
const inputNumbers = contentNumbers.split(",").map((n) => Number(n));

let nums = [inputNumbers];

for (let i = 0; i < 18; i++) {
  let newNums = [...nums[i]];

  nums[i].forEach((num, numI) => {
    if (num == 0) {
      newNums[numI] = 6;
      newNums.push(8);
    } else {
      newNums[numI]--;
    }
  });

  console.log(newNums.join(","));

  nums.push(newNums);
}

console.log(nums[nums.length - 1].length);
