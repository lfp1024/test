function a(){

    try{
        throw new Error("my error")
    }catch(e){
        // console.log("0.0 " + e.message) // 0.0 my error（不打印调用栈信息）
        // console.log("0.0 " + e)         // 0.0 Error: my error（不打印调用栈信息）
        // console.log("0.0", e)           // 0.0 Error: my error（打印调用栈信息）
        // console.error("0.0",e)          // 0.0 Error: my error（打印调用栈信息）
    }

}

function b(){

    try{
        throw "my error"                    // 不能打印出调用栈
    }catch(e){
        console.log("0.0 " + e.message)     // 0.0 undefined（直接 throw 字符串，不能点 message）
        console.log("0.0",e)                // 0.0 my error
        console.log(e)                      // my error
        console.error(e)                    // my error
    }

}

// a()
b()