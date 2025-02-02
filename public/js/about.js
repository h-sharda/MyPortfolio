function toggleDropdown(id) {
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    const currentDropdown = document.getElementById(id);

    // Collapse all other dropdowns
    allDropdowns.forEach(dropdown => {
        if (dropdown !== currentDropdown) {
            dropdown.style.display = "none";
        }
    });

    // Toggle the current dropdown with a height transition
    if (currentDropdown.style.display === "block") {
        currentDropdown.style.display = "none";
    } else {
        currentDropdown.style.display = "block";
    }
}

// Close dropdowns when clicking outside
document.addEventListener("click", function(event) {
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    let isDropdownClick = event.target.closest('.dropdown');

    if (!isDropdownClick) {
        allDropdowns.forEach(dropdown => {
            dropdown.style.display = "none";
        });
    }
});