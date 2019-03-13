const lfo = {
    name: "lfp",
    age: 2,
    gf: {
        name: "ss",
        age: 5
    }
}

function r() {
    return lfo
}

console.log(lfo === r())
function c() {
    const rr = r()
    rr.age = 44
    rr.gf.age = 55
    console.log("lfo = ",lfo)
}
c()

// return 是引用传递，浅拷贝
// true
// lfo =  { name: 'lfp', age: 44, gf: { name: 'ss', age: 55 } }