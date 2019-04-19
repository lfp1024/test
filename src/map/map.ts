const m = new Map()
m.set("a",1)
m.set("b",2)

const m1 = m.values()
console.log("m1 = ",m1)

const r1 = m1.next()
console.log("r1.done = ",r1.done)
console.log("r1.value = ",r1.value)
const r2 = m1.next()
console.log("r2.done = ",r2.done)
console.log("r2.value = ",r2.value)
const r3 = m1.next()
console.log("r3.done = ",r3.done)
console.log("r3.value = ",r3.value)


console.log("m1 = ",m1)