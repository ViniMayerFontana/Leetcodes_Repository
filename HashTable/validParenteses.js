// class Solution:
//     def isValid(self, s: str) -> bool:
//         pilha = []
//         esperado = {'(': ')','[': ']','{': '}'} # ABERTURA É A CHAVE
        
//         for simbolo in s: #PERCORRE CADA TERMO DE S
//             if simbolo in esperado: #TÁ NA HASHTABLE (É DE ABERTURA)?
//                 pilha.append(esperado[simbolo]) #ADD SEU FECHAMENTO NA PILHA
                
//             else: #SE FOR DE FECHAMENTO
//                 if not pilha or pilha.pop() != simbolo: #PILHA VAZIA OU O SIMBOLO ATUAL É != DO QUE DEVERIA SER FECHADO (O ULTIMO DA PILHA)
//                     return False
                    
//         return len(pilha) == 0 # SE TUDO QUE ABRIU FECHOU E FOI REMOVIDO, PILHA DEVE ESTAR VAZIA. FAZ SEES TESTE, DEU TRUE, RETORNA TRUE

// solucao = Solution()
// answer1 = solucao.isValid("({}})")
// answer2 = solucao.isValid("({}[])")
// print(answer1)
// print(answer2)

class Solution{

    isValid(s) {
        let stack = [];
        let pairs = {'(': ')','[': ']','{': '}'};

        for(let simbol = 0; simbol <= s.length; simbol++){
            let simbolChar = s[simbol]
            
            if (simbolChar in pairs){
                stack.push(pairs[simbolChar]);
            }
            
            else{
                if (stack == [] || stack.pop() != simbolChar){
                    return false;
                }
            }
        }

        return stack.length == 0
        
    }
}
test1 = new Solution();
viewTest1 = test1.isValid("[](){}");
console.log(viewTest1);