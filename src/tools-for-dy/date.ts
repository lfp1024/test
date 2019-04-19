function getMSecTimeByDate(date: number) {
    const time = new Date()
    time.setDate(date)
    time.setHours(0, 0, 0, 0)
    const specifiedTime = time.getTime()
    console.log(specifiedTime)
    // const r = (specifiedTime - Date.now()) / (1000 * 60 * 60)
    // console.log(r )
    return specifiedTime
}

getMSecTimeByDate(13)


1554998400000
1555084800000