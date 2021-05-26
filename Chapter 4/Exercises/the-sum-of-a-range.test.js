/*
1. Write a range function that takes two arguments, start and end, and returns an
array containing all the numbers from start up to (and including) end.

As a bonus assignment, modify your range function to take an optional third argument
that indicates the “step” value used when building the array. If no step is given, the
elements go up by increments of one, corresponding to the old behavior.

2. Write a sum function that takes an array of numbers and returns the sum of these numbers.
*/

function range(start, end, step) {
    let arr = [];

    if (step === undefined || step === 0) {
        step = 1
    } else if (step < 0) {
        step = Math.abs(step)
    }
    
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            arr.push(i)
        }
    } else {
        for (let i = start; i >= end; i -= step) {
            arr.push(i)
        } 
    }
    return arr;
}

function sum(arr) {
    let sumArr = 0;
    for (let number of arr) {
        sumArr += number
    }
    return sumArr
}

console.log(range(5, 2, -1));

console.log(range(10, 1, 3));

console.log(sum(range(10, 1, 3)))