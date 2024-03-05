// Get a reference to the input element with the id 'inputBox'
let input = document.getElementById('inputBox');

// Get all the button elements on the page
let buttons = document.querySelectorAll('button');

// Initialize an empty string to store the user's input and calculations
let string = "";

// Convert the 'buttons' NodeList into an array for easier manipulation
let arr = Array.from(buttons);

// Loop through each button element and add a click event listener
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // This code attaches a click event listener to each button element.

        if (e.target.innerHTML == '=') {
            // If the button's text content is '=', it means the user wants to calculate the result.

            // It evaluates the mathematical expression stored in 'string'.
            string = eval(string);

            // Then, it displays the result in the input box.
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            // If the button's text content is 'AC', it means the user wants to clear everything.

            // So, it clears the 'string'.
            string = "";

            // And it empties the input box.
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            // If the button's text content is 'DEL', it means the user wants to delete the last character.

            // It removes the last character from the 'string'.
            string = string.substring(0, string.length - 1);

            // And it updates the input box without the last character.
            input.value = string;
        } else {
            // For all other buttons (numbers and operators), it means the user is inputting something.

            // It appends the clicked button's text content to the 'string'.
            string += e.target.innerHTML;

            // And it updates the input box with the updated 'string'.
            input.value = string;
        }
    })
})