// Used moment.js
var currentDay = $("#currentDay");
var a = moment().format('MMMM Do YYYY, h:mm a')
currentDay.text(a)

// Used jQuery to select all the buttons
var btnEl = $(".btnStyle")
// Used jQuery to select all the inputs
var inputsEl = $("input")


//function to take in inputs
function updateValues() {
    //Used local storage
    var savedInputs = JSON.parse(localStorage.getItem("savedInputs")) || ["", "", "", "", "", "", "", "", "",];

    for (let i = 0; i < inputsEl.length; i++) {
        const element = inputsEl[i];
        element.value = savedInputs[i];
    }
}

btnEl.on("click", function(){
    var newInputs = [];
    //Used a for loop in order to push the inputted logs
    for (let i = 0; i < inputsEl.length; i++) {
        const element = inputsEl[i];
        newInputs.push(element.value)
        //updating local storage
        localStorage.setItem("savedInputs", JSON.stringify(newInputs))
    }
})

updateValues();

var whatToDo = $('.whatToDo')

