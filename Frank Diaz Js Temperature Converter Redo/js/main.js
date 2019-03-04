// Frank Diaz, DIG 2106C, Professor William Hackeny

// Set up a 'use strict'

'use strict';

// Set up a function to input the farenheit conversion values onto the DOM
function getCelsius(value) {

//Set up a variable that calls out the fheit div from the DOM
var fheitInput = document.getElementById("fheitInput").value;

// Set up a variable containing the temperature conversion values
var fToc = (fheitInput - 32) * (5 / 9);

// Set up a pattern variable that only allows numbers to be typed
var celsiusPattern = new RegExp('^\\d+$');

// Set up a submit variable set to true that will be used in the error message below
var submit = true;

// Display the conversion on the DOM
document.getElementById("cOutput").innerHTML = "The temperature entered " + fheitInput + " fahrenheit, which converts to " + fToc.toFixed(3) + " celsius.";
    
// Set up an error if the user doesn't type anything into the text field
if (fheitInput == null || fheitInput == "") {
    
    // Display error message onto the DOM
    document.getElementById("cOutput").innerHTML = "Please enter a number value.";
    submit = false;
    
    // Write an "else if" that displays an error if the user types non numerical values
} else if (!/^[0-9]+$/.test(fheitInput)){
    document.getElementById("cOutput").innerHTML = "Please enter number values ONLY.";
}
    
    return submit;
}

// Repeat the above, but this time for converting celsius to fahrenheit
function getFheit(value) {
    
    var cInput = document.getElementById("cInput").value;
    
    var cTof = (cInput * (9 / 5)) + 32;
    
    var fheitPattern = new RegExp('^\\d+$');
    
    var submit = true;
  
    document.getElementById("fOutput").innerHTML = "The temperature entered " + cInput + " celsius, which converts to " + cTof.toFixed(3) + " fahrenheit.";
    
      
    if (cInput == null || cInput == "") {
        document.getElementById("fOutput").innerHTML = "Please enter a number value.";
        submit = false;
    } else if (!/^[0-9]+$/.test(cInput)){
    document.getElementById("fOutput").innerHTML = "Please enter number values ONLY.";
}
    
    return submit;
}


/* UNUSED CODE
    
// Set up an event handler that displays the output live on a textfield
fheitInput.addEventListener("input", function() {
  fheitOutput.textContent = fheitInput.value;
});
//}

// Repeat all of the above, but this time for converting Celsius into Farenheit

var cInput = document.getElementById("cInput").value;

var cToF = (cInput * (9 / 5)) + 32;

var cOutput = document.getElementById("fOutput");

cInput.addEventListener("input", function() {
  cOutput.textContent = cInput.value;
})

END OF UNUSED CODE */