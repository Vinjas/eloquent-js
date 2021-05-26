/*
Write a function arrayToList that builds up a list structure like the one shown 
when given [1, 2, 3] as argument. Also write a listToArray function that produces 
an array from a list. Then add a helper function prepend, which takes an element 
and a list and creates a new list that adds the element to the front of the input 
list, and nth, which takes a list and a number and returns the element at the given 
position in the list (with zero referring to the first element) or undefined when 
there is no such element.
*/

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