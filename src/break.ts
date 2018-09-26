import * as u from "./utils"

async function f() {
    let j = 0
    loop1: while (true) {

        for (let i = 0; i < 5; i++) {
            console.log("i = " + i)
            if (i == 3) break loop1
        }
        console.log("j = " + j++)
        await u.sleep(1000)
    }
}
f()