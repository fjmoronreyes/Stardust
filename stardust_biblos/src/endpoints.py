from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from .schemas import Book
from .database import get_db

router = APIRouter()

@router.get("/books/")
def read_books(author: str = Query(None), skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    if author:
        return db.query(Book).filter(Book.autor.contains(author)).offset(skip).limit(limit).all()
    return db.query(Book).offset(skip).limit(limit).all()
