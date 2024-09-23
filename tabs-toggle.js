const sidebar = document.querySelector('.sidebar');
const tabs = document.querySelector('.tabs');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', function () {
    // Toggle the 'collapsed' class on the sidebar
    sidebar.classList.toggle('collapsed');
    
    // Adjust the tabs based on sidebar state
    if (sidebar.classList.contains('collapsed')) {
        tabs.classList.add('sidebar-collapsed'); // Smaller margin when sidebar is collapsed
    } else {
        tabs.classList.remove('sidebar-collapsed'); // Restore margin when sidebar is expanded
    }
});
