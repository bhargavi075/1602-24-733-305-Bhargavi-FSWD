function validateMobile() {

    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message");

    // Regular expression for Indian mobile number
    let pattern = /^[6-9][0-9]{9}$/;

    if (pattern.test(mobile)) {
        message.innerHTML = "Valid Mobile Number";
        message.style.color = "green";
    } 
    else {
        message.innerHTML = "Invalid Mobile Number";
        message.style.color = "red";
    }
}