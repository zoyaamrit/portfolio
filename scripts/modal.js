// Get the modal
var modal = document.getElementById("instructionModal");


setTimeout(function() {
    modal.style.display = "block";
}, 3500);

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
