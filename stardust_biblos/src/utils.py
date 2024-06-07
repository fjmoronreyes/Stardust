import os

def get_database_url():
    # Obtener la ruta absoluta del directorio actual
    current_dir = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(current_dir, "../bbdd/biblioteca.db")
    return f"sqlite:///{os.path.abspath(db_path)}"

def print_hello(string: str):
    print(string)