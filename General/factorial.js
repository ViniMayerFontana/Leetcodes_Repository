function factorial(n){
    if (n < 0){
         return "Não existe fatorial de número negativo";
        }
    if (n == 0 || n == 1){
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}
    
var f = parseInt(prompt("Escreva o valor do fatorial: "))

value = factorial(f);
alert(value);