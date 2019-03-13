const st: { [index: string]: any } = {
    
    name: "lfp",
    age: 23,
    isOK: true
}

for (const key of Object.keys(st)) {
    console.log(key)    // 打印出属性名
    console.log(st[key]) 
}