document.addEventListener('DOMContentLoaded', () => {
    const textParagraph = document.getElementById('textParagraph');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        if (textParagraph.style.display === "none") {
            textParagraph.style.display = "block";
        } else {
            textParagraph.style.display = "none";
        }
    });
});
