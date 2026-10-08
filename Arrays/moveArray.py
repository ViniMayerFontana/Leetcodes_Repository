numb = [1, 2, 3, 4, 5, 6, 7]

# 1. Função auxiliar que apenas inverte uma fatia do array in-place
def reverse_array(arr, start, end):
    while start < end:
        temporary_save = arr[start]
        arr[start] = arr[end]
        arr[end] = temporary_save
        start += 1
        end -= 1


# 2. Função principal que gerencia o fluxo da rotação
def moviment_array(numb, k):
    k = k % len(numb)  # Trata k caso seja maior que o tamanho da lista

    # As três chamadas de inversão:
    reverse_array(numb, 0, len(numb) - 1)
    reverse_array(numb, 0, k - 1)
    reverse_array(numb, k, len(numb) - 1)

    return numb


# Executando:
moviment_array(numb, 5)

print(numb)  # Resultado: [3, 4, 5, 6, 7, 1, 2]