let n = 15
let termo = 1
let list = []
while(list.length <= n){

    if ((termo % 5) == 0 && (termo % 3) == 0){
        list.push("fizzbuzz")
        termo = termo + 1
    }

    else if ((termo % 3) == 0){
        list.push("fizz")
        termo = termo + 1
    }

    else if ((termo % 5) == 0){
        list.push("buzz")
        termo = termo + 1
    }

    else {
        list.push(termo)
        termo = termo + 1
    }
}
console.log(list)