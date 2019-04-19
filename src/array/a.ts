const a1 = new Array(...[1, 2, 3])
const iterator = a1[Symbol.iterator]()
iterator.return = function re(arg) {
    return {
        done: true,
        value: arg
    }
}
let iteratorResult = iterator.next()
while (iteratorResult.done === false) {
    console.log(iteratorResult.value)
    const rr = iterator.return("aloha")
    console.log(rr.done, rr.value)
    iteratorResult = iterator.next()
}
// 1
// true 'aloha'
// 2
// true 'aloha'
// 3
// true 'aloha'