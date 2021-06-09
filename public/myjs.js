var buttonPressed = document.getElementById("buttonA");
var display = document.getElementById("displayNumber");
var buttonCounter = 0;
buttonPressed.onclick = function(ev) {
    buttonCounter++;
    console.log(buttonCounter);
    display.innerHTML = "You have clicked " + buttonCounter + " times.";
};