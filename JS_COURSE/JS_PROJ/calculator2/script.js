
// inputObtained = document.querySelector('.text');


// btnData = document.querySelector('#btn');

// btnData.addEventListener('click', function() {
    
//     inputObtained.value += this.innerText;

// });


// script.js

// const inputObtained = document.querySelector('.text');
// const allButtons = document.querySelectorAll('.btn');
// const equalsButton = document.querySelector('#equalsBtn'); // Get the new equals button

// // Loop through each button to add its text to the display
// allButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         const buttonText = button.innerText;

//         if (buttonText === 'C') { // Special logic for 'C' (Clear) button
//             inputObtained.value = '';
//         } else {
//             inputObtained.value += buttonText;
//         }
//     });
// });

// // Add event listener for the "Equals" button
// equalsButton.addEventListener('click', function() {
//     try {
//         // Get the expression from the input field
//         const expression = inputObtained.value;
        
//         // Use eval() to calculate the result
//         const result = eval(expression); // !!! BE CAREFUL WITH eval() !!!
        
//         // Display the result in the input field
//         inputObtained.value = result;
//     } catch (error) {
//         // If there's an error in the expression (e.g., "5++4")
//         inputObtained.value = 'Error';
//         console.error("Calculation error:", error);
//     }
// });


// const display = document.getElementById("display");
// const buttons = document.querySelectorAll(".btn");

// let currentInput = "";  //string

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const value = button.textContent;

//         if (value === "C") {
//             currentInput = "";
//             display.value = "";
//         } 
//         else if (value === "=") {
//             try {
//                 currentInput = eval(currentInput).toString();
//                 display.value = currentInput;
//             } catch (error) {
//                 display.value = "Error";
//                 currentInput = "";
//             }
//         } 
//         else {
//             currentInput += value;
//             display.value = currentInput;
//         }
//     });
// });


const input = document.querySelector(".text");
const buttons = document.querySelectorAll(".btn"); // all
const equalsBtn = document.querySelector("#equalsBtn");

// handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let value = e.target.innerText;

        if (value === "C") {
            input.value = "";  // clear input
        } else if (value === "=") {
            try {
                input.value = eval(input.value); // evaluate expression
            } catch {
                input.value = "Error";
            }
        } else {
            input.value += value; // append button value
        }
    });
});

// handle pressing Enter key inside input
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        try {
            input.value = eval(input.value);
        } catch {
            input.value = "Error";
        }
    }
});
