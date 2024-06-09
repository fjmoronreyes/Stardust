import subprocess
import webbrowser
import time
import os

project_path = os.path.dirname(os.path.abspath(__file__))
index_path = os.path.join(project_path, "stardust_speculum", "menu", "index.html")

def start_server():
    subprocess.Popen(["uvicorn", "stardust_biblos.src.main:app", "--reload"])

def open_browser():
    time.sleep(5)
    webbrowser.open(f"file://{index_path}")

if __name__ == "__main__":
    start_server()
    open_browser()
