"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("Felicitation!")


function logger() {
    console.log('My name is Niko');
}
// Calling / Running / invoking function 
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

// function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1989);
console.log(age1);

// function expression
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(2000);

console.log(age1,age2);

// Arrow function
const calcAge3 = birthYear => 2022 - birthYear;
const Age3 = calcAge3(1989);
console.log(Age3);

// retirementDate => retirementDate - 2015;
// how many years a person has left until retirement
const calcYears = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirementDate = 65 - age;
    // return retirementDate;
    return `${firstName} retires in ${retirementDate} years`;
}
console.log(calcYears(1989,'Nicolas'));
*/

function cutMachine(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutMachine(apples);
  const orangePieces = cutMachine(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const Age3 = calcAge3(1989);

// retirementDate => retirementDate - 2015;
// how many years a person has left until retirement
const calcYears = (birthYear, firstName) => {
  // const age = 2022 - birthYear;
  const age = calcAge3(birthYear);
  const retirementDate = 65 - age;
  // return retirementDate;
  if (retirementDate > 0) {
    console.log(`${firstName} retires in ${retirementDate} years.` );
    return retirementDate;
   } else {
    console.log(`${firstName} already retired ${retirementDate} years ago, lucky him :P.`);
    return -1;
  }
};
console.log(calcYears(1989, "Nicolas"));
console.log(calcYears(1950, "Paul"));



function repareCar(isTiresGood, isFuel) {

    if(isFuel === false || isTiresGood === false){

        return alert("You need to go the repair shop");
    }

    return "Your car is Good right now;"

}

repareCar(false, true);

