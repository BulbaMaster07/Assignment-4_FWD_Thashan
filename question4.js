function fareCalculator(){
    let base = Number(prompt("Enter the base fare:"));
    if (base >= 1 && base <= 1000){
        let distance = Number(prompt("Enter the distance traveled in kilometers:"));
        if (distance >= 0 && distance <= 100){
            let minutesLate = Number(prompt("Enter the number of minutes late:"));
            if (minutesLate >= 0 && minutesLate <= 120){
                let seed = Number(prompt("Enter a value for seed:"));
                if (seed >= 0 && seed <= 9){
                    let fare = base + 7 * distance;
                    if (minutesLate > 15){
                        fare += 20;
                    }
                    if (distance > 10){
                        fare += Math.floor(0.1 * fare);
                    }
                    if (seed % 2 === 1){
                        fare -= seed;
                    }
                    else{
                        fare += seed;
                    }
                    fare = Math.round(fare/5) * 5;
                    alert("The total fare is: " + fare);
                }
                else{
                    alert("Seed must be between 0 and 9 inclusive.");
                }
            }
            else{
                alert("Minutes late must be between 0 and 120 inclusive.");
            }
        }
        else{
            alert("Distance must be between 0 and 100 inclusive.");
        }
    }
    else{
        alert("Base fare must be between 1 and 1000 inclusive.");
    }
}