let container = document.querySelector(".chess")
let row1 = document.getElementById("a")
let row2 = document.getElementById("b")
let row3 = document.getElementById("c")
let row4 = document.getElementById("d")
let row5 = document.getElementById("e")
let row6 = document.getElementById("f")
let row7 = document.getElementById("g")
let row8 = document.getElementById("h")
let containerChildren = document.querySelector(".chess").children
let whitep = {
    King: '♔',
    Queen: "♕",
    Rook: "♖",
    Bishop: "♗",
    Knight: "♘",
    Pawn: ""

}
let blackp = {
    King: "♚",
    Queen: "♛",
    Rook: "♜",
    Bishop: "♝",
    Knight: "♞",
    Pawn: "♟",
}
let alpha = [" ", '1', '2', '3', '4', '5', '6', '7', '8']
for (let l = 1; l < 9; l++) {
    let col1 = document.createElement("div")
    col1.className = "col-1"
    col1.id = alpha[l] + a
    numcol1 = col1.id.match(/\d+/)[0]
    row1.appendChild(col1)
    let count = numcol1 % 2
    if (count === 0) {
        if (col1.id === count == 0)
            col1.style.backgroundColor = "gray"
    }
    if (col1.id === "1[object HTMLDivElement]") {
        col1.textContent = "♜"

    }
    if (col1.id === "2[object HTMLDivElement]") {
        col1.textContent = "♞"

    }
    if (col1.id === "3[object HTMLDivElement]") {
        col1.textContent = "♝"

    }
    if (col1.id === "4[object HTMLDivElement]") {
        col1.textContent = "♛"

    }
    if (col1.id === "5[object HTMLDivElement]") {
        col1.textContent = "♚"

    }
    if (col1.id === "6[object HTMLDivElement]") {
        col1.textContent = "♝"

    }
    if (col1.id === "7[object HTMLDivElement]") {
        col1.textContent = "♞"

    }
    if (col1.id === "8[object HTMLDivElement]") {
        col1.textContent = "♜"

    }


}
for (let l = 1; l < 9; l++) {
    let col2 = document.createElement("div")
    col2.className = "col-1"
    col2.id = alpha[l] + a
    numcol2 = col2.id.match(/\d+/)[0]
    row2.appendChild(col2)
    let count = numcol2 % 2
    if (count === 0) {
        if (col2.id === count == 0)
            col2.style.backgroundColor = "wheat"
    }
    col2.textContent = "♟"
}
for (let l = 1; l < 9; l++) {
    let col3 = document.createElement("div")
    col3.className = "col-1"
    col3.id = alpha[l] + a
    numcol3 = col3.id.match(/\d+/)[0]
    row3.appendChild(col3)
    let count = numcol3 % 2
    if (count === 0) {
        if (col3.id === count == 0)
            col3.style.backgroundColor = "gray"
    }
}
for (let l = 1; l < 9; l++) {
    let col4 = document.createElement("div")
    col4.className = "col-1"
    col4.id = alpha[l] + a
    numcol4 = col4.id.match(/\d+/)[0]
    row4.appendChild(col4)
    let count = numcol4 % 2
    if (count === 0) {
        if (col4.id === count == 0)
            col4.style.backgroundColor = "wheat"
    }
}
for (let l = 1; l < 9; l++) {
    let col5 = document.createElement("div")
    col5.className = "col-1"
    col5.id = alpha[l] + a
    numcol5 = col5.id.match(/\d+/)[0]
    row5.appendChild(col5)
    let count = numcol5 % 2
    if (count === 0) {
        if (col5.id === count == 0)
            col5.style.backgroundColor = "gray"
    }
}
for (let l = 1; l < 9; l++) {
    let col6 = document.createElement("div")
    col6.className = "col-1"
    col6.id = alpha[l] + a
    numcol6 = col6.id.match(/\d+/)[0]
    row6.appendChild(col6)
    let count = numcol6 % 2
    if (count === 0) {
        if (col6.id === count == 0)
            col6.style.backgroundColor = "wheat"
    }

    col6.onclick = function move() {

    }

    ;
}
for (let l = 1; l < 9; l++) {
    let col7 = document.createElement("div")
    col7.className = "col-1"
    col7.id = alpha[l] + a
    numcol7 = col7.id.match(/\d+/)[0]
    row7.appendChild(col7)
    let count = numcol7 % 2
    if (count === 0) {
        if (col7.id === count == 0)
            col7.style.backgroundColor = "gray"
    }
    col7.textContent = "♙"




}
for (let l = 1; l < 9; l++) {
    let col8 = document.createElement("div")
    col8.className = "col-1"
    col8.id = alpha[l] + a
    numcol8 = col8.id.match(/\d+/)[0]
    row8.appendChild(col8)
    let count = numcol8 % 2
    if (count === 0) {
        if (col8.id === count == 0)
            col8.style.backgroundColor = "wheat"
    }
    if (col8.id === "1[object HTMLDivElement]") {
        col8.textContent = "♖"
    }
    if (col8.id === "2[object HTMLDivElement]") {
        col8.textContent = "♘"

    }
    if (col8.id === "3[object HTMLDivElement]") {
        col8.textContent = "♗"

    }
    if (col8.id === "4[object HTMLDivElement]") {
        col8.textContent = "♕"

    }
    if (col8.id === "5[object HTMLDivElement]") {
        col8.textContent = "♔"

    }
    if (col8.id === "6[object HTMLDivElement]") {
        col8.textContent = "♗"

    }
    if (col8.id === "7[object HTMLDivElement]") {
        col8.textContent = "♘"

    }
    if (col8.id === "8[object HTMLDivElement]") {
        col8.textContent = "♖"
    }


}
setInterval(function() {
    let r = document.getElementById("1[object HTMLDivElement]")
    let r2 = document.getElementById("2[object HTMLDivElement]")
    r.onclick = function() {
        r2.textContent = "0"
    }
}, 1000);
