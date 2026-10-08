function prepareWords(string1, string2){
    return [string1.toLowerCase(), string2.toLowerCase()];
}

function createList(word1, word2){
    return [word1.split(""), word2.split("")];
}

function verifyAnagram (list1, list2){
    if (list1.length != list2.length){
        return "It is not an anagram";
    }
    let tempList2 = [...list2];
    for(let letters = 0; letters < list1.length; letters++ ){
        let currentLetter = list1[letters];
        let IndexOfList2 = tempList2.indexOf(currentLetter); //o índice da currentLetter na lista2 vai ser salvo em IndexOfList2
        
        if (IndexOfList2 !== -1){ //se não tiver sido encontrado nada é -1, !== de -1 é qualquer outro caso. a função indexOf, se não encontra o índice (posição) de tal coisa em tal coisa, retorna -1
            tempList2.splice(IndexOfList2, 1); //splice remove de tempList2 o termo de posição IndexOfList2, 1 vez
        }
        else{
            return "It is not an anagram"
        }   
    }
    return "It is an anagram"
}

let [word1, word2] = prepareWords("Mae", "Ema")
let [list1, list2] = createList(word1, word2)
let result = verifyAnagram(list1, list2)
alert(result)