import requests

def get_books():
    url = "http://127.0.0.1:8000/books/"
    response = requests.get(url)
    
    if response.status_code == 200:
        books = response.json()
        return books
    else:
        print(f"Failed to get books. Status code: {response.status_code}")
        return None

if __name__ == "__main__":
    books = get_books()
    if books:
        for book in books:
            print(book)
