function showProject(projectName) {
    alert("You selected: " + projectName);
}

function contactMessage() {
    alert("Thank you for visiting my portfolio!");
}

function openNRLProject() {
    document.getElementById("nrlPopup").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeNRLProject() {
    document.getElementById("nrlPopup").classList.remove("active");
    document.body.style.overflow = "auto";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeNRLProject();
    }
});  
function submitNRLQuote(event) {
    event.preventDefault();

    alert("Thank you! Your transportation request has been received.");

    event.target.reset();

    return false;
}