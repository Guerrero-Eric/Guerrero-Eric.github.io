
    var txt = '{"name" : "Adam" , "email" : "adm@gmail.com" , "contact" : "555-555-5555"}';
    var parsedtxt = JSON.parse(txt);
    document.getElementById('parsed').innerHTML = parsedtxt.name + ", " + parsedtxt.contact;
   


    var books = {
        title : 'javascript novice to ninja' ,
        year : "2017" ,
        edition : 2
    };
    var stringifytxt = JSON.stringify(books);
    document.getElementById('stringifyCall').innerHTML = stringifytxt;


/*
    var value = { name: "Logan", age: 21, location: "London" };
    var result = JSON.stringify(value);

    var value = ["Logan", 21, "Peter", 24]; 
    var result = JSON.stringify(value); 
    document.write("value of result = " + result + "<br>"); 
    document.write("type of result = " + typeof result); 
*/