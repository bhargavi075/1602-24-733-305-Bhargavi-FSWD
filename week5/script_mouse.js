let image = document.getElementById("myImage");
let message = document.getElementById("message");

image.addEventListener("mouseover", function() {
    message.innerHTML = "Mouse is over the image";
});

image.addEventListener("mouseout", function() {
    message.innerHTML = "Mouse left the image";
});

image.addEventListener("click", function() {
    message.innerHTML = "Image clicked";
});