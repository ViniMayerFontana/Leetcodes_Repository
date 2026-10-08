var array_dado = [3, 1, 2];
var values_in_array = [];

var n = array_dado.length;
// n = 3

// 1. Lê os elementos do array
for (var elements = 0; elements < n; elements++) {
    if (array_dado[elements] > n) {
        console.log("error, " + array_dado[elements] + " must not be in the array");
    } else {
        values_in_array.push(array_dado[elements]);
    }
}

// 2. Procura qual número no intervalo [0, n] não foi guardado
for (var terms = 0; terms <= n; terms++) {
    if (!values_in_array.includes(terms)) {
        var value = terms;
        console.log("The remaining value of the array is " + value);
    }
}