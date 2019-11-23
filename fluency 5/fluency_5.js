
 const testObject = {
  name: "Eric Guerrero",
  location: "Rexburg, Idaho",
  major: "Software Engineering",
}

//Object//
//save object
function save() {
  if (typeof (Storage) !== "undefined") {
      var colorIn = document.getElementById('name');
      localStorage.setItem("input", colorIn.value);
  } else {
      var output = "I am sorry your browser doesn't support local storage.";
      document.getElementById("outputName").innerHTML = output;
  }
}
//display object
function show() {
  var colorOut = localStorage.getItem("input");
  document.getElementById("outputName").innerHTML = "Value retrieved: " + localStorage.getItem("input");
}

// Check browser support
if (typeof(Storage) !== "undefined") {

    // Store
    localStorage.setItem('user', JSON.stringify(testObject));

    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem('user');

    localStorage.removeItem('name');

  } 

  else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  

//Array//
//save array
function saveArray() {
  if (typeof (Storage) !== "undefined") {
      var one = document.getElementById("One").value;
      var two = document.getElementById("Two").value;
      var three = document.getElementById("Three").value;
      var listArray = [one, two, three];
      var listArrayString = JSON.stringify(listArray);
      localStorage.setItem("listArray", listArrayString);
      console.log(listArrayString);
  } else {
      var output = "I am sorry your browser doesn't support local storage.";
      document.getElementById("arrayOutput").innerHTML = output;
  }
}
//display array
function displayArray() {
  var list = localStorage.getItem("listArray");
  console.log(list);
  var listArray = JSON.parse(list);
  console.log(listArray);
  var number = parseFloat(document.getElementById('arrayNum').value);
  var output = listArray[number];
  document.getElementById("arrayOutput").innerHTML = output;
}

//Associative Array//
//save Associative Array
function saveAssocArray() {
  if (typeof (Storage) !== "undefined") {
      var nameIn = document.getElementById("name").value;
      var foodIn = document.getElementById("food").value;
      var musicIn = document.getElementById("music").value;
      var movieIn = document.getElementById("movie").value;
      var hobbyIn = document.getElementById("hobby").value;
      var array = {
          name: nameIn,
          food: foodIn,
          music: musicIn,
          movie: movieIn,
          hobby: hobbyIn
      };
      console.log(array)
      var assocArrayString = JSON.stringify(array);
      localStorage.setItem("assocArray", assocArrayString);
  } else {
      var output = "I am sorry your browser doesn't support local storage.";
      document.getElementById("assocArrayOutput").innerHTML = output;
  }
}
//display Associative array
function displayAssocArrayValue() {
  var getArray = localStorage.getItem("assocArray");
  console.log(getArray);
  var favoriteArray = JSON.parse(getArray);
  console.log(favoriteArray);
  var nameSaved = favoriteArray.name;
  var foodSaved = favoriteArray.food;
  var musicSaved = favoriteArray.music;
  var movieSaved = favoriteArray.movie;
  var hobbySaved = favoriteArray.hobby;
  console.log(nameSaved, foodSaved, musicSaved, movieSaved, hobbySaved);
  document.getElementById("nameOutput").innerHTML = nameSaved;
  document.getElementById("foodOutput").innerHTML = foodSaved;
  document.getElementById("musicOutput").innerHTML = musicSaved;
  document.getElementById("movieOutput").innerHTML = movieSaved;
  document.getElementById("hobbyOutput").innerHTML = hobbySaved;
}

