const button = document.getElementById("button")

const circle = document.getElementById("circle")
const square = document.getElementById("square")
const rectangle = document.getElementById("rectangle")

const box = document.getElementById("box")

let oldvalue = 0
let numberInTheShape = 1

button.onclick = () => {

    let n = document.getElementById("number").value;
    n = Number(oldvalue) + Number(n)

    for (let j = numberInTheShape; j <= n; j++) {
        var shape = document.createElement("div")
        shape.innerHTML += numberInTheShape
        if (circle.checked) {
            shape.classList.add("circle")
        } else if (square.checked) {
            shape.classList.add("square")
        } else if (rectangle.checked) {
            shape.classList.add("rectangle")

        }

        box.appendChild(shape);
        numberInTheShape++;
        oldvalue = box.lastElementChild.innerHTML
    }
}