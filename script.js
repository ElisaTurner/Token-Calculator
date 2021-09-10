function processEntries() {
    var cents = document.getElementById("cents").value;
    if(cents >=0 && cents <=100){
 makeChange(cents);
    }
    else{
        alert("Please enter between 0 and 100");
        document.getElementById("quarters").value = "";
 document.getElementById("dimes").value = "";
 document.getElementById("nickels").value = "";
 document.getElementById("pennies").value = "";
    }
 }
 
 function makeChange (cents) {
    var quarters = parseInt(cents / 20);
    cents = cents % 20;
    var dimes = parseInt(cents / 10);
        cents = cents % 10;
    var nickels = parseInt(cents / 5);
        cents = cents % 5;
    var pennies = parseInt(cents / 2);
 document.getElementById("quarters").value = quarters;
 document.getElementById("dimes").value = dimes;
 document.getElementById("nickels").value = nickels;
 document.getElementById("pennies").value = pennies;
 }