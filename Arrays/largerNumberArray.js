var numbers = parseInt(prompt("digite quantos  numeros quer escrever: "));
numbersList = [];


for(terms = 0; terms < numbers; terms++){
    var n = parseFloat(prompt("digite seus numeros: "));
    numbersList.push(n);
}

var larger = Math.max(...numbersList);
alert("O maior numero dado eh: " + larger);

//Por esse código num arquivo html padrão dentro de uma tag script ou no src="esse arquivo"