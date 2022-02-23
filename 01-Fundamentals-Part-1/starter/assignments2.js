/*const tailleNicolas = 1.75;
const poidsNicolas = 60;
const taillePaul = 1.70;
const poidsPaul = 80;

// BMI of Nico
const bmiNicolas = poidsNicolas / tailleNicolas ** 2;
console.log(bmiNicolas);
const bmiPaul = poidsPaul / (taillePaul * taillePaul);
console.log(bmiPaul);
// let markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);
// BMI of Mark

// Declaration de la fonction
function roundingBmi(bmi) {
    return bmi.toFixed(2);
}
console.log(roundingBmi(bmiNicolas));
console.log(roundingBmi(bmiPaul));
// function financial(x) {
    // return Number.parseFloat(x).toFixed(2),
    // }
    if (bmiNicolas > bmiPaul) {
        console.log(`le BMI de Nicolas (${roundingBmi(bmiNicolas)}) est plus grand que le BMI de Paul ${roundingBmi(bmiPaul)}`); 
    } else {
        
        console.log(`le BMI de Paul (${roundingBmi(bmiPaul)}) est plus grand que le BMI de Nicolas ${roundingBmi(bmiNicolas)}`);
    }
 

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// Dolphins
//  Koalas

const AverageDolphins = (97 + 112 + 101) / 3;
const MinimumScore = 120;
console.log(AverageDolphins);
const AverageKoala = (97 + 112 + 101) / 3;
console.log(AverageKoala);
const DolphinsWinner = AverageDolphins > AverageKoala;
const KoalasWinner = AverageKoala > AverageDolphins;
console.log(DolphinsWinner);

/*if(DolphinsWinner > KoalasWinner && DolphinsWinner >= MinimumScore) {
    console.log("Dolphins are the winner");
 } else if(KoalasWinner > DolphinsWinner && KoalasWinner >= MinimumScore) {
console.log("Koalas are the winner");
    } else if (DolphinsWinner === KoalasWinner) {
        console.log('Both are winners')
    }

if (DolphinsWinner === true && AverageDolphins >= MinimumScore) {
  console.log("Dolphins are the winner");
} else if (KoalasWinner === true && AverageKoala >= MinimumScore) {
  console.log("Koalas are the winner");
} else if (AverageDolphins === AverageKoala && AverageDolphins >= MinimumScore && AverageKoala >= MinimumScore) {
  console.log("Ex AEQUO");
} else {
    console.log("No one wins the trophy")
}
*/
// true = 1
// false = 0 - 3541 10 7


//  if bill value between 50 and 300 tip 15%
//  else tip 20%
//  bill = 275, 40 and 430
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'



const bill = 430;
// const finalResult = bill >= 50 && bill <= 300 ? 
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill value was ${bill}, the tip value is ${tip} and the final value is ${bill + tip}`);


// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

