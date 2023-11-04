let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
document.addEventListener('keydown', function(event) {
    if (event.key >= 0 && event.key <= 9) { // Numbers
        string += event.key;
    } else if (event.key === 'Backspace' && !event.shiftKey) {
        // Only trigger delete when Shift is not pressed
        string = string.substring(0, string.length - 1);
    } else if (event.key === 'Enter') {
        // Try to evaluate the expression and catch any errors
        try {
            string = eval(string).toString();
        } catch (e) {
            console.error(e);
            string = ""; // Optionally reset the string on error
        }
    } else if (['/', '*', '-', '+', '%'].includes(event.key)) {
        string += event.key;
    } else if (event.key === 'Backspace' && event.shiftKey) {
        // Clear everything if Shift + Backspace is pressed
        string = "";
    }
    input.value = string; // Update the display after every key press
});

input.addEventListener('keyup', function(event) {
    // This prevents any default action associated with the Enter key
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});
