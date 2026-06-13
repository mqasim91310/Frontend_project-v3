// main.js

document.addEventListener("DOMContentLoaded", () => {
    // --- Counter Functionality ---
    const jsCounterDisplay = document.getElementById("js-counter-display");
    const jsIncrementButton = document.getElementById("js-increment-button");
    const jsDecrementButton = document.getElementById("js-decrement-button");

    let count = 0; // State for the counter

    const updateCounterDisplay = () => {
        if (jsCounterDisplay) {
            jsCounterDisplay.textContent = count;
        }
    };

    if (jsIncrementButton) {
        jsIncrementButton.addEventListener("click", () => {
            count++;
            updateCounterDisplay();
        });
    }

    if (jsDecrementButton) {
        jsDecrementButton.addEventListener("click", () => {
            count--;
            updateCounterDisplay();
        });
    }

    updateCounterDisplay(); // Initialize display

    // --- Form Validation Functionality ---
    const jsUsernameInput = document.getElementById("js-username-input");
    const jsUsernameError = document.getElementById("js-username-error");
    const jsEmailInput = document.getElementById("js-email-input");
    const jsEmailError = document.getElementById("js-email-error");
    const interactiveForm = document.querySelector(".interactive-form");

    const validateUsername = () => {
        if (jsUsernameInput.value.trim() === "") {
            jsUsernameError.textContent = "Username cannot be empty.";
            return false;
        } else if (jsUsernameInput.value.trim().length < 3) {
            jsUsernameError.textContent = "Username must be at least 3 characters.";
            return false;
        } else {
            jsUsernameError.textContent = "";
            return true;
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (jsEmailInput.value.trim() === "") {
            jsEmailError.textContent = "Email cannot be empty.";
            return false;
        } else if (!emailRegex.test(jsEmailInput.value.trim())) {
            jsEmailError.textContent = "Please enter a valid email address.";
            return false;
        } else {
            jsEmailError.textContent = "";
            return true;
        }
    };

    if (jsUsernameInput) {
        jsUsernameInput.addEventListener("blur", validateUsername);
        jsUsernameInput.addEventListener("input", validateUsername);
    }

    if (jsEmailInput) {
        jsEmailInput.addEventListener("blur", validateEmail);
        jsEmailInput.addEventListener("input", validateEmail);
    }

    if (interactiveForm) {
        interactiveForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission
            const isUsernameValid = validateUsername();
            const isEmailValid = validateEmail();

            if (isUsernameValid && isEmailValid) {
                alert("Form submitted successfully!");
                // In a real application, you would send data to a server here
                interactiveForm.reset();
            } else {
                alert("Please correct the form errors.");
            }
        });
    }
});
