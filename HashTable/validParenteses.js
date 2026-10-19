class Solution{

    isValid(s) {
        let stack = [];
        let pairs = {'(': ')','[': ']','{': '}'};

        for(let simbol = 0; simbol <= s.length; simbol++){
            let simbolChar = s[simbol]
            
            if (simbolChar in pairs){
                stack.push(pairs[simbolChar]);
            }
            
            else{
                if (stack == [] || stack.pop() != simbolChar){
                    return false;
                }
            }
        }

        return stack.length == 0
        
    }
}
test1 = new Solution();
viewTest1 = test1.isValid("[](){}");
console.log(viewTest1);