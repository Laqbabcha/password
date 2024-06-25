var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("str");

var lengthCondition = document.getElementById("length");
var numberCondition = document.getElementById("number");
var specialCondition = document.getElementById("special");
var uppercaseCondition = document.getElementById("uppercase");

pass.addEventListener('input', () => {
    const password = pass.value;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/g; // 'g' to find all matches
    const hasUpperCase = /[A-Z]/;

    let specialCharCount = (password.match(hasSpecialChar) || []).length;

    // Check length condition
    if (password.length >= 8) {
        lengthCondition.classList.add("met");
    } else {
        lengthCondition.classList.remove("met");
    }

    // Check number condition
    if (hasNumber.test(password)) {
        numberCondition.classList.add("met");
    } else {
        numberCondition.classList.remove("met");
    }

    // Check special character condition
    if (specialCharCount >= 3) {
        specialCondition.classList.add("met");
    } else {
        specialCondition.classList.remove("met");
    }

    // Check uppercase condition
    if (hasUpperCase.test(password)) {
        uppercaseCondition.classList.add("met");
    } else {
        uppercaseCondition.classList.remove("met");
    }

    // Display the message box
    if (password.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    // Determine password strength
    if (password.length >= 8 && hasNumber.test(password) && specialCharCount >= 3 && hasUpperCase.test(password)) {
        str.innerHTML = "Strong";
        str.style.color = "green";
        pass.style.border = "2px solid green";
    } else {
        str.innerHTML = "Weak";
        str.style.color = "red";
        pass.style.border = "2px solid red";
    }
});

function togglePassword() {
    var passwordInput = document.getElementById("password");

    // Toggle between password and text type
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
