class Solution:

    def lengthOfLastWord(self, s: str) -> int:
        palavras = s.split()
        return len(palavras[-1])

solucao = Solution()

print(solucao.lengthOfLastWord("Hello World"))