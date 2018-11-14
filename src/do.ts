export class aa {
    name = "lfp"
    age: number

    constructor(arg: string) {
        this.age = 26
    }

    public get _name(): string {
        return this.name
    }

    getNasssme() {
        return this.age = 16
    }
}

const obj = new aa("")

const res = obj.getNasssme()
console.log("Res = ", res)
console.log("ddddddd ", obj.age)

console.log(Object.keys(obj)) // [ 'name', 'age' ]