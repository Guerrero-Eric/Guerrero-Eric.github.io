
  function GetCountry() {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
      }
    };
    if (document.getElementById('usa').checked) {
      xhttp.open("GET", "usa.json", true);
      xhttp.send();
    }
    if (document.getElementById('canada').checked) {
      xhttp.open("GET", "canada.json", true);
      xhttp.send();
    }
    if (document.getElementById('russia').checked) {
      xhttp.open("GET", "russia.json", true);
      xhttp.send();
    }
    if (document.getElementById('mexico').checked) {
      xhttp.open("GET", "mexico.json", true);
      xhttp.send();
    }
  
  }

  function readFile() {
// Store XMLHttpRequest in variable
  var xmlhttp = new XMLHttpRequest();
  var text = "";

// Called whenever the readyState attribute changes 
  xmlhttp.onreadystatechange = function() {
  if(this.status == 404){
  
      text = "File Does Not Exist, Please Enter a new File name ";
      
      document.getElementById("filedata").innerHTML =  text;
  }

  else if (this.readyState == 4 && this.status == 200) {
       
    // Parse the JSON string
      var myArr = JSON.parse(this.responseText);
      console.log(myArr.students)

      // formats the string, then outputs the result
      for(i in myArr.students){
      text += "First Name: "  + " "+ myArr.students[i].first + "<br/>" +
      "Last Name: "  + myArr.students[i].last + "<br/>" ;
      for (j in myArr.students[i].address) {
      text += j + ": "+ myArr.students[i].address[j] + "<br>";
      } 
      text += "Major: "  + myArr.students[i].major + "<br/>" +
      "GPA: " + myArr.students[i].gpa + "<br/>" + "<br/>" 
      }
    }
    document.getElementById("filedata").innerHTML =  text;
  };

  // Do the HTTP call using the address variable we specified above
    xmlhttp.open("GET", document.getElementById("file").value, true);
    xmlhttp.send();
  }


  