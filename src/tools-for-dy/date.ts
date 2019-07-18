function getMSecTimeByDate(date: number) {
    const time = new Date()
    time.setDate(date)
    time.setHours(0, 0, 0, 0)
    const specifiedTime = time.getTime()
    console.log(specifiedTime)
    const r = (Date.now() - specifiedTime) / (1000 * 60 * 60) + ""
    const zs = parseInt(r)
    const xs = (+r) - zs
    console.log("整数 = ", zs)
    console.log("小数 = ", xs)
    console.log("时间 = ",zs + ":" + xs * 60)
    return specifiedTime
}

getMSecTimeByDate(12)


1554998400000
1555084800000