from cs50 import get_float

while True:
    dollars = get_float("Change: ")
    if dollars > 0:
        break

n = 0
cents = round(dollars * 100)

while cents >= 25:
    cents -= 25
    n += 1

while cents >= 10:
    cents -= 10
    n += 1

while cents >= 5:
    cents -= 5
    n += 1

while cents >= 1:
    cents -= 1
    n += 1

print(n)
