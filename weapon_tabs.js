document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.character-weapons');
  
    if (tabButtons.length === 0 || tabContents.length === 0) {
        console.error('No tab buttons or tab content found');
        return;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Hide all content
            tabContents.forEach(content => content.classList.remove('active'));

            // Show content of the clicked button's associated character
            const character = button.getAttribute('data-character');
            document.getElementById(character).classList.add('active');
        });
    });
});
