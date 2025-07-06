from cs50 import get_int

while True:
    height = get_int("height: ")
    if 1 <= height <= 8:
        break

# two birds with one stone
for i in range(height):
    print(" " * (height - i - 1) + "#" * (i + 1))
