import * as fs from "fs"

async function upload() {
    // 图片要用 base64编码
    const res = fs.readFileSync("/home/lfp/Pictures/11.png",{ encoding: "base64" })
    console.log("Res = ", res.length)
    // 指定的文件夹要事先创建，如果没有不会自己创建
    fs.writeFileSync("./picture/11.png",res,{ encoding: "base64" })
}

upload()