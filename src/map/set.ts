let pets = new Set(["cat", "dog"])
console.log(pets.size)
// pets["species"] = "nammals"
pets.add("ss")

for (const pet in pets) {
    console.log("Ddd")
    console.log("key = ", pet)
}

// for (const pet of pets) {
//     console.log("value = ", pet)
// }


