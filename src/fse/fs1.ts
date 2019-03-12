import fse from "fs-extra"

// fse.writeJson("data/xx.json", { a: 1, b: 3 })
fse.appendFile("data/vv.txt", `${JSON.stringify({ a: 1, b: 3 })}\n`)