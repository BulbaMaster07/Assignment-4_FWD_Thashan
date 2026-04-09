# Assignment4_FWD_Thashan
Assignment 4 submission of JavaScript Questions for CSE-106: FWD at SAU, Delhi
The following README explains the approach and complexity to handle each question of JavaScript as mentioned in the assignment (preferably using the Pseudocode/Algorithm approach). Each question has been solved and presented with one JavaScript file and one HTML webpage.   

**Problem 1: Digit Gatekeeper**  
**Approach:**  
The inputs L, R and K are taken via prompt and validated/checked for constraints with a nested if statement, to ensure execution doesn't continue until each constraint is verified. In the inner-most if statement, a temporary variable x is defined to take values from L to R and checked within the loop, if it is divisible by K and whether it's sum of digits is a prime number and that it doesnt contain the digit 0. Count is incremented, if such numbers are found. Count is displayed at the end.
To find the sum of digits, a function has been employed to use the modulo operator to extract digits and floor division operator to reduce size of the number, and the digits are added and returned. To check their prime nature, a function has been employed to loop till sum/2 + 1, checking if sum % i != 0. If this is true, then true is returned, else false. Another function has been implemented to check if the number x doesn't contain 0, with similar construct as the "Sum" function above, just that it returns False, if it finds 0.  
**Complexity**:  
Time Complexity: O(n)
Space Complexity: O(1)  

**Problem 2: Roll-Seed Lock**  
**Approach:**  
Inputs N and seed are taken via prompt and validated by employing a nested-if structure for each constraint of each input. In the inner-most if block, a for loop runs 3 times, assigning N/2 + seed to N if N is even and N * 3 - seed to N if N is odd. The value of N is checked if it lies from 100 to 999, if true, Alert output is YES, else a function MidDigit is employed where number of digits present in the number are found using a while

