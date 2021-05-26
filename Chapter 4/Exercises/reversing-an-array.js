function reverseArray(arr) {
    let newArr = [];
    for (let element of arr) {
        newArr.unshift(element)
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        let tempElement = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = tempElement
    }
    return arr;
}

console.log(reverseArray(["a", "b", "c"]))

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)