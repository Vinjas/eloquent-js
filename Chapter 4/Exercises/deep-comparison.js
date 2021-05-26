/*
Write a function deepEqual that takes two values and returns true only if they 
are the same value or are objects with the same properties, where the values of 
the properties are equal when compared with a recursive call to deepEqual.
*/

function deepEqual(a, b) {
    if(typeof(a) === "object" && typeof(b) === "object") {
        let objProp1 = Object.keys(a)
        let objProp2 = Object.keys(b)
        let value = 0;

        for (let i = 0; i < objProp1.length; i++) {
            if (deepEqual(a[objProp1[i]], b[objProp2[i]])) {
                value++
            }
        }
        if (value === objProp1.length) {
            return true
        } 

    } else if (a === b) {
        return true
    }

    return false
 
}

let obj = {here: {is: "an"}, object: 2};
let obj2 = {here: {is: "an"}, object: 2}
console.log(deepEqual(obj, {here: {is: "and"}, object: 2}));
// → false
console.log(deepEqual(obj, obj2))
// → true
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual({here: {is: "and"}, object: 3}, {here: {is: "and"}, object: 1}));
// → false