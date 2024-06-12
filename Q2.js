function validateForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let birthDate = document.getElementById('birthDate').value;
    let email = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirmEmail').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let mobileNumber = document.getElementById('mobileNumber').value;

    let nameRegex = /^[A-Za-z]+$/;
    let mobileRegex = /^\d{10}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /(?=^.{8,32}$)(?=.*\d{2})(?=.*[~!@#$%^&*()_+-=])(?=.*[A-Z])/;
    // 
    // /^(?=.[A-Z])(?=.\d{2,})(?=.[!@#$%^&])[A-Za-z\d!@#$%^&*]{8,32}$/

    if (!nameRegex.test(firstName)) {
        alert("First name must contain only letters.");
        return false;
    }
    if (!nameRegex.test(lastName)) {
        alert("Last name must contain only letters.");
        return false;
    }

    
    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return false;
    }
    if (email !== confirmEmail) {
        alert("Emails do not match.");
        return false;
    }

    
    if (!passwordRegex.test(password)) {
        alert("Password must start with a capital letter, contain at least two numbers, one special character, and be 8-32 characters long.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    
    if (!mobileRegex.test(mobileNumber)) {
        alert("Mobile number must be 10 digits.");
        return false;
    }

    if (!birthDate) {
        alert("Please enter your birth date.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
