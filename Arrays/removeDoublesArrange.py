# 1. Leitura de quantos números serão inseridos
numbers = int(input("Digite quantos números quer escrever: "))

numbers_list = []
numbers_removed = []

# 2. Coleta dos números e separação de duplicatas
for terms in range(numbers):
    n = float(input("Digite seus números: "))
    
    if n in numbers_list:
        numbers_removed.append(n)
    else:
        numbers_list.append(n)

# 3. Quantidade de números únicos
quantity = len(numbers_list)

# 4. Ordenação usando Bubble Sort
for o in range(quantity):
    for p in range(quantity - 1):
        if numbers_list[p] > numbers_list[p + 1]:
            # Troca de valores
            save_value = numbers_list[p]
            numbers_list[p] = numbers_list[p + 1]
            numbers_list[p + 1] = save_value

# 5. Exibição do resultado final
print(f"Sua lista de números é: {numbers_list}. Duplicatas removidas: {numbers_removed}")