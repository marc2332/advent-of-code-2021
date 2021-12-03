const content = await Deno.readTextFile("input", "UTF-8")

const input = content.split('\n');

class Submarine{
    power = 0;
}

let sub = new Submarine();

function foundBits(mostCommon){
    let selectedNumbers = input;
    for(let column = 0; column < input[0].length -1; column++){
        const commonNums = { "0": [], "1": []}
        selectedNumbers.forEach((bits) => {
            const bit = bits[column];
            commonNums[bit].push(bits)
        })

        if(selectedNumbers.length == 1) return selectedNumbers

        const isZeroMoreCommon = commonNums["0"].length > commonNums["1"].length;

        if(mostCommon){
            selectedNumbers = isZeroMoreCommon ? commonNums["0"] : commonNums["1"]
        } else {
            selectedNumbers = isZeroMoreCommon ? commonNums["1"] : commonNums["0"]
        }
        
    }
    return selectedNumbers;
}

const oxygen = parseInt(foundBits(true), 2 );
const co2 = parseInt(foundBits(false), 2 );

console.log(oxygen * co2)