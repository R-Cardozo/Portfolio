const navButtons = document.querySelectorAll('.navBar button');

navButtons.forEach(button => {
    const originalButton = button.textContent;
    const newButton = originalButton.toLowerCase();

    button.addEventListener('mouseover', () => {
        button.textContent = `// ${newButton}`;
    });

    button.addEventListener('mouseout', () => {
        button.textContent = originalButton;
    });
});