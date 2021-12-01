const content = await Deno.readTextFile("input", "UTF-8")
const input = content.split('\n').map(number => Number(number))

const retrieveSum = (where, all) => {
    return all.reduce((val, num, i) => {
        if(i >= where && i < where + 3) {
            return val + num;
        }
        return val
    } , 0)
}

const increasedNumbersCount = input.reduce((count, number, index, numbers) => {
    if(index > 0){
        const prevNumber = retrieveSum(index - 1, numbers);
        const currentNumber = retrieveSum(index, numbers);

        if (prevNumber < currentNumber) {
            return count + 1;
        }
    }
    return count
}, 0)

console.log(increasedNumbersCount)