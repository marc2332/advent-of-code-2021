const content = await Deno.readTextFile("input", "UTF-8")
const input = content.split('\n').map(number => Number(number))

const increasedNumbersCount = input.reduce((count, number, index, numbers) => {
    if(index > 0){
        const prevNumber = numbers[index-1]
        if (prevNumber < number) {
            return count + 1;
        }
    }
    return count
}, 0)

console.log(increasedNumbersCount)