function validateStep(step) {
    const currentFields = formSteps[step].querySelectorAll('input, select, textarea');
    for (let field of currentFields) {
        if (field.type === "radio") {
            const name = field.name;
            const checked = formSteps[step].querySelector(`input[name="${name}"]:checked`);
            if (!checked) return false;
        } else if (!field.value) {
            return false;
        } else if (field.name === "age" && field.value <= 18) {
            alert("You must be older than 18 years to submit the survey.");
            return false;
        }
    }
    return true;
}
