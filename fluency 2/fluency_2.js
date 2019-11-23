
function animal() {  
    this.name = 'Scar'; 
} 

function
tiger() { 
    animal.call(this); 
} 
   
tiger.prototype = Object.create(animal.prototype);  
const example = new tiger(); 
   
document.getElementById('objectCall').innerHTML = example.name;

var animalA = function() {}; 

          animalA.prototype.initialize = function(type, age)
          {
              this.type = type;
              this.age = age;
          }
          
          
          var animalB = function() {};
          animalB.prototype = new animalA();
          
          animalB.prototype.skill = function(subject)
          {
              document.getElementById('inherit').innerHTML= "This " + this.type + " is " + this.age +
               " years old, and it just learned " + subject;
          }
          
          var me = new animalB();
          
          me.initialize("Tiger", 2);
          me.skill("jump.");

          
          var txt = '{"name" : "Adam" , "email" : "adm@gmail.com" , "contact" : "555-555-5555"}';
            
          var parsedtxt = JSON.parse(txt);
  
          document.getElementById('parsed').innerHTML = parsedtxt.name + ", " + parsedtxt.email;