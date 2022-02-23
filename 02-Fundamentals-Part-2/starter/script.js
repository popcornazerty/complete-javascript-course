'use strict';

let hasDriversLicense = false;
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


const fuel = false;
function repareCar(tires, $fuel) {
    let goRepare;
    if(fuel === false) {
    console.log(`You need to the repre shop and change your ${tires} tires.`);
    } else {
    console.log(`You need to the repre shop and change your ${tires} tires and ${fuel} fuel.`);
    return goRepare;
}
 
repareCar(2,$fuel);
console.log(repareCar);