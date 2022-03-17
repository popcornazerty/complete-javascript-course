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
/*
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
*/

/*
const friends = ['Vitalik', 'Mark', 'Justin'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
// const years = new Array(1991,1984,2008,2020);
// Change an element in the table
friends[1] = 'Joe';
console.log(friends);

const nicolas = ['Nicolas', 'Godefroy', 2022 - 1989, 'Student', friends];
console.log(nicolas);


// Exercice 


// function expression
const calcAge = function(birthYear) {
  return 2080 - birthYear;
}

const years = [1990, 2005, 2003, 2058];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length-1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[2]),calcAge(years[years.length-1])];
console.log(ages);


const friends = ['Vitalik', 'Mark', 'Justin'];
// add an element in the end
// friends.push('clown');
const newLenght = friends.push('clown');
console.log(friends);
// add an element at the begining 
friends.unshift('Zartek');
console.log(friends);

// delete the last element of the table
friends.pop();
console.log(friends); 

// delete the first element of the table
friends.shift();
console.log(friends);

//  Arrays

const  nicolasArray = [
  'nicolas',
  'godefroy'
]
// L'ordre est important et il est croissant (1 à 2 ici)

// Objects
// Il n'y a pas d'ordre puisque on peut appeler les objets par leur noms
const nicolas = {
  firstName : 'Nicolas',
  lastName : 'Godefroy',
  age : 2022 - 1989,
  crypto : ['Avax', 'Sol', 'Luna']
};
// Pour récupérer un élément nous utilisons
console.log(nicolas.firstName);
// Pour rajouter un élement 
nicolas.location = 'France'; 
// Pour ajouter une expression
nicolas['twitter'] = '@popcornazerty';
//  Pour récupérer une partie de l'objet et l'intégrer dans une const
const nameKey = 'Name'; // On récupére ici le Name du first et last
console.log(nicolas['first' + nameKey]);
console.log(nicolas['last' + nameKey]);

// const interestedIn = prompt('Que veux tu savoir sur moi fréro? Choose between firstName, lastName, age, crypto')
//  let result = (nicolas[interestedIn]);
/*
if (result) {
  console.log(result);
} else {
console.log(`'Votre entrée n'existe pas, Choose between firstName, lastName, age, crypto' `)
}


// console.log(nicolas);


// DEFI
//  "Jonas has 3 friends, and his best friend is called Michael"

const jonasFriends = {
  firstName : 'Jonas',
  friends : ['Michael', 'Peter', 'Steven'],
  // friendsNumber : '3 friends'
};
// let bestFriend = jonasFriends.friends[0];

console.log(`"${jonasFriends.firstName} has ${jonasFriends.friends.length} friends, and his best friend is called ${jonasFriends.friends[0]}"`)


const nicolas = {
  firstName: "Nicolas",
  lastName: "Godefroy",
  birthYear: 1989,
  crypto: ["Avax", "Sol", "Luna"],
  job: "Student",
  hasDriversLicense: true,

  // Ici il faut rajouter le birthyear dans le parametre de la function (i)
  //   calcAge : function() {
  //     return 2022 - birthYear;
  //   }

  // //  Ici le "this.birthyear" permet de relier la function à l objet du tableau demandé
      calcAge : function() {
       return 2022 - this.birthYear;
     },

    //  getSummary: function() {
    //   if(nicolas.hasDriversLicense) {
    //   return console.log(`"${firstName} ${lastName} is a ${nicolas.calcAge()} years old ${job} that loves crypto. His fav coins are ${crypto} and has a ${hasDriversLicense}"`)
    // }

    getSummary: function() {
     return `"${this.firstName} ${this.lastName} is a ${this.calcAge()} years old ${this.job} that loves crypto. His fav coins are ${this.crypto} and has ${this.hasDriversLicense ? 'a' : 'no'} drivers license."`
    }

//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
   
 };
console.log(nicolas.getSummary());

//  let age = nicolas.calcAge();
// // // OR
// let test2 = nicolas["calcAge"]();
// console.log(test);
// // OR en utilisant la derniere function
// console.log(nicolas.calcAge());
// console.log(nicolas.age);


// DEFI 
// {Nicolas} {godefroy} is a {birthyear} year old {job} that loves crypto, his fav coins are {crypto} and he has a driver {driversLicense}
 

//  console.log(nicolas.hasDriversLicense.toString());


// Boucles loop
//  Boucles for continuent d'etre executées tant que la condition est TRUE

// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }




const types = [];
for(let i = 0; i < nicolas.length; i++) {
// Reading from nicolas array 
  console.log(nicolas[i]);
// filling types array
  types[i] = typeof nicolas[i];
  // OR
  types.push(typeof nicolas[i]);
}
console.log(types);


//  Continue 
console.log('----ONLY STRINGS----')
for (let i = 0; i < nicolas.length; i++) {
  if(typeof nicolas[i] != 'string') continue; 
    console.log(nicolas[i],typeof nicolas[i]);
  }
// Break
console.log('----ONLY NUMBER----')
for (let i = 0; i < nicolas.length; i++) {
  if(typeof nicolas[i] === 'number') break; 
    console.log(nicolas[i],typeof nicolas[i]);
  }


const years = [1989, 2007, 2005, 1960];
const ages = [];
for(let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);



// Loop backwards

const nicolas = [
  'Nicolas',
  'Godefroy',
   2022 - 1989,
   ['Avax', 'Sol', 'Luna'],
 ];

 for(let i = nicolas.length -1; i >= 0; i--) {
   console.log(i, nicolas[i]);
 }


//  loop inside a loop

for(let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----starting exercise ${exercise}`);
  for(let first = 1; first <= 5; first++)
  console.log(`----first exercise ${first}`);
}


//  While loop
// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weight ${rep}`);
// }
let rep = 1;
while (rep <= 10) {
  console.log(`lifting weight ${rep}`);
  rep++;
}
*/

//  lancement de dès: la boucle va multiplier un nombre aléatoire par (6 chiffres sur un dès)
//  La boucle while est utile lorsque l'on ne sait pas combien d'itérations il y aura
let dice = Math.trunc(Math.random() * 6) + 1;
while(dice != 6) {
  console.log(`your rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('loop is about to stop');
} 
