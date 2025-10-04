form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateStep(currentStep)) {
        currentStep = formSteps.length - 1; // show success step
        showStep(currentStep);
    } else {
        alert("Please fill all fields correctly before submitting.");
    }
});
