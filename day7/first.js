const contentNumbers = await Deno.readTextFile("input", "UTF-8");
const crabPositions = contentNumbers.split(",").map((n) => Number(n));

const outComes = []

for(let i = 0; i < 999; i++){
    let sum = 0;
    crabPositions.forEach((pos) => {
        sum += Math.abs(pos - i);
    })
    outComes.push(sum);
}

let lowestOutcome = outComes[0];

outComes.forEach(outcome => {
    if(outcome < lowestOutcome) lowestOutcome = outcome;
})

console.log(outComes, lowestOutcome)
