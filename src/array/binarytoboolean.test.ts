// const statusProperty = [
//     "e-stop",
//     "running",
//     "paused",
//     "resetting",
//     "f-elevator",
//     "f-center",
//     "f-window",
//     "ready",
//     "window-opening",
//     "window-opened",
//     "window-closing",
//     "window-closed",
//     "raising",
//     "raised",
//     "dropping",
//     "dropped"
// ]

// const convert = (binary: string): PLCReturnMsg => {

//     const statusArray: PLCReturnMsg = {
//         "e-stop": false,
//         "running": false,
//         "paused": false,
//         "resetting": false,
//         "f-elevator": false,
//         "f-center": false,
//         "f-window": false,
//         "ready": false,
//         "window-opening": false,
//         "window-opened": false,
//         "window-closing": false,
//         "window-closed": false,
//         "raising": false,
//         "raised": false,
//         "dropping": false,
//         "dropped": false
//     }

//     const binaryArray = binary.split("")
//     // console.log("binaryArray = ", binaryArray)

//     let j = 15
//     for (let i = binaryArray.length; i > 0; i--) {
//         // console.log(`binaryArray ${i} = ${binaryArray[i]}`)
//         if (binaryArray[i-1] === "1") statusArray[statusProperty[j]] = true
//         // console.log(`statusArray[${statusProperty[j]}] = ${statusArray[statusProperty[j]]}`)
//         j--
//     }
//     return statusArray
// }

// const goodStatus: PLCReturnMsg[] = []

// for (let index = 0; index < 0x10000; index++) {
//     // console.log(index.toString(2))
//     const status = convert(index.toString(2))
//     try {
//         checkConflict(status)
//         goodStatus.push(status)
//     } catch (error) {
//     }
// }
// console.log("个数 = ", goodStatus.length)
// // console.log("good = ", goodStatus)


// // const index = 65536
// // console.log(index.toString(2))
// // const status = convert(index.toString(2))
// // try {
// //     checkConflict(status)
// //     goodStatus.push(status)
// // } catch (error) {
// //     console.log("catch = ",error.message)
// // }
// // console.log("个数 = ", goodStatus.length)
// // console.log("good = ", goodStatus)





// // const a = "101"
// // const b = a.split("")
// // for (const e of b) {
// //     console.log("b = ", e)
// //     if (e === "1") console.log("Bbbbb")
// // }
