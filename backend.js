form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateStep(currentStep)) {
        // Send data to PHP
        fetch("Submit.php", {
            method: "POST",
            body: new FormData(form)
        })
        .then(res => res.text())
        .then(data => {
            if (data.trim() === "success") {
                currentStep = formSteps.length - 1;
                showStep(currentStep);
            } else {
                alert("Error: " + data);
            }
        })
        .catch(err => alert("Submission error: " + err));
    } else {
        alert("Please fill all fields correctly before submitting.");
    }
});
