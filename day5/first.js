const contentNumbers = await Deno.readTextFile("input", "UTF-8");
const inputNumbers = contentNumbers.split("\n").map((line) => {
    return line.split('->').map(numbers => {
        let nums = numbers.split(',')
        if (Number(nums[0]) == null) console.log("OMG")
        return { x: Number(nums[0]), y: Number(nums[1]) }
    })
});

const table = new Array(999).fill(0).map(line => new Array(999).fill(0))

inputNumbers.forEach(([from, to]) => {
    const isHorizontal = from.y == to.y;
    const isVertical = from.x == to.x;
    if (isHorizontal) {
        if (from.x > to.x) {
            for (let i = to.x; i <= from.x; i++) {
                if (table[from.y] == null) console.log(from, i)
                table[from.y][i]++;
            }
        } else {
            for (let i = from.x; i <= to.x; i++) {
                table[from.y][i]++;
            }
        }
    } else if (isVertical) {
        if (from.y > to.y) {
            for (let i = to.y; i <= from.y; i++) {
                table[i][from.x]++;
            }
        } else {
            for (let i = from.y; i <= to.y; i++) {
                table[i][from.x]++;
            }
        }
    }
})

function seekOverlaps() {
    let foundLargerThan2 = 0;
    table.forEach(row => {
        row.forEach((number) => {
            if (number >= 2) {
                foundLargerThan2++;
            }
        })
    })
    return foundLargerThan2;
}

console.log(table.map(line => line.join(' ')), seekOverlaps())