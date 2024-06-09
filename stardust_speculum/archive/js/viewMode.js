let viewMode = 'simple'; // default view mode

function setViewMode(mode) {
    viewMode = mode;
    document.getElementById('simple-view').classList.remove('active');
    document.getElementById('complete-view').classList.remove('active');
    document.getElementById(`${mode}-view`).classList.add('active');
    searchBooks(); // Refresh results based on the new view mode
}
