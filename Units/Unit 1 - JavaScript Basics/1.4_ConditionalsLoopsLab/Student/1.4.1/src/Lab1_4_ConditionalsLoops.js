/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts

let age = 15;
if (age <= 16) {
    console.log ("Teen discount")
}   else if (age => 65) {
        console.log ("Senior discount")
    } else {
        console.log ("No discount")
    }

    let vPoints = 1200;
    if (vPoints >= 5000) {
        let cart = 245
        let total; 
    }
    else if(vPoints >= 5000) {
            total = cart * .8
     } else if (vPoints >= 1000) {
            total = cart * .95
     } else {
        total = cart
    } console.log = (`Your total is: $$ {total} with discount of ${discount} %`)

// TODO 2: Nested if with two numbers

let number1 = 10;
let number2 = 20;

if(number1==number2) {
    console.log ("Numbers are equal")}
else if (number1 > number2){
    console.log ("Number1 is bigger")
} else{
    console.log ("Number 1 is smaller")
}
// TODO 3: Switch statement for language greeting

let language = "French"

switch(language) {
    case "Spanish":
        console.log ("Hola, mundo!")
        break;
    case "French":
        console.log ("Bonjour tout le monde")
        break;
    default:
        console.log ("Hello, world!")
    break;
}
// TODO 4: While loop (1 to 10)

let count = 1;
while(count <= 10) {
    console.log ("VALUE:", count);
    conunt ++;
}

let count2 = 10
while(count2 <= 1) {
    console.log("VALUE", count2)
    count2--;
}

// TODO 5: Do..while loop (1 to 5)

do{
    console.log("VALUE", i);
} while (i <= 5)

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)

for (let i = 1; i <= 20; i++) {
    if (i = 10){
        console.log ("TEN")
    } else if ( i == 20) {
        console.log ("TWENTY")
    } else {
        console.log (i)
    }
}

// TODO 7: Even/Odd loop (1 to 20)

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
