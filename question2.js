function rollSeedLock(){
    function returnMidDigit(num){
        let digitcount = 0;
        let temp = num;
        while (temp > 0){
            temp = Math.floor(temp / 10);
            digitcount++;
        }
        temp = num;
        let limit;
        if (digitcount % 2 === 0){
            limit = Math.floor(digitcount/2) - 1;
        }
        else if (digitcount % 2 === 1){
            limit = Math.floor(digitcount/2);
        }
        for (let i = 0; i <= limit; i++){
            if (i === limit){
                return temp % 10;
            }
            temp = Math.floor(temp / 10);
        }
    }
    let N = Number(prompt("Enter a value for N:"));
    if (N >= 1 && N <= 1000000){
        let seed = Number(prompt("Enter a value for seed:"));
        if (seed >= 0 && seed <= 9){
            let current = N;
            for (let i = 0; i < 3; i++){
                if (current % 2 === 0){
                    current = Math.floor(current / 2) + seed;
                }
                else if (current % 2 === 1){
                    current = 3 * current - seed;
                }
            }
            if (current >= 100 && current <= 999 && returnMidDigit(current) === seed){
                alert("YES, "+current);
            }
            else{
                alert("NO, "+current);
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