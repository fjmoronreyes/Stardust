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
