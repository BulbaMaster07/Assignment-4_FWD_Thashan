function digitGatekeeper(){
   
    let count = 0;
    function sumOfDigits(num){
        let sum = 0;
        let temp = num;
        while (temp > 0){
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        return sum;
    }
    function checkPrime(num){
        for(let i = 2; i <= Math.floor(num/2); i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }
    function checkForZero(num){
        let temp = num;
        while (temp > 0){
            if (temp % 10 === 0){
                return true;
            }
            temp = Math.floor(temp / 10);
        }
        return false;
    }
    let L = Number(prompt("Enter a value for L:"));
    if (L >= 1 && L <= 1000000){
        let R = Number(prompt("Enter a value for R:"));
        if (R >= L && R <= 1000000 && R >= 1){
                let K = Number(prompt("Enter a value for K:"));
                if(K >= 2 && K <= 9){
                    for (let i = L; i <= R; i++){
                        if (i%K === 0 && checkPrime(sumOfDigits(i)) && !checkForZero(i)){
                        count++;
                        }
                    }
                    alert("The count of numbers between "+L+" and "+R+" that satisfy the conditions is: "+count);
                }
                else{
                    alert("K must be between 2 and 9 inclusive.");
                }
            }
        else{
            alert("R must satisfy the conditions: L <= R <= 1000000 and R >= 1");
        }
    }
    else{
        alert("L must satisfy the conditions: 1 <= L <= 1000000");
    }
}