// global variables

const container = document.querySelector("#container");  // this container will include all the user generated divs
let squareDiv;  // this is the standard div that will be replicated n times as per user's input
let userInput;  // this is the number of squares per side as per user's input


// this function takes in input the number of squares per side inputted by the user and create a square grid using that number

function createGrid(a) {
    for (let i=1; i<=a**2; i++) {
        squareDiv = document.createElement("div");
        squareDiv.classList.toggle("standard");
        squareDiv.style.width = 960/a + "px";
        squareDiv.style.height = 960/a + "px";
        container.appendChild(squareDiv);
    }
}


// this function asks the user how many squares per side to generate

function getInput() {
    userInput = parseInt(prompt("How many squares per side you want?","squares per side max 100"));
    return userInput;

}


// MAIN PROGRAM

getInput();

createGrid(userInput);

const gridDivs = Array.from(document.querySelectorAll(".standard"));  // array with all the divs to which an event listener has to be added

// 1st method: adding a background color to the divs using JS and the event function
/*gridDivs.forEach( gridDiv => gridDiv.addEventListener("mouseenter", function(e) {
    e.target.style.background = "lightskyblue";
}));
*/

// 2nd method: adding a background color to the divs using CSS and adding a class
gridDivs.forEach(gridDiv => gridDiv.addEventListener("mouseenter", () => gridDiv.classList.add("entered")));