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
    selectedFiltersDiv.innerHTML = '';
    selectedFilters.forEach(filter => {
        const filterSpan = document.createElement('span');
        filterSpan.textContent = filterNames[filter];
        filterSpan.classList.add('filter-span');
        filterSpan.onclick = () => removeFilter(filter, filterNames);
        selectedFiltersDiv.appendChild(filterSpan);
    });
}

function removeFilter(filter, filterNames) {
    selectedFilters = selectedFilters.filter(f => f !== filter);
    updateSelectedFiltersDisplay(filterNames);
}
