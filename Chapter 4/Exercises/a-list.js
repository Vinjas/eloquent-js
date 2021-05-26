function arrayToList(arr) {
    let list = null
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list}
    }
    return list
}

function listToArray(list) {
    let newArr = []
    for (let node = list; node; node = node.rest) {
        newArr.push(node.value)
    } 
    return newArr
}

function prepend(input, list) {
    return list = {value: input, rest: list}
}

function nth(list, number) {
    let index = 0
    for (let node = list; node; node = node.rest) {
        if (number === index) {
            return node.value
        } else {
            index++
        }
    } 
}

function nthRecursive(list, n) {
    if (!list)
      return undefined;
    else if (n == 0)
      return list.value;
    else
      return nth(list.rest, n - 1);
  }

console.log(arrayToList([10, 20, 30]))
console.log(listToArray(arrayToList([10, 20, 30])))

console.log(prepend(40, arrayToList([10, 20, 30])))
console.log(nth(arrayToList([10, 20, 30]), 2));

/*
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/