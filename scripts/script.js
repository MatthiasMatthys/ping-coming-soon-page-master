function validateForm() {
    var input = document.getElementById("mailinput");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validationMessageDiv = document.getElementById("validation-message")
    if (input.value.length === 0) {
        validationMessageDiv.innerText = "Whoops! It looks like you forgot to add your email";
    } else if (!input.value.match(validRegex)) {
        validationMessageDiv.innerText = "Please provide a valid email address";
    } else{
        validationMessageDiv.innerText = "";
        input.value = "";
    }
}