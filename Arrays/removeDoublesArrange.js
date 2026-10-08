var numbers = parseInt(prompt("digite quantos numeros quer escrever: "));
var numbersList = [];
var numbersRemoved = [];

for(var terms = 0; terms < numbers; terms++){
    var n = parseFloat(prompt("digite seus numeros: "));
    if (numbersList.includes(n)){
        numbersRemoved.push(n);
    }
    else {
        numbersList.push(n);
    }
}

// CORREÇÃO 1: "lenght" estava escrito errado (o correto é "length")
var quantity = numbersList.length;

// CORREÇÃO 2: Ajuste no segundo laço (usando 'p' em vez de 'o') 
// e no limite da contagem ('quantity - 1')
for(var o = 0; o < quantity; o++){
    for(var p = 0; p < quantity - 1; p++){
        if(numbersList[p] > numbersList[p + 1]) {
            var saveValue = numbersList[p];
            numbersList[p] = numbersList[p + 1];
            numbersList[p + 1] = saveValue;
        }
    }
}

alert("Sua lista de numeros eh: " + numbersList + "." + " Duplicatas removidas: " + numbersRemoved);