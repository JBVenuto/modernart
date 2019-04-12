// Variables that are used
const colors = ["#B2BD7E", "#E9D985", "#749C75", "#6A5D7B", "#5D4A66", "#FFA630", "#4DA1A9", "#2E5077", "#611C35", "#7FB069",
                "#CA3C25", "#E6AA68", "#D56AA0", "#A64253", "#861657", "#F5CAC3", "#083D77", "#2E4057", "#F4D35E", "#F6D8AE",
                "white", "white", "white", "black", "black", "black", "black", "black",];
const elements = Math.floor(Math.random() * 42) + 4;
const x = Math.floor(Math.random() * 23) +3;
// Variable that will be the HTML code
let gridHtml = "<div class='grid' style='display:grid;grid-template-columns:";

// Function to select a color
let colorSelector = () => {
    let i = Math.floor(Math.random() * 30);
    return i;
}

//Function to set column and row span
let randomSpan = () => {
    let j = Math.floor(Math.random() * 3) + 1;
    return j;
}

// Code to build HTML
// Build CSS to auto format the columns
for (i = 1; i <= x; i++) {
    gridHtml += " auto"
}
gridHtml += "'>"

// Build the cells HTML
for (i = 0; i <= elements; i++) {
    let cell = `<div class="cell" style="background-color:${colors[colorSelector()]}; grid-column:span ${randomSpan()}; grid-row:span ${randomSpan()}"></div>`;
    gridHtml += cell;
}
gridHtml += "</div>";

console.log(gridHtml);

// Function to print the generated HTML/CSS on the DOM
printFunction = () => {
    document.getElementById("gridContainer").innerHTML = gridHtml;
}

// Event listener for when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    printFunction();
})