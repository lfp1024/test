import * as fs from "fs"
import * as crypto from "crypto"

async function upload() {
    // 图片要用 base64编码
    const res = fs.readFileSync("/home/lfp/Pictures/1.png",{ encoding: "base64" })
    console.log("Res = ", res.length)

    const hash = crypto.createHash("md5")
    const imageMd5 = hash.update(res).digest("hex")
    console.log("imageMd5 = ", imageMd5)

    // 指定的文件夹要事先创建，如果没有不会自己创建
    fs.writeFileSync(`./picture/${imageMd5}.png`,res,{ encoding: "base64" })
}

upload()