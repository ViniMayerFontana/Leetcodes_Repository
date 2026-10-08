function verifyPalinder(list){
    let start = 0;
    let end = (list.length - 1);
    while (start < end){
        if (list[start] != list[end]){
            return "it is not a palinder";
        }
        start++;
        end--;
    }
    return "it is a palinder";
}

let Word = "Ava";
let List = Word.toLowerCase().split("");
let result = verifyPalinder(List);
console.log(result);

