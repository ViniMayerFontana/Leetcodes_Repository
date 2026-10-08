class Solution {
    lengthOfLastWord(s) {
        const palavras = s.trim().split(/\s+/);
        return palavras[palavras.length - 1].length;
    }
}

const solucao = new Solution();

console.log(solucao.lengthOfLastWord("Hello World")); // Saída: 5