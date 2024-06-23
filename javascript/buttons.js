var elem = document.documentElement;

var x = document.getElementById("softwaredropdown");
    x.style.display = "none";

function softwaredrop() {
  var x = document.getElementById("softwaredropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.getElementById('softwarebtn').onclick = function() {
softwaredrop()}