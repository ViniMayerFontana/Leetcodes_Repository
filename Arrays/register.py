nome = input ("Escreva seu nome: ")
idade = int(input ("Escreva sua idade: "))

user = [nome, idade]

if (idade != 0):
    print(f"Ola {user[0]} voce tem {user[1]} anos")

else: print("Erro, valores inválidos")