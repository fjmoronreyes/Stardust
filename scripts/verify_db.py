import sqlite3

# Conectar a la base de datos SQLite
conn = sqlite3.connect('biblioteca.db')
c = conn.cursor()

# Consultar los datos
c.execute('SELECT * FROM libros')
rows = c.fetchall()

# Mostrar los datos
for row in rows:
    print(row)

# Cerrar la conexión
conn.close()
