from fastapi import FastAPI, Depends
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from utils import get_database_url

DATABASE_URL = get_database_url()

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Book(Base):
    __tablename__ = "libros"
    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True)
    saga = Column(String, index=True)
    autor = Column(String, index=True)
    ilustrador = Column(String, index=True)
    editor = Column(String, index=True)
    genero = Column(String, index=True)
    subgenero = Column(String, index=True)
    coleccion = Column(String, index=True)
    editorial = Column(String, index=True)
    edicion = Column(String, index=True)
    idioma = Column(String, index=True)
    imagen = Column(String, index=True)
    valoracion = Column(String, index=True)
    observaciones = Column(String, index=True)
    cubierta = Column(String, index=True)

app = FastAPI()

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/books/")
def read_books(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(Book).offset(skip).limit(limit).all()
