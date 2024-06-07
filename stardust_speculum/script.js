function searchBooks() {
    const author = document.getElementById('authorInput').value;
    const url = `http://127.0.0.1:8000/books/?author=${encodeURIComponent(author)}`;
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
