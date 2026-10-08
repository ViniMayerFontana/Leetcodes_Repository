# Descobrir se uma palavra é um palíndromo. Ex.: ovo, Natan Desconsiderar letras maiúscula e minúscula

def verify_palinder(list):
    start = 0
    end = (len(list) - 1)
    while (start < end):
        if (list[start] != list[end]):
            return "It is not a palinder"
        start += 1
        end -= 1
    result = ("It is a palinder")
    return result
            
adapted_word = "ovo"
ready_list = list(adapted_word.lower())
result = verify_palinder(ready_list)
print(result)