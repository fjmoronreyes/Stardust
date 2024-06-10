from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import or_
from .schemas import Book
from .database import get_db
from fastapi import HTTPException

router = APIRouter()

@router.get("/books/")
def search_books(query: str = Query(None), db: Session = Depends(get_db)):
    if not query:
        return []
    return db.query(Book).filter(
        or_(
            Book.titulo.contains(query),
            Book.autor.contains(query),
            Book.editorial.contains(query)
        )
    ).all()

@router.get("/books/filter/")
def search_books_with_filters(title: str = Query(None), author: str = Query(None), editorial: str = Query(None), db: Session = Depends(get_db)):
    query_filters = []
    if title:
        query_filters.append(Book.titulo.contains(title))
    if author:
        query_filters.append(Book.autor.contains(author))
    if editorial:
        query_filters.append(Book.editorial.contains(editorial))
    
    if not query_filters:
        return []
    
    return db.query(Book).filter(or_(*query_filters)).all()

@router.get("/catalogue/")
def get_books(page: int = 1, items_per_page: int = 10, db: Session = Depends(get_db)):
    if page < 1 or items_per_page < 1:
        raise HTTPException(status_code=400, detail="Page number and items per page must be positive integers")

    offset = (page - 1) * items_per_page
    books = db.query(Book).offset(offset).limit(items_per_page).all()
    
    total_books = db.query(Book).count()
    total_pages = (total_books + items_per_page - 1) // items_per_page

    return {
        "page": page,
        "items_per_page": items_per_page,
        "total_books": total_books,
        "total_pages": total_pages,
        "books": books
    }