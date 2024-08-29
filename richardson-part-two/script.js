let userName = prompt("Welcome to GC mini golf! What is your name?");

let numberOfHoles = parseInt(prompt(`Hi, ${userName}! Would you like to play 3 or 6 holes?`));

let totalScore = 0;

for (let i = 1; i <= numberOfHoles; i++) {
    let putts = parseInt(prompt(`How many putts for hole ${i}? (par: 3)`));
    totalScore += putts;
}

let coursePar = numberOfHoles * 3;

let totalPar = totalScore - coursePar;

if (totalPar > 0) {
    console.log(`Nice try, ${userName}... Your total par was: +${totalPar}.`);
} else if (totalPar < 0) {
    console.log(`Great job, ${userName}! Your total par was: ${totalPar}.`);
} else {
    console.log(`Good game, ${userName}. Your total par was: 0.`);
}
