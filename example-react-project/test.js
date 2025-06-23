const counter = {
    count: 0,
    increment(newCount) {
        this.count += newCount
        console.log(this.count)
    }
}

counter.increment(1)
counter.increment(3)
counter.increment(5)


const counter2 = (newCount) => {
    let count = 0;
    return count + newCount
}

console.log(counter2(1))
console.log(counter2(3))
console.log(counter2(5))
