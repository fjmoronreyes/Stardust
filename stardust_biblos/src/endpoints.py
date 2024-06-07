from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from .schemas import Book
from .database import get_db

router = APIRouter()

@router.get("/books/")
def read_books_by_title(title: str = Query(None), skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    if title:
        return db.query(Book).filter(Book.titulo.contains(title)).offset(skip).limit(limit).all()
    return db.query(Book).offset(skip).limit(limit).all()

@router.get("/books/author/")
def read_books_by_author(author: str = Query(None), skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    if author:
        return db.query(Book).filter(Book.autor.contains(author)).offset(skip).limit(limit).all()
    return db.query(Book).offset(skip).limit(limit).all()

@router.get("/books/editorial/")
def read_books_by_editorial(editorial: str = Query(None), skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    if editorial:
        return db.query(Book).filter(Book.editorial.contains(editorial)).offset(skip).limit(limit).all()
    return db.query(Book).offset(skip).limit(limit).all()
