/*
Write a function min that takes two arguments and returns their minimum.
*/

function min(a, b) {
    if(a < b) {
        return a
    } else {
        return b
    }
}

//console.log(min(5, 1))

const minim = (a, b) => a > b ? b : a;

console.log(minim(-52, -42))