// catalogue.js

let currentPage = 1;
const itemsPerPage = 10;

document.addEventListener("DOMContentLoaded", () => {
    fetchBooks(currentPage);
});

function fetchBooks(page) {
    fetch(`http://127.0.0.1:8000/catalogue/?page=${page}&items_per_page=${itemsPerPage}`)
        .then(response => response.json())
        .then(data => {
            displayBooks(data.books);
            updatePaginationControls(data.page, data.total_pages);
        })
        .catch(error => console.error('Error fetching books:', error));
}

function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <h2>${book.titulo} - ${book.autor}</h2>
            <div class="book-details">
                <p><strong>Saga:</strong> ${book.saga}</p>
                <p><strong>Ilustrador:</strong> ${book.ilustrador}</p>
                <p><strong>Editor:</strong> ${book.editor}</p>
                <p><strong>Género:</strong> ${book.genero}</p>
                <p><strong>Subgénero:</strong> ${book.subgenero}</p>
                <p><strong>Colección:</strong> ${book.coleccion}</p>
                <p><strong>Editorial:</strong> ${book.editorial}</p>
                <p><strong>Edición:</strong> ${book.edicion}</p>
                <p><strong>Idioma:</strong> ${book.idioma}</p>
                <p><strong>Imagen:</strong> <img src="${book.imagen}" alt="${book.titulo}" /></p>
                <p><strong>Valoración:</strong> ${book.valoracion}</p>
                <p><strong>Observaciones:</strong> ${book.observaciones}</p>
                <p><strong>Cubierta:</strong> ${book.cubierta}</p>
            </div>
        `;
        bookItem.addEventListener('click', () => {
            const details = bookItem.querySelector('.book-details');
            details.style.display = details.style.display === 'none' || details.style.display === '' ? 'block' : 'none';
        });
        bookList.appendChild(bookItem);
    });
}

function updatePaginationControls(currentPage, totalPages) {
    document.getElementById('prev-button').disabled = currentPage === 1;
    document.getElementById('next-button').disabled = currentPage === totalPages;
}

function nextPage() {
    currentPage++;
    fetchBooks(currentPage);
}

function prevPage() {
    currentPage--;
    fetchBooks(currentPage);
}
