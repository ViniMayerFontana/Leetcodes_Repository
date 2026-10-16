class Solution:
    def isHappy(self, n: int) -> bool:
        number = n
        counter_times = 0
        
        while number != 1 and counter_times < 100:
            digits = []
            
            while number > 0:
                digits.append(number % 10)
                number = number // 10

            digits.reverse()

            sum_numbers = 0
            for i in range(len(digits)):
                digits[i] = digits[i] * digits[i]
                sum_numbers = sum_numbers + digits[i]
            
            number = sum_numbers
            counter_times += 1

        return number == 1

sol = Solution()
sol1 = sol.isHappy(19)
sol2 = sol.isHappy(2)
print(sol1) # True
print(sol2) # False