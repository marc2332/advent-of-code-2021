const content = await Deno.readTextFile("input", "UTF-8")

const input = content.split('\n');

class Submarine{
    power = 0;
}

let sub = new Submarine();

let commonNumbers = []
let leastNumbers = []

for(let column = 0; column < input[0].length -1; column++){
    const commonNums = { "0": 0, "1": 0}
    input.forEach((bits) => {
        const bit = bits[column];
        commonNums[bit]++;
    })
    const isZeroMoreCommon = commonNums["0"] > commonNums["1"];
    commonNumbers[column] = isZeroMoreCommon ? "0" : "1";
    leastNumbers[column] = isZeroMoreCommon ? "1" : "0";
}

const gamma = parseInt(commonNumbers.join(''), 2 )
const epsilon = parseInt(leastNumbers.join(''), 2 )

sub.power = gamma * epsilon;

console.log(sub)