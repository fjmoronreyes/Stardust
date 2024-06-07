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
