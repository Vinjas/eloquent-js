/*
Use the reduce method in combination with the concat method to 
“flatten” an array of arrays into a single array that has all 
the elements of the original arrays.
*/

function flattening(arr) {
    let newArr= [];
    newArr = arr.reduce((acc, cur) => acc.concat(cur), [])
    return newArr;
}

let arrays = [[1, 2, 3], [4, 5], [6], [7, 8]];

console.log(flattening(arrays))
// → [1, 2, 3, 4, 5, 6]