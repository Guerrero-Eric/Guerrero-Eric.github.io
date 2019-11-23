

  function changeBG(el,clr) {
      var elem = document.getElementById(el);
      elem.style.transition = "background 1.0s linear 0s";
      elem.style.background = clr;
  }

  function fadeOut(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "opacity 1.0s linear 0s";
    elem.style.opacity = 0;
}

function fadeIn(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "opacity 1.0s linear 0s";
    elem.style.opacity = 1;
}

function slideIn(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "left 0.5s ease-in 0s";
    elem.style.left = "0px";
}

growing.onclick = function() {
    this.style.fontSize = '50px';
    this.style.color = 'red'; 
};


function ani(){
    document.getElementById('something').className ='classname';
    }