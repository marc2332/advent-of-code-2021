const content = await Deno.readTextFile("input", "UTF-8")

const input = content.split('\n').map(l => {
    const [dir, n] = l.split(' ');
    return [dir, Number(n)]
})

class Submarine{

    depth = 0;
    horizontal = 0;
    aim = 0;

    up(n){
        this.aim -= n;
    }
    down(n){
        this.aim += n;
    }
    forward(n){
        this.horizontal += n;
        this.depth += this.aim * n;
    }
}

let sub = new Submarine();

input.forEach(([ dir, n]) => {
    sub[dir](n)
})

console.log(sub, sub.depth * sub.horizontal)