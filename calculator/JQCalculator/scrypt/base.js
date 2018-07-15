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

       if(clkvalue == "=") {
        calRes = eval(calRes); //Eval NOT recommended! but essential for this version of the project
        boolswitch = true; //Act as confirmation calculation end
       }
       else if (clkvalue == "C") {
        calRes = 0;
        boolswitch = true; //Assure that when clear is hit, then 0 is displayed as restart
       }
       else {
        calRes=calRes + clkvalue;
       }

       if( boolopswitch) { //automatically calculate numbers with operator in between of them
           boolopswitch = false;
           calRes = eval(calRes);
       }

       if (clkvalue == "+" || clkvalue == "*" || clkvalue == "/" ||clkvalue == "-") {
           boolopswitch = true; //continue accepting operator 
       }

        output.text(calRes); 
        console.log("Clicked!");
    });
}
});
