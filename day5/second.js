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
    const isDiagonal  = !isHorizontal && ! isVertical;
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
    } else if (isDiagonal) {
        if (from.y > to.y) {
            if (from.x > to.x) {
                let x = from.x;
                for (let y = from.y; y >= to.y; y--, x--) {
                    table[y][x]++;
                }
            } else {
                let x = from.x;
                if(x == 5) console.log(from ,to)
                for (let y = from.y; y >= to.y; y--, x++) {
                    table[y][x]++;
                }
            }
        } else {
            if (from.x > to.x) {
                let x = from.x;
                for (let y = from.y; y <= to.y; y++, x--) {
                    table[y][x]++;
                }
            } else {
                let x = from.x;
                for (let y = from.y; y <= to.y; y++, x++) {
                    table[y][x]++;
                }
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