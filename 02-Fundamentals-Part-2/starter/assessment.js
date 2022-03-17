"use strict";

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAverage('', '', ''));


let dolphinsScore = calcAverage(44, 23, 71);
let dol2 = calcAverage(85,54,41);
let koal = calcAverage(23,34,27);
let koalaScore = calcAverage(65, 54, 49);
console.log(dolphinsScore, koalaScore);


const checkWinner = function(avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
	} else {
		console.log('Nobody wins');
	}
};
checkWinner(dolphinsScore, koalaScore);
checkWinner(dol2,koal);


Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀




const calcTip = function(i) {
	return i >= 50 && i <= 300 ? i * 0.15 : i * 0.2
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]]
console.log(bills, tips, total);



/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀

// BMI = mass / height ** 2 = mass / (height * height)



function bmi(mass,height) {
	return mass / height ** 2;
}  

let bmiMark = bmi(78,1.69);
console.log(bmiMark); 
let bmiJohn = bmi(92,1.95);
console.log(bmiJohn); 


//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
   


const markMiller = {
	firstName : 'Mark',
	lastName : 'Miller',
	mass : 78,
	height : 1.69,
	calcBMI : function() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi.toFixed(2);
	// OR 
	/*
	calcBMI : function() {
		return this.mass / this.height ** 2;
	
	}
}	
let bmiMark = (johnSmith.calcBMI().toFixed(2));
console.log(bmiMark);

	
	}
}
markMiller.calcBMI();

// let bmiMark = (markMiller.calcBMI().toFixed(2));
// console.log(bmiMark);

const johnSmith = {
	firstName : 'John',
	lastName : 'Smith',
	mass : 92,
	height : 1.95,
	calcBMI : function() {
		return this.mass / this.height ** 2;
	
	}
}	
let bmiJohn = Math.round(johnSmith.calcBMI());
console.log(bmiJohn);




if (markMiller.bmi > bmiJohn) {
console.log(`"${markMiller.firstName} ${markMiller.lastName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.firstName} ${johnSmith.lastName}'s (${bmiJohn}) !"`)
} else {
	console.log(`"${johnSmith.firstName} ${johnSmith.lastName} BMI (${bmiJohn}) is higher than ${markMiller.firstName} ${markMiller.lastName} (${markMiller.bmi}) !"`)
}









// function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1989);
console.log(age1);

// Arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const Age3 = calcAge3(1989);
console.log(Age3);




const calcTip = function(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125 , 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];
console.log(bills, tips,totals);





// function expression
const calcAge = function(birthYear) {
	return 2080 - birthYear;
  }
  
  const years = [1990, 2005, 2003, 2058];
  
  const age1 = calcAge(years[0]);
  const age2 = calcAge(years[2]);
  const age3 = calcAge(years[years.length-1]);
  console.log(age1,age2,age3);
 



Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);


// Additionner les elements du tableau 
const calcAverage = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length; // calcul moyenne
};

console.log(calcAverage(totals));
/*




















  for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(tip + bills[i]);
  }
  console.log(bills, tips, totals);
  
  const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
	  // sum = sum + arr[i];
	  sum += arr[i];
	}
	return sum / arr.length;
  }


// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];
// console.log(bills, tips,totals);

// Boucles loop
//  Boucles for continuent d'etre executées tant que la condition est TRUE

// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }




// const types = [];
// for(let i = 0; i < nicolas.length; i++) {
// // Reading from nicolas array 
//   console.log(nicolas[i]);
// // filling types array
//   types[i] = typeof nicolas[i];
//   // OR
//   types.push(typeof nicolas[i]);
// }
// console.log(types);


// const years = [1989, 2007, 2005, 1960];
// const ages = [];
// for(let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }
// console.log(ages);
*/
