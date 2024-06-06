import pytest
from fastapi.testclient import TestClient
from backend.app.main import app

#curl http://127.0.0.1:8000/books/

client = TestClient(app)

def test_read_books():
    response = client.get("/books/")
    assert response.status_code == 200
    assert response.json() != []

if __name__ == "__main__":
    pytest.main()
