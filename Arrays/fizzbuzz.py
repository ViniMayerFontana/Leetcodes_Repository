n = 15
termo = 1
list = []
while(len(list) <= n):

    if ((termo % 5) == 0 and (termo % 3) == 0):
        list.append("fizzbuzz")
        termo = termo + 1

    elif ((termo % 3) == 0):
        list.append("fizz")
        termo = termo + 1

    elif ((termo % 5) == 0):
        list.append("buzz")
        termo = termo + 1
        
    else:
        list.append(termo)
        termo = termo + 1

print(list)