let currentFilter = 'title';

function setFilter(filter) {
    currentFilter = filter;
    const filterTitle = document.getElementById('filter-title');
    const searchInput = document.getElementById('searchInput');
    switch (filter) {
        case 'author':
            filterTitle.innerText = 'Filtrar por Autor';
            searchInput.placeholder = 'Nombre del Autor';
            break;
        case 'editorial':
            filterTitle.innerText = 'Filtrar por Editorial';
            searchInput.placeholder = 'Nombre de la Editorial';
            break;
        default:
            filterTitle.innerText = 'Filtrar por Título';
            searchInput.placeholder = 'Título del Libro';
            break;
    }
}

function searchBooks() {
    const query = document.getElementById('searchInput').value;
    let url = `http://127.0.0.1:8000/books/?title=${encodeURIComponent(query)}`;
    
    if (currentFilter === 'author') {
        url = `http://127.0.0.1:8000/books/author/?author=${encodeURIComponent(query)}`;
    } else if (currentFilter === 'editorial') {
        url = `http://127.0.0.1:8000/books/editorial/?editorial=${encodeURIComponent(query)}`;
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

function displayResults(books) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (books.length === 0) {
        resultsDiv.innerHTML = '<p>No books found.</p>';
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
