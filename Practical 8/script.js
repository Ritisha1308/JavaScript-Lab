const form = document.getElementById("gymForm");

const nameInput = document.getElementById("name");
const eye = document.getElementById("eye");
const ability = document.getElementById("ability");

function validate() {
    let valid = true;

    // Sabhi error messages ko reset karein
    document.querySelectorAll("small").forEach(x => x.textContent = "");

    // Name Validation
    if (!/^[A-Za-z ]{3,}$/.test(nameInput.value.trim())) {
        document.getElementById("nameError").textContent =
            "Enter a valid name (minimum 3 characters).";
        valid = false;
    }

    // Sex Selection Validation
    if (!document.querySelector('input[name="sex"]:checked')) {
        document.getElementById("sexError").textContent =
            "Select your sex.";
        valid = false;
    }

    // Eye Color Validation
    if (eye.value === "") {
        document.getElementById("eyeError").textContent =
            "Select your eye color.";
        valid = false;
    }

    // Ability Validation
    if (ability.value.trim().length < 10) {
        document.getElementById("abilityError").textContent =
            "Describe your ability (minimum 10 characters).";
        valid = false;
    }

    // Confirmation Checkbox Validation (Alert ki jagah error text show hoga)
    if (!document.getElementById("confirm").checked) {
        const confirmError = document.getElementById("confirmError");
        if (confirmError) {
            confirmError.textContent = "Please confirm the information.";
        }
        valid = false;
    }

    return valid;
}

// Form Submission handling
form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (validate()) {
        document.getElementById("success").textContent =
            "✓ Registration successful!";
    }
});

// Form Reset handling
form.addEventListener("reset", function() {
    setTimeout(() => {
        document.querySelectorAll("small").forEach(x => x.textContent = "");
        document.getElementById("success").textContent = "";
    }, 0);
});