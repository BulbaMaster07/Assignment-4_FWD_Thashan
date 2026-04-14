function mirrorCorridor(){
    function checkPalindrome(num){
        let temp = num;
        let rev = 0;
        while (temp > 0){
            rev = rev * 10 + temp % 10;
            temp = Math.floor(temp/10);
        }
        return rev === num;
    }
    let N = Number(prompt("Enter a value for N:"));
    if (N >= 1 && N <= 1000000){
        let K = Number(prompt("Enter a value for K:"));
        if (K >= 2 && K <= 9){
            let x = 0;
            let palinstatus = 0;
            for (; x <= 1000000; x++){
                if (checkPalindrome(N + x) && (N + x) % K === 0){
                    alert(x);
                    palinstatus = 1;
                    break;
                }
            }
            if (palinstatus === 0){
                alert("-1");
            }
        }
        else{
            alert("K must be between 2 and 9 inclusive.");
        }
    }
    else{
        alert("N must be between 1 and 1000000 inclusive.");
    }
}
