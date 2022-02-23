// let js = "amazing";
// console.log(6 + 8 + 15 - 10);
/*let firstName = "Nicolas";
firstName = 'Jule';
// console.log(firstName);

console.log(typeof firstName);

const BirthYear = 1989;

console.log(typeof null);
const YearNow = 2022;
// const ageNicolas = YearNow - 1989;
// const agePierre = YearNow - 1879;
// console.log(ageNicolas);

const firstName = 'Nicolas';
const lastName = 'Godefroy';
console.log(firstName + ' ' + lastName);
// Assignement operators
let x = 10 + 5;
x += 10;
x *= 4;
console.log(x);

// Comparaison operators
const ageNicolas = 33;
const agePierre = 31;  
// console.log(ageNicolas > agePierre);

const averageAge = (ageNicolas + agePierre) / 2;
console.log(ageNicolas, agePierre, averageAge);*/
/*
const firstName = 'Nicolas';
const job = 'student';
const birthYear = 1989;
const year = 2022;
// const Nicolas = "I'm " + firstName + ', a '+ (year - birthYear) + ' years old ' + job + '!';
// console.log(Nicolas);

const nicolasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(nicolasNew);*/

/*
let ageBill = 16;
let authorizedAge = 18;
function(ageLegal) {
if (ageBill < authorizedAge)
return ("Vous n'etes pas autorisé à conduire")
else ("Bravo, vous pouvez conduire !")
}
console.log(ageLegal);
*/


/*
const ageBill = 16;
const legalAge = 18;

if (ageBill >= legalAge) {
    console.log("bravo vous pouvez conduire"); 
} else {
    const yearsLeft = legalAge - ageBill; 
    console.log(`WOULA TU PE PAS CONDUIR SAL TARBA, il te reste encore ${yearsLeft} années mdr`);
}

let century;
const birthYear = 1989;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const inputYear = '1989';
console.log(Number(inputYear), inputYear);
console.log(String(18));
console.log('1' + 1);
let n = '1' + 1;
n = n - 1;
console.log(n);
*/



// 5 falsy values: 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Nicolas'));
console.log(Boolean({}));

const money = 0;
if(money) {
    console.log("don't spend it all NEGGA");
} else {
    console.log('You should get a job BRO');
}

let height = 10;
if(height) {
    console.log('YAY Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

let age = 20;
const majorité = 18;
const Yearsleft = age - majorité;
if(age === majorité) {
    console.log('You r an adult');
} else {
    console.log(`You still have ${Yearsleft} Years left`);
}
/*
const favourite = window.open(Number("what's your fav number?"));

// function test(){
if(favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if(favourite === 18) {
    console.log('PAS MAL NEGRO');
} else {
    console.log('CHARO');
}*/
/*
age = 16;
// A: Age is greater or = 20
// B: Age is < 30

if (age != 20) {
    console.log("Ye");
} else {
    console.log("Nei");
}
*/

const hasDriversLicense = true // B
const hasGoodVision = true // B
const isTired = true
const isAllowed = hasDriversLicense && hasGoodVision && !isTired;
/*
console.log(hasDriversLicense && hasGoodVision); 
console.log(hasDriversLicense || hasGoodVision); // opt maj L = ||
console.log(!hasDriversLicense); // opt maj L = ||
console.log(isAllowed);*/ 
if(isAllowed) {
    console.log("You are allowed to drive");
} else {
    console.log("Another bro should drive");
}





const day = 'prout';
switch(day) {  // day === 'monday'
    case 'Monday':
        console.log('I plan my course');
        break;
    case 'tuesday':
    console.log('Prepare theory videos');
    break;
    case 'Wednesday':
    case 'Thursday':
    console.log('Write code examples');
    break;
    case 'friday': 
    console.log('I record videos');
    break;
    case 'Saturday':
    case 'Sunday':
    console.log('Enjoy the weekend');
    break;
    default:
        console.log('Not a valid day');
}
if (day === "Monay") {
console.log("I plan my course");
} else if (day === "tuesday") {
console.log('prepare theory videos');
} else if (day === "Wednesday" || day === "Thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("i record videos");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Enjoy the weekend");
}   else {
        console.log("Not a valid day");
    }

    //  conditional operator

/*
age >= 18 ? console.log("I like to drink vodka") : 
console.log("I like to drink water");
*/
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >=18 ? 'wine': 'water'}`);