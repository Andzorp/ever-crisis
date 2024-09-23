document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function () {
            sidebar.classList.toggle('expanded'); // Toggle expanded class
            const arrowIcon = toggleBtn.querySelector('.arrow-icon'); // Find the arrow icon
            if (arrowIcon) {
                arrowIcon.classList.toggle('fa-chevron-right'); // Switch icons
                arrowIcon.classList.toggle('fa-chevron-left');
            }
        });
    }
});
