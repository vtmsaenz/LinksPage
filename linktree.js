document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.links');

    // Check local storage for clicked buttons
    buttons.forEach(button => {
        const buttonId = button.getAttribute('href'); // Use href as identifier
        if (localStorage.getItem(buttonId)) {
            button.classList.add('clicked'); // Keep color if previously clicked
        }

        button.addEventListener('click', () => {
            button.classList.add('clicked');
            localStorage.setItem(buttonId, 'clicked'); // Save state in local storage
        });
    });
    /* testing */
    window.addEventListener('unload', () => {
        buttons.forEach(button => {
            const buttonId = button.getAttribute('href');
            localStorage.removeItem(buttonId); // Clear state from local storage
        });
    });
});
