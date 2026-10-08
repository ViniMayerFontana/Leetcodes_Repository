listNumbers = []
i = int(input("Digite quantos valores deseja que sejam adicionados na sua lista: "))

for terms in range(i):
    n = input("Digite o valor a ser adicionado na sua lista: ")
    listNumbers.append(n)

larger = max(listNumbers)
print("O maior numero da sua lista eh " + larger)