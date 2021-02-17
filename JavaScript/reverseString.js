// TODO: Reverse String
// Given a string, return the reverse of that string
const string = "letterkenny"

// * Method 1: for + .join
const reverseString1 = (string) => {
    let stringArr = string.split("")
    let reversedArr = []
    for (let i = string.length - 1; i >= 0; i--) {
        reversedArr.push(stringArr[i])
    }
    return reversedArr.join("")
}

console.log(reverseString1(string))