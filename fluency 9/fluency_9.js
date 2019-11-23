function change(val) {
    alert("The text in the input field says: " + val);
}

document.getElementById("kdown").onkeydown= function() {keydown()};
function keydown() {
    document.getElementById("kdown").style.backgroundColor="pink";
}

function loadFunction() {
    alert("Page is loaded");
  }

  function touchFunction() {
      document.getElementById("touch").innerHTML="The touchstart event has occurred";
  }