var addBinary = function(a, b) {
    let list = [];
    let carry = 0; // o que sobrou da soma da casa anterior (o que seria passado para somar junto na proxima casa decimal)
    let pointer_a = a.length - 1; // começa na ultima posição da string a
    let pointer_b = b.length - 1; // começa na ultima posição da string b

    // Percorre as strings de trás para frente somando o valor (1 ou 0) na variavel total, depois total é analisado para definir o valor que fica e o valor que é passado pra carry
    while (pointer_a >= 0 || pointer_b >= 0 || carry !== 0) {
        let total = carry;

        if (pointer_a >= 0) {
            total += parseInt(a[pointer_a]);
            pointer_a -= 1;
        }
        if (pointer_b >= 0) {
            total += parseInt(b[pointer_b]);
            pointer_b -= 1;
        }

        // adiciona o resto da divisão do total por 2 na posição atual
        list.push(String(total % 2));

        // adiciona o resultado da divisão inteira do total por 2 na carry (Math.floor substitui o // do Python)
        carry = Math.floor(total / 2);
    }

    // inverte a lista (que está ao contrário) e junta os 1 e 0 da minha lista numa unica string
    return list.reverse().join("");
};

// Chamada correta:
console.log(addBinary("101", "1")); // Saída: "110"