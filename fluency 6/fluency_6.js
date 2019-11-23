// create a new paragraph with text
function createElem() {
  var para = document.createElement("p");
  var node = document.createTextNode("This is a new paragraph element you just created!");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);
}

  function appendFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("appendChild()");
    node.appendChild(textnode);
    document.getElementById("myAppendList").appendChild(node);
  }

  function insertFunction() {
    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("insertBefore()");
    newItem.appendChild(textnode);
  
    var list = document.getElementById("myInsertList");
    list.insertBefore(newItem, list.childNodes[0]);
  }

  function removeFunction() {
    var list = document.getElementById("myRemoveList");
    list.removeChild(list.childNodes[0]);
  }