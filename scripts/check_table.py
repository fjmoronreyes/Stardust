import sqlite3

conn = sqlite3.connect('./backend/biblioteca.db')
cursor = conn.cursor()

# Verificar si la tabla `libros` existe
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='libros';")
table_exists = cursor.fetchone()

if table_exists:
    print("La tabla `libros` existe.")
else:
    print("La tabla `libros` no existe.")

conn.close()
