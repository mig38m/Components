$(function() {
var cbtn = $(".calcbutton");
var output = $("#digits");
var calRes = "";
var boolswitch = false; //Use boolean as switch mechanism for controlling 0
var boolopswitch = false; //Use bool as switch for continous calculation for operators without = sign
var oplist = ["+","-","*","/"]; 
console.log(cbtn);

//Use loop to create individual class buttons that equivalent
for(var i=0; i < cbtn.length; i++) {

    $(cbtn[i]).click( function(){ //cbtn array is re-wrapped in Jquery $ scope
        var clkvalue = $(this).text();
       //output.text(clkvalue);
       
       if(boolswitch || calRes == "0") { //Clears out results blank to restart entry of calculation & prevent 0 at start as first number 
           boolswitch = false;
           calRes = "";
       }

        if (clkvalue == "+" || clkvalue == "*" || clkvalue == "/" ||clkvalue == "-") {
           if (boolopswitch) {
                boolopswitch = false;
                if (oplist.indexOf(output.text().slice(-1)) > -1) { //if the last character of the calculation is operand
                    calRes = calRes.substring(0, calRes.length-1); //replace the last operand with new operand press
                }
                else {
                     calRes = eval(calRes); //Immediate calculation two numbers between operator  
                }
               
           }       
           boolopswitch = true; //continue accepting operator 
       }


       if(clkvalue == "=") {
           clkvalue = ""; //Prevent = sign showing up 
            if (oplist.indexOf(output.text().slice(-1)) == -1) {
                 calRes = eval(calRes); //Continue finalize calculation eith = sign as there is no other operand at the end 
            }
       
       }
       else if (clkvalue == "C") {
        calRes = 0;
        boolswitch = true; //Assure that when clear is hit, then 0 is displayed as restart
       }
       else {
        calRes=calRes + clkvalue;
       }

    
        output.text(calRes); 
        console.log("Clicked!");
    });
}
});
