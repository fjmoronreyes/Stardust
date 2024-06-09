function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function displayFilters() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = 'block';
}

function hideFilters() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = 'none';
}
