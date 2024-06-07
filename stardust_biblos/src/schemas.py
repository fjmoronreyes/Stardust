from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

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
