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

function searchBooks() {
    const query = document.getElementById('searchInput').value;

    if (!query) {
        const searchInput = document.getElementById('searchInput');
        searchInput.style.border = '2px solid #cab86f';
        setTimeout(() => {
            searchInput.style.border = '';
        }, 2000);
        return;
    }

    let url = `http://127.0.0.1:8000/books/?query=${encodeURIComponent(query)}`;

    if (selectedFilters.length > 0) {
        const filters = selectedFilters.map(filter => `${filter}=${encodeURIComponent(query)}`).join('&');
        url = `http://127.0.0.1:8000/books/filter/?${filters}`;
    }

    console.log(`Fetching books from URL: ${url}`);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    selectedFilters = [];
    updateSelectedFiltersDisplay({});
    document.getElementById('results').innerHTML = ''; // Clear results
}

function displayResults(books) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (books.length === 0) {
        resultsDiv.innerHTML = '<p>No hay resultados.</p>';
        return;
    }

    const list = document.createElement('ul');
    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.titulo} by ${book.autor}`;
        list.appendChild(listItem);
    });

    resultsDiv.appendChild(list);
}

function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}
