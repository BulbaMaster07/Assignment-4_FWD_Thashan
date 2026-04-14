function contestScoreJudge(){
    let a = Number(prompt("Enter the number of correct answers: "));
    let b = Number(prompt("Enter the number of partially correct answers: "));
    let c = Number(prompt("Enter the number of wrong answers: "));
    if (a >= 0 && a <= 100 && b >= 0 && b <= 100 && c >= 0 && c <= 100){
        let score = 3 * a + b - 2 * c;
        if (score < 0){
            score = 0;
        }
        if (a + b + c > 50){
            score -= 10;
        }
        if (score >= 60){
            alert(score+", PASS");
        }
        else{
            alert(score+", FAIL");
        }
    }
    else{
        alert("The values of a, b and c lie between 0 and 100 inclusive.");
    }
}