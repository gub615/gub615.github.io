// Get modal
var modal2 = document.getElementById("modal2");

// Get img and put in the modal
var img = document.getElementById("infig");
var modalImg = document.getElementById("img2");
img.onclick = function () {
    modal.style.display = "block";
    modalImg = this.src;
}

// Get the span that closes the modal
var span = document.getElementById("close")[0];

// When span clicked close modal
span.onclick = function () {
    modal.style.display = none;
}