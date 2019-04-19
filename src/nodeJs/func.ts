let flag = true
let i = 0

async function testNode() {
    i++
    console.log(`0.0 ${i}次调用`)
    await new Promise(res => setTimeout(res, 1000))
    if (!flag) return
    flag = false
    console.log(`第${i}次调用`)
}

async function tep() {
    for (let i = 0; i < 2; i++) {
        await testNode()
        console.log("调用")
    }
    console.log('22222222')
}

async function main() {

    console.log('11111111111')
    await tep()
    console.log('3333333333')
    let i = 0
    while (true) {
        console.log('iiiiiiiiiiiiiii===========', i++)
        await new Promise(res => setTimeout(res, 1000))
    }

}

main()

// (async () => {
//     for (let i = 0; i < 2; i++) {
//         await testNode()
//         console.log("调用")
//     }
//     console.log('22222222')
// })()
// 没有await 顺序执行