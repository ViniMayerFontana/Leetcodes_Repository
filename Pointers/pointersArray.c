/*
 * Enunciado do Exercício:
 * Crie um programa em C que declare um array (vetor) de 5 números inteiros.
 * Declare um ponteiro e faça com que ele aponte para o início deste array.
 * Em seguida, use um laço 'for' para percorrer todos os elementos do array
 * usando APENAS o ponteiro (sem usar os índices do array como vetor[i]).
 * 
 * Dentro do laço 'for', use uma estrutura 'if-else' para verificar cada valor:
 * - Se o valor apontado for par, multiplique-o por 2.
 * - Se o valor apontado for ímpar, mude-o para 0.
 * 
 * Por fim, imprima o array modificado para verificar o resultado final.
 */

#include <stdio.h>

int main() {
    // Declara e inicializa o array com 5 valores
    int numeros[5] = {3, 8, 15, 22, 7};
    
    // Declara o ponteiro e o inicializa apontando para o primeiro elemento do array
    int *ptr = numeros; // Em C, o nome do array já representa o endereço do primeiro elemento
    
    printf("Valores originais: 3, 8, 15, 22, 7\n");
    
    // Laço for para percorrer os 5 elementos
    for (int i = 0; i < 5; i++) {
        
        // Verifica se o valor que o ponteiro está apontando no momento é par
        if (*ptr % 2 == 0) {
            *ptr = *ptr * 2; // Dobra o valor
        } 
        else {
            *ptr = 0;        // Zera o valor se for ímpar
        }
        printf("%d - %d ", *ptr, ptr); 
    
        // Avança o ponteiro para o próximo endereço de memória do array
        ptr++; 
    }
    
    // Imprime o array após as modificações para confirmar que deu certo
    printf("Valores modificados: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\n");

    return 0;
}