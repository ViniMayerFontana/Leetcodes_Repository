x = int(input("Digite o valor das dimensões da sua tabela: "))

def cria_tabela(n):
    tabela = []
    
    for linhas in range(n):
        nova_linha = []
    
        for colunas in range (n):
            if(colunas == linhas or linhas == n - 1 - colunas):
                nova_linha.append('x')
            else:
                nova_linha.append(0)

        tabela.append(nova_linha)
    
    return tabela
        
def mostra_tabela(tabela):
    for linhas in tabela:
        print(linhas)
        
        
tabela = cria_tabela(x)
mostra_tabela(tabela)

"""def desenhar_x(n):
    # Cria a tabela (array) com n linhas e n colunas, tudo preenchido com 0
    tabela = []
    for linha in range(n):
        nova_linha = []
        for coluna in range(n):
            nova_linha.append(0)
        tabela.append(nova_linha)
    
    # Agora vamos colocar o número 1 nas posições das diagonais
    for i in range(n):
        tabela[i][i] = 1          # diagonal principal (canto superior esquerdo até inferior direito)
        tabela[i][n - 1 - i] = 1  # diagonal secundária (canto superior direito até inferior esquerdo)
    
    return tabela


def mostrar_tabela(tabela):
    for linha in tabela:
        print(linha)


# Programa principal
numero = int(input("Digite um número (tamanho da tabela): "))
tabela = desenhar_x(numero)
mostrar_tabela(tabela)"""