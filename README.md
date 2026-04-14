# Assignment4_FWD_Thashan
Assignment 4 submission of JavaScript Questions for CSE-106: FWD at SAU, Delhi
The following README explains the approach and complexity to handle each question of JavaScript as mentioned in the assignment (preferably using the Pseudocode/Algorithm approach).  
**Note:**  
1. Each question has been solved and presented with one JavaScript file and one HTML webpage.
2. All solutions have been considered using function() definition approach and possibly their sub-systems such as checking for Palindrome, sum till a given number. 
3. Furthermore, all prompts are casted by Number().  

**Problem 1: Digit Gatekeeper**  
**Approach:**  
1. The inputs L, R and K are taken via prompt and validated/checked for constraints with a nested if statement, to ensure execution doesn't continue until each constraint is verified.  
2. In the inner-most if statement, a temporary variable x is defined to take values from L to R and checked within the loop, if
   - it is divisible by K and whether it's sum of digits is a prime number and that it doesnt contain the digit 0
   - Count is incremented, if such numbers are found.
3. Count is displayed at the end.
4. To find the sum of digits, a function has been employed to use the modulo operator to extract digits and floor division operator to reduce size of the number, and the digits are added and returned.
5. To check their prime nature, a function has been employed to loop till sum/2 + 1, checking if sum % i != 0. If this is true, then true is returned, else false.
6. Another function has been implemented to check if the number x doesn't contain 0, with similar construct as the "Sum" function above, just that it returns False, if it finds 0.

**Complexity**:  
Time Complexity: O(N log(N)) where N = R - L   
Space Complexity: O(1)  

**Problem 2: Roll-Seed Lock**  
**Approach:**  
1. N and seed is input via prompt and validated by nested if constraint check.
2. N is assigned to variable current
3. If current is even -> current = current / 2 + seed
4. Else current = current * 3 - seed
5. "YES" and the final value of current is alerted if number is between 100 and 999 via if statement and if it's middle digit is equal to seed
   - that is checked by a user-defined function where successive iterations reveal number of digits, and iterations to the number are done again till n/2 digits. Number is stored in temp and decremented using temp = temp // 2.
6. Else, NO is alerted alongwith number.

**Complexity:**  
Time Complexity: O(log<sub>10</sub>(n))  
Space Complexity: O(1)  

**Problem 3: Mirror Corridor**  
**Approach:**  
1. N and K is input via prompt and validated by nested if constraint check.
2. A temporary variable X is initialized as 0 and a status (flag variable) is declared to keep track whether value found or not
3. X is iterated over till 100000, to check if
   - N + X is palindrome (using a user-defined checkPalindrome function where, the reverse of a number is calculated through iterative modulo and floor division operations. Returns true, if reverse === num, else false)
   - N + X is divisible by K.
4. If found, status = 1 else 0. If 0, alert -1.
  
**Complexity:**  
Time Complexity: O(N log(N))  
Space Complexity: O(1)  

**Problem 4: Fare Calculator**  
**Approach:**  
1. Inputs base, distance, minutesLate, and seed are taken using prompt() and validated using nested if statements based on given constraints.
2. The initial fare is calculated as fare = base + 7 × distance
3. If minutesLate > 15, a penalty of 20 is added to the fare.
4. If distance > 10, an additional 10% of the current fare is added using Math.floor(0.1 * fare).
5. Based on seed:
   - If seed is odd, subtract seed from fare
   - If seed is even, add seed to fare
6. Finally, the fare is rounded to the nearest multiple of 5 using Math.round(fare / 5) * 5
7. The final fare is displayed using alert().

**Complexity:**  
Time Complexity: O(1)    
Space Complexity: O(1)

**Problem 5: Skipping Numbers**  
**Approach:**  
1. Input N and seed using prompt() and validate using nested-if as per given constraint.
2. In the inner loop, declare a variable sum with value 0 and m with value 1.
4. Iterate till true using while... construct to check
   - Iterate from 1 to m using a temporary variable i such that if i % (seed + 2) !== 0 then
   - increment sum by i
   - if sum >= N then alert the value of m and sum and break out
   - Increment m
  
**Complexity:**  
Time Complexity: O(n<sup>2</sup>)  
Space Complexity: O(1)

**Problem 6: Contest Score Judge**  
**Approach:**  
1. Input a, b, c using prompt() and validate using if condition whether all three are between 0 and 100 inclusive.
2. Declare a variable score and initialize it with 3 * a + b - 2 * c
3. If score is negative, score = 0
4. If a + b + c > 50, score -= 10
5. Alert PASS with score if greater equal to 60 else Alert FAIL with score.

**Complexity:**  
Time Complexity: O(1)  
Space Complexity: O(1)
