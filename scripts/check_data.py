import sqlite3

conn = sqlite3.connect('./backend/biblioteca.db')
cursor = conn.cursor()

# Verificar si la tabla `libros` tiene datos
cursor.execute("SELECT * FROM libros;")
rows = cursor.fetchall()

if rows:
    print("La tabla `libros` contiene datos:")
    for row in rows:
        print(row)
else:
    print("La tabla `libros` está vacía.")

conn.close()
