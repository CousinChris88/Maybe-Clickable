var buttonPressed = document.getElementById("buttonA");
var display = document.getElementById("displayNumber");
var buttonCounter = 0;
buttonPressed.onclick = function(ev) {
    buttonCounter++;
    console.log(buttonCounter);
}
highscore = localStorage.getItem("localscore");
document.querySelector("#displayNumber span").innerHTML = highscore;
//apachectl restart to open server