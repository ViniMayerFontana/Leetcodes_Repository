

# MEU ---------------------------------------------------------

# class Solution:   
#     def separateChar(self, s: str):
#         pariamento = {'(': ')', '{': '}', "[": "]"}
#         checks = []
#         fila = list(s)
#         for i in range (len(fila)):
#            checks[i] = fila[i]
#            if checks[i] in pariamento:
#                 valor = pariamento[checks[i]]
#                 indice = checks.index(valor)

#             else: return False

# test = Solution()
# print(test.separateChar("oio"))

# ta incompleto e errado

# Fim meu -----------------------------------------------------



# USO TABELA HASH ---------------------------------------------
usuario = {"nome": "Ana", "idade": 28}

valor = usuario["nome"]
# valor2 = usuario[1] 
# ISSO DÀ ERRO, TABELA HASH NAO ACESSA COM INDICE, É UM DICIONARIO, 
# TU PROCURA A PALAVRA PRA VER O SIGNIFICADO, NÃO A POSIÇÃO DELA
print(valor)

# -------------------------------------------------------------




#  versão inicial ---------------------------------------------

# class Solution:
#     def isValid(self, s: str) -> bool:
#         pilha = []
#         pares = {')': '(', ']': '[', '}': '{'}
        
#         for simbolo in s:
#             if simbolo in pares:
#                 if len(pilha) > 0:
#                     topo_da_pilha = pilha.pop()  
#                 else:
#                     topo_da_pilha = '#'

#                 if topo_da_pilha != pares[simbolo]:
#                     return False
#             else:
#                 pilha.append(simbolo)
 
#         if len(pilha) == 0:
#             return True
#         else:
#             return False

# teste1 = Solution()
# verificacao = teste1.isValid("({[]})")
# verificacao2 = teste1.isValid("([]})")
# verificacao3 = teste1.isValid("({[]}())")

# print(verificacao)
# print(verificacao2)
# print(verificacao3)

# -------------------------------------------------------------

#  VERSÃO INTUITIVA E MENOR -----------------------------------

class Solution:
    def isValid(self, s: str) -> bool:
        pilha = []
        esperado = {'(': ')','[': ']','{': '}'} # ABERTURA É A CHAVE
        
        for simbolo in s: #PERCORRE CADA TERMO DE S
            if simbolo in esperado: #TÁ NA HASHTABLE (É DE ABERTURA)?
                pilha.append(esperado[simbolo]) #ADD SEU FECHAMENTO NA PILHA
                
            else: #SE FOR DE FECHAMENTO
                if not pilha or pilha.pop() != simbolo: #PILHA VAZIA OU O SIMBOLO ATUAL É != DO QUE DEVERIA SER FECHADO (O ULTIMO DA PILHA)
                    return False
                    
        return len(pilha) == 0 # SE TUDO QUE ABRIU FECHOU E FOI REMOVIDO, PILHA DEVE ESTAR VAZIA. FAZ SEES TESTE, DEU TRUE, RETORNA TRUE

solucao = Solution()
answer1 = solucao.isValid("({}})")
answer2 = solucao.isValid("({}[])")
print(answer1)
print(answer2)


# -------------------------------------------------------------