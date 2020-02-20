let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#newColors");

resetButton.addEventListener("click", function () {
    //generate new colors
    colors = generateRandomColors(6);
    //pick new random color
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        // add color to squares
        squares[i].style.backgroundColor = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // add color to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listener to square
    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    })

}

let changeColors = (color) => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

function generateRandomColors(num) {
    //create array
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    // pick red 0-255
    let red = Math.floor(Math.random() * 256);
    // pick green 0-255
    let green = Math.floor(Math.random() * 256);
    // pick blue 0-255
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}