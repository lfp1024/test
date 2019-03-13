const ab = [1, 2, 3]
const str = ""


function count(i: number, str: string, num: number[]) {

    if (i === num.length) {
        console.log("str = ", str)
        return
    }
    count(i + 1, str, num)
    count(i + 1, str + num[i] + ",", num)
}
count(0,str,ab)