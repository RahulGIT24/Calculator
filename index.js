//! This function displays value 
function display(val) {
  document.getElementById("output").value += val;
}
//! This function solves the euation
function solveQuery() {
  let x = document.getElementById("output").value;
  let y = eval(x);
  document.getElementById("output").value = y;
}
//! This function clears the display
function clearScreen() {
  document.getElementById("output").value = "";
}

function back() {
    var value = document.getElementById("output").value;
    document.getElementById("output").value = value.substr(0, value.length - 1);
}

