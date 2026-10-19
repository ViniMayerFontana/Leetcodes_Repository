class Solution{

    isValid(s) {
        const stack = [];
        this.pairs = {'(': ')','[': ']','{': '}'};
        this.pairs['<'] = '>';
        for(let symbol = 0; symbol <= s.length; symbol++){
            let symbolChar = s[symbol]
            
            if (symbolChar in this.pairs){
                stack.push(this.pairs[symbolChar]);
            }
            
            else{
                if (stack == [] || stack.pop() != symbolChar){
                    return false;
                }
            }
        }

        return stack.length == 0
        
    }
}
test1 = new Solution();
console.log(test1.isValid("[](){}"));
console.log(test1.isValid("[](){<>>}"));
console.log(test1.pairs)
