function openQuestBox(characterName) {
    document.getElementById('quest-title').innerText = characterName + ' Quest Details';
    document.getElementById('quest-details').classList.remove('hidden');
}

function closeQuestBox() {
    document.getElementById('quest-details').classList.add('hidden');
}
