let flag = true
let i = 0

async function testNode() {
    i++
    console.log(`0.0 ${i}次调用`)
    if (!flag) return
    flag = false
    console.log(`第${i}次调用`)
}

(async () => {
    for (let i = 0; i < 2; i++) {
        testNode()
        console.log("调用")
    }
})()
// 没有await 顺序执行