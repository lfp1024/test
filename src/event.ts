import { EventEmitter } from "events"

const ee = new EventEmitter()
ee.once("once", function (foo, bar) {
    console.log("foo = " + foo + " bar = " + bar);
})
console.log("第一次")
ee.emit("once", "lfp", "dsb")
console.log("第二次")
const res2 = ee.emit("once", "lfp", "dsb")
console.log("res2 = ", res2)
console.log("第三次")
const res3 = ee.emit("once", "lfp", "dsb")
console.log("res3 = ", res3)
