# List .html files in directory and add "html_" prefix
from pathlib import Path
import os

path = r'C:\Trabajo\formacion_complementaria\FreeCodeCamp\web_design\responsive-html-course-docs'
path = Path(path)

# Get html files
files = list(path.glob('*.html'))
# Get the name in str format
files_str = list()

for file in files:
    files_str.append(str(file.name))


# Rename
prefix = 'html-'
for file in files_str:
    os.rename(file, prefix + file)


