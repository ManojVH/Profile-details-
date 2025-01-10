// This is a simple script to show/hide sections dynamically on button click or based on other events
document.addEventListener('DOMContentLoaded', function() {
    // Example: Show alert when clicking on skills section
    const skillsSection = document.getElementById('skills');
    skillsSection.addEventListener('click', function() {
        alert("Skills section clicked! You can add dynamic features here.");
    });
});