/*
Write a higher-order function loop that provides something like a for 
loop statement. It takes a value, a test function, an update function, 
and a body function. 
*/

function loop(value, test, update, body) {
    let start = value;
    while(test(start)) {
        body(start)
        start = update(start)
    }
}

loop(5, n => n > 0, n => n + 1, console.log);