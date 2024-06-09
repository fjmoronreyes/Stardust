// catalogue.js

document.addEventListener("DOMContentLoaded", () => {
    fetch('http://127.0.0.1:8000/books/')
        .then(response => response.json())
        .then(books => {
            const bookList = document.getElementById('book-list');
            books.forEach(book => {
                const listItem = document.createElement('li');
                listItem.textContent = `Título: ${book.titulo}, Autor: ${book.autor}`;
                bookList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching book list:', error));
});
