const contentNumbers = await Deno.readTextFile("input", "UTF-8");
const crabPositions = contentNumbers.split(",").map((n) => Number(n));

const outComes = []

for(let i = 0; i < 600; i++){
    let sum = 0;
    crabPositions.forEach((pos) => {
        const diff = Math.abs(pos - i);
        let cost = new Array(diff+1).fill(0).reduce((v, c, i) => {
            return v+i
        },0)
        sum += cost;
    })
    outComes.push(sum);
}

let lowestOutcome = outComes[0];

outComes.forEach(outcome => {
    if(outcome < lowestOutcome) lowestOutcome = outcome;
})

console.log(lowestOutcome)
