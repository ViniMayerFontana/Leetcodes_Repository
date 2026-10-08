def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

f = int(input("Digite o numero do fatorial: "))

final_result = factorial(f)
mensage = f"O valor do fatorial eh {final_result}"
print(mensage)