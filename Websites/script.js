

function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    var emailError = document.getElementById("emailError");
    var submitButton = document.getElementById("submitButton");

    // Regular expression pattern to validate email format
    var emailPattern = /^[A-Za-z0-9._%+-]+@(gmail\.com|aol\.com|yahoo\.com)$/;

    if (email === "") {
        emailError.textContent = "Please enter an email address.";
        emailError.style.display = "block";
        submitButton.disabled = true;
        submitButton.style.opacity = 0.5;
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        emailError.style.display = "block";
        submitButton.disabled = true;
        submitButton.style.opacity = 0.5;
        setTimeout(function() {
            emailError.style.transition = "opacity 3s";
            emailError.style.opacity = 0;
            setTimeout(function() {
                emailError.style.display = "none";
                submitButton.disabled = false;
                submitButton.style.opacity = 1;
                emailError.style.transition = ""; // Reset the transition property
                emailError.style.opacity = 1;
            }, 3000); // Delay for 3 seconds before enabling the button and resetting the opacity
        }, 100); // Delay for 1 second before starting the transition
        return false;
    }

    emailError.style.display = "none";
    submitButton.disabled = true;
    submitButton.style.opacity = 0.5;

    setTimeout(function() {
        window.location.href = "redirect.html"; // Redirect to the specified HTML page
    }, 1000); // 1 second delay before redirecting

    return true;
}

