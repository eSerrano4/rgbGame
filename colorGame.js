let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#newColors");
let modeButtons = document.querySelectorAll(".mode");

init()

function init() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }

    for (let i = 0; i < squares.length; i++) {
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

    reset();
}




function reset() {
    colors = generateRandomColors(numSquares);
    //pick new random color
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
    for (let i = 0; i < squares.length; i++) {
        // add color to squares
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "dodgerblue";
}


resetButton.addEventListener("click", function () {
    reset();
})

colorDisplay.textContent = pickedColor;



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