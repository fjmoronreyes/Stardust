let selectedFilters = [];

function addFilter(filter) {
    const filterNames = {
        'title': 'Título',
        'author': 'Autor',
        'editorial': 'Editorial'
    };

    if (!selectedFilters.includes(filter)) {
        selectedFilters.push(filter);
        updateSelectedFiltersDisplay(filterNames);
    }
}

function updateSelectedFiltersDisplay(filterNames) {
    const selectedFiltersDiv = document.getElementById('selectedFilters');
    selectedFiltersDiv.innerHTML = ''; // Clear previous filters

    if (selectedFilters.length > 0) {
        const filterTextElement = document.createElement('span');
        filterTextElement.textContent = 'Filtrar por: ';
        selectedFiltersDiv.appendChild(filterTextElement);

        selectedFilters.forEach(filter => {
            const filterTag = document.createElement('span');
            filterTag.classList.add('filter-tag');
            filterTag.textContent = filterNames[filter];
            const removeIcon = document.createElement('span');
            removeIcon.textContent = '✖'; // Close icon
            removeIcon.onclick = () => removeFilter(filter, filterNames);
            filterTag.appendChild(removeIcon);
            selectedFiltersDiv.appendChild(filterTag);
        });
    }
}

function removeFilter(filter, filterNames) {
    selectedFilters = selectedFilters.filter(f => f !== filter);
    updateSelectedFiltersDisplay(filterNames);
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    selectedFilters = [];
    updateSelectedFiltersDisplay({});
    document.getElementById('results').innerHTML = ''; // Clear results
}
