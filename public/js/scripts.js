document.getElementById("toggle-footer").addEventListener("click", function () {
    const footer = document.getElementById("footer");
    const toggleIcon = document.getElementById("toggle-icon");
    
    if (footer.style.transform === "translateY(100%)") {
        footer.style.transform = "translateY(0)";
        toggleIcon.src = "/images/logos/down-arrow.png";
    } else {
        footer.style.transform = "translateY(100%)";
        toggleIcon.src = "/images/logos/up-arrow.png";
    }
});
