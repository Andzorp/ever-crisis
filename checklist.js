// Function to toggle the checklist for a clicked character
function toggleChecklist(characterImage) {
    const checklistToToggle = characterImage.nextElementSibling;

    // Hide all checklists
    document.querySelectorAll('.character-container .checklist').forEach(checklist => {
        if (checklist !== checklistToToggle) {
            checklist.classList.add('hidden');
        }
    });

    // Toggle the visibility of the clicked character's checklist
    checklistToToggle.classList.toggle('hidden');
}

// Function to toggle the quest details visibility
function toggleQuestDetails(questId) {
    const questDetails = document.getElementById(questId);
    if (questDetails) {
        questDetails.classList.toggle('hidden');
    }
}

// Add event listeners to the quest detail buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.quest-details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const questId = this.nextElementSibling.id; // Get quest details ID
            toggleQuestDetails(questId);
            openModal(); // Open the modal when the button is clicked
        });
    });
});

// Open the modal
function openModal() {
    document.getElementById('questModal').classList.remove('hidden');
}

// Close the modal
function closeModal() {
    document.getElementById('questModal').classList.add('hidden');
}

// Save quest steps function
function saveQuestSteps() {
    // Add your saving logic here
    closeModal();
}
