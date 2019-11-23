function myFunction() {
    document.getElementById("message").innerHTML = "Hello World";
}

function forLoop() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        text += "Hello World!" + " ";
     }
     document.getElementById('output').innerHTML = text;//output to html body

    }

    function whileLoop(){
        var text = "";
        i = 0;   
        while (i < 5) {
        text += "Hello World!" + " ";
        i++;
      }
      //output to html body
      document.getElementById('output2').innerHTML = text;
    }
        
    function whileDoLoop(){
    
            var text = "";
            var x = 0;
    
            do{
    
                text += x + " ";
                x = x + 5;
                document.getElementById('output3').innerHTML = text;//output to html body
    
            } 
            while (x<=50) //stops loop at 50
        }
    
    

   
    function ifFunction() {
        var d = new Date();
        var hour = d.getHours();
        if (hour < 10) {
            document.write("Good Morning\n");
            }
            else if (18 < hour < 24) {
                document.write("Good night\n");
                }
        else{
            document.write("Good Evening\n");
        }
    }

    function nameSet()

   {

      var myNameAry = ["Eric", "A.", "Guerrero"];

      var fullName = "";

       for (i=0; i < myNameAry.length; i++)

       {

         fullName += myNameAry[i];

         fullName += " ";

       }

      document.getElementById('myname').innerHTML = fullName;
   }