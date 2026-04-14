function skippingNumbers(){
    function sumTill(num,seed){
        let sum = 0;
        for (let i = 1; i <= num; i++){
            if(i % (seed + 2)!== 0){
                sum += i;
            }
        }
        return sum;
    }
    let N = Number(prompt("Enter a value for N:"));
    if (N >= 1 && N <= 1000000){
        let seed = Number(prompt("Enter a value for seed:"));
        if (seed >= 0 && seed <= 9){
            let m = 1;
            while(true){
                if(sumTill(m,seed) >= N){
                    alert("The smallest value of m is: "+m+" and the computed sum is: "+sumTill(m,seed));
                    break;
                }
                m++;
            }
        }
        else{
            alert("Seed must be between 0 and 9 inclusive.");
        }
    }
    else{
        alert("N must be between 1 and 1000000 inclusive.");
    }
}
//for sample case 100, 3, output is 16, 106 not 15, 105.