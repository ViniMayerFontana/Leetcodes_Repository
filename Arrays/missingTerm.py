# Dado um array nums contendo n números distintos no intervalo [0, n], retorne o único número do intervalo que está faltando no array.
# Ex: [3,0,1] → saída: 2; [0,1] → saída: 2 (pois n=2 e faltou o 2).

array_dado = [1,0,3]
values_in_array = []

n = len(array_dado)
# n = 3

for elements in range(n):
    if(array_dado[elements] > n):
        print(f"error, {array_dado[elements]} must not be in the array")
    else:
        values_in_array.append(array_dado[elements])

for terms in range(n + 1):
    if (terms not in values_in_array):
        value = terms
        print(f"The remaining value of the array is {value}")