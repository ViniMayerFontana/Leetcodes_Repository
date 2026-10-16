class Solution {
    isHappy(n) {
        let number = n;
        let counter_times = 0;

        while (number != 1 && counter_times < 20) {
            let digits = [];

            while (number > 0) {
                digits.push(number % 10);  // Pega o último algarismo
                number = Math.floor(number / 10);  // Corrigido de rnumber para number
            }

            digits.reverse();  // Inverte para a ordem correta

            let sum_numbers = 0;
            for (let i = 0; i < digits.length; i++) {
                digits[i] = digits[i] * digits[i];
                sum_numbers = sum_numbers + digits[i];
            }
            
            number = sum_numbers;
            counter_times++;
        }

        if (number == 1) {
            return true;
        } else {
            return false;
        }
    }
}

const sol = new Solution();
console.log(sol.isHappy(19)); // true
console.log(sol.isHappy(2));  // false