import pandas as pd
import sqlite3

# Leer el archivo Excel
excel_file = './BD_biblioteca.xlsx'
df = pd.read_excel(excel_file)

# Conectar a la base de datos SQLite
conn = sqlite3.connect('biblioteca.db')
c = conn.cursor()

# Crear la tabla de libros
c.execute('''
    CREATE TABLE IF NOT EXISTS libros (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        saga TEXT,
        autor TEXT,
        ilustrador TEXT,
        editor TEXT,
        genero TEXT,
        subgenero TEXT,
        coleccion TEXT,
        editorial TEXT,
        edicion TEXT,
        idioma TEXT,
        imagen TEXT,
        valoracion TEXT,
        observaciones TEXT,
        cubierta TEXT
    )
''')

# Insertar los datos en la tabla
for index, row in df.iterrows():
    c.execute('''
        INSERT INTO libros (
            titulo, saga, autor, ilustrador, editor, genero, subgenero, coleccion, editorial, edicion, idioma, imagen, valoracion, observaciones, cubierta
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (
        row['Título del libro'], row['Saga'], row['Autor'], row['Ilustrador'], row['Editor'], row['Género'], row['Subgénero'],
        row['Colección'], row['Editorial'], row['Edición'], row['Idioma'], row['Imagen'], row['Valoración'], row['Observaciones'],
        row['Cubierta']
    ))

# Guardar los cambios y cerrar la conexión
conn.commit()
conn.close()
