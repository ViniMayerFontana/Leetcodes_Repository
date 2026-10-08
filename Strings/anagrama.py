# Descobrir se 2 palavras são um anagramas:
# gato anagrama de oatg

def prepare_words(string1, string2):
    return string1.lower(), string2.lower()

def create_list(word1, word2):
    return list(word1), list(word2)


def verify_anagram(list1, list2): #list1 = ["m", "a", "e"]      list2 = ["e", "m", "a"]
    if len(list1) != len(list2):
        return "It is not an anagram"
    temp_list2 = list2.copy()
    for letters in list1:
        if (letters in temp_list2):
            temp_list2.remove(letters)
        else:
            return "It is not an anagram"
    return "It is an anagram"


word1, word2 = prepare_words("Mae", "Ema")
list1, list2 = create_list(word1, word2)
result = verify_anagram(list1, list2)
print(result)