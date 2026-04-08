# Assignment4_FWD_Thashan
Assignment 4 submission of JavaScript Questions for CSE-106: FWD at SAU, Delhi
The following README explains the approach and complexity to handle each question of JavaScript as mentioned in the assignment (preferably using the Pseudocode/Algorithm approach)

Answer 1:
Approach:
1. Take input of three integers L, R, K
2. Define function integerCount(L,R,K) to
3.     SET count = 0
4.     CHECK IF 1 ≤ L ≤ R ≤ 10^6 //alternatively can be checked by using 2 nested if statements
5.     IF true -> check if 2 ≤ K ≤ 9
6.        IF true -> let x = L and loop till R such that
7.            IF x % k == 0 and chkPrime(sumOfDigits(x)) /*is true*/ and chkZero(x) /*is true*/
8.                INCREMENT count
9.            //no need of Else
10.     ELSE ALERT that K is invalid
11.     ELSE ALERT that L and/or R is invalid
12. To define sumOfDigits(num):
13.     SET Sum = 0 and Temp = num
14.     WHILE Temp IS NOT zero DO
15.          Sum = Sum * 10 + (Temp % 10) //adding the one's place digit to sum first, when the next place digit will be added, sum will make Onesplace * 10 + Tensplace and so on
16.          Temp = Temp // 10
17.     RETURN Sum
18. To define chk Prime(num):
19.     SET flag = False
20.     FOR i = 2 TO num//2 DO
21.          
22.                
