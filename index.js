//! This function displays value 
function display(val) {
  document.getElementById("output").value += val;
  let click = new Audio('audio/mixkit-plastic-bubble-click-1124.wav');
  click.play();
}
//! This function solves the euation
function solveQuery() {
  let x = document.getElementById("output").value;
  let y = eval(x);
  document.getElementById("output").value = y;
  let click = new Audio('audio/mixkit-quick-win-video-game-notification-269.wav');
  click.play();
}
//! This function clears the display
function clearScreen() {
  document.getElementById("output").value = "";
  let click = new Audio('audio/mixkit-plastic-bubble-click-1124.wav');
  click.play();
}

function back() {
    var value = document.getElementById("output").value;
    document.getElementById("output").value = value.substr(0, value.length - 1);
    let click = new Audio('audio/mixkit-plastic-bubble-click-1124.wav');
  click.play();
}

