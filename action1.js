function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["adr"].value;
    var z = document.forms["myForm"]["city"].value;
    var a = document.forms["myForm"]["state"].value;
    var b = document.forms["myForm"]["zip"].value;
    
  if (x == "" ) {
    alert("INVALID FORM: Please fill out your name!");
       document.getElementById('fname').style.borderColor = "red";   
    return false;
  }
    if (y == "" ) {
    alert("INVALID FORM: Please fill out your address!");
         document.getElementById('adr').style.borderColor = "red";   
    return false;
  }
    if (z == "" ) {
    alert("INVALID FORM: Please fill out the city!");
         document.getElementById('city').style.borderColor = "red";   
    return false;
  }
    if (a == "" ) {
    alert("INVALID FORM: Please fill out the state!");
         document.getElementById('state').style.borderColor = "red";   
    return false;
  }
    if (b == "" ) {
    alert("INVALID FORM: Please fill out the zipcode!");
         document.getElementById('zip').style.borderColor = "red";   
    return false;
  }
} 

function validateForm2() {
  var x = document.forms["myForm"]["fname"].value;
var y = document.forms["myForm"]["adr"].value;
    
    
  if (x == "" ) {
    alert("INVALID FORM: Please fill out all Required Fields (*)");
      document.getElementById('fname').style.borderColor = "red";   
    return false;
  }
    if (y == "" ) {
    alert("INVALID FORM: Please fill out all Required Fields (*)");
      document.getElementById('adr').style.borderColor = "red";   
    return false;
  }
} 