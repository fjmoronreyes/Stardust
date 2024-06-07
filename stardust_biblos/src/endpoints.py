from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import or_
from .schemas import Book
from .database import get_db

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
