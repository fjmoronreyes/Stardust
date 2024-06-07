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
        listItem.classList.add('result-item');
        listItem.innerHTML = generateBookHTML(book);
        list.appendChild(listItem);
    });

    resultsDiv.appendChild(list);
}

function generateBookHTML(book) {
    if (viewMode === 'simple') {
        return `
            <div class="book-title">${book.titulo}</div>
            <div>Autor: ${book.autor}</div>
            <div>Editorial: ${book.editorial}</div>
            <div>Género: ${book.genero}</div>
            <div>Subgénero: ${book.subgenero}</div>
        `;
    } else { // complete view
        return `
            <div class="book-title">${book.titulo}</div>
            <div>Saga: ${book.saga}</div>
            <div>Autor: ${book.autor}</div>
            <div>Ilustrador: ${book.ilustrador}</div>
            <div>Género: ${book.genero}</div>
            <div>Subgénero: ${book.subgenero}</div>
            <div>Editorial: ${book.editorial}</div>
            <div>Valoración: ${book.valoracion}</div>
            <div>Cubierta: ${book.cubierta}</div>
        `;
    }
}
