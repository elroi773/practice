rows = 6
for i in range(rows):
    for j in range(i):
        print(i, end = ' ')
    print('')

rows1 = 5
b = 0
for i in range(rows1, 0, -1):
    b += 1
    for j in range(1,i+1):
        print(b, end = ' ')
    print('\r')

rows2 = 5
k = 2 * rows2 -2
for in range(rows,-1,-1):
    for j in range(k,0,-1):
        print(end = "")
    k = k+1
    for j in range(0,i+1):
        print("*", end = " ")
    print("")