/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 * @param {HTMLElement} btnElement - The button that was clicked
 */
function toggleBio(bioId, btnElement) {
    const bio = document.getElementById(bioId);

    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
        btnElement.textContent = "Hide Bio";
    } else {
        bio.style.display = "none";
        btnElement.textContent = "Show Bio";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    if (sectionId === "bios") {
        biosSection.style.display = "flex";
        visionSection.style.display = "none";
    } else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}