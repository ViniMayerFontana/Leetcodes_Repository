# class Solution:
#     def addBinary(self, a: str, b: str) -> str:
#         list = []
#         carry = 0 # o que sobrou da soma da casa anterior (o que seria passado para somar junto na proxima casa decimal)
#         pointer_a, pointer_b = len(a) - 1, len(b) - 1 #começa na ultima posição do array
#         # Percorre as strings de trás para frente somando o valor (1 ou 0) na variavel total, depois total é analisado para definir o valor que fica e o valor que é passado pra carry
#         while pointer_a >= 0 or pointer_b >= 0 or carry != 0:
#             total = carry
#             if pointer_a >= 0:
#                 total += int(a [pointer_a])
#                 pointer_a -= 1
#             if pointer_b >= 0:
#                 total += int(b [pointer_b])
#                 pointer_b -= 1

#             # adiciona o resto da divisão do total por 2 na posição atual
#             list.append(str(total % 2))
#             # adiciona o resultado da divisão inteira do total por 2 na carry (para ser somada na soma da proxima casa decimal)
#             carry = total // 2

#         # inverte a lista (que está ao contrário) e junta os 1 e 0 da minha lista numa unica string (pega todos elementos da lista, junta eles e poêm tudo entre "")
#         return "".join(reversed(list))

# # Chamada correta:
# sol = Solution()
# print(sol.addBinary("101", "1"))  # Saída: "110"


class Solution():
    def addBinary(self, a: str, b: str) -> str:
   
        # "0" + "0" == "0"
        # "1" + "0" == "1"
        # "0" + "1" == "1"
        # "1" + "1" == "0"
        # "1" + "1" == "10"

        # a = a.split("")
        # b_elements = b.split("")

        result_list = []

        if len(a) < len(b):
            for n in range(len(a)):
                if ((a[-n] + b[-n]) == "1" + "1"):
                    result_list.push("0")
                    result_list.push("1")
                else: 
                    result = a[-n] + b[-n]
                    result_list.push(result)
        else:
            for n in b:
                if ((a[-n] + b[-n]) == "1" + "1"):
                    result_list.push("0")
                    result_list.push("1")
                else: 
                    result = a[-n] + b[-n]
                    result_list.push(result)
        return result_list

# print(Solution(addBinary(self, "101", "1")))
sol = Solution()
print(sol.addBinary("101", "1"))
