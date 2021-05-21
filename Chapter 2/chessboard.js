/*
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the grid 
there is either a space or a "#" character. 

The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/
function chessboard(size) {
    let lineEven = " ";
    let lineOdd = "#";

    // Define lines width
    for (let counter = 0; counter < size - 1; counter++) {
        if(counter % 2 === 0) {
            lineEven += "#"
            lineOdd += " "
        } else {
            lineEven += " "
            lineOdd += "#"
        }
    }
    // Define lines height
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            console.log(lineEven)
        } else {
            console.log(lineOdd)
        }         
    }
}

function chessboardOneLine(size) {
    let board = "";
    for (let y = 0; y < size; y++) {
        for (x = 0; x < size; x++) {
            if ((x + y) % 2 === 0) {
                board += " "
            } else {
                board += "#"
            }
        }
        board += "\n"
    }
    console.log(board)
}



//chessboard(2)
chessboardOneLine(5)