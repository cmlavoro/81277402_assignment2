let myNumber      = 5;
let myOtherNumber = 5;
let myTotal = myNumber * myOtherNumber;
let myName = "";
let myCombo = `${myNumber + myOtherNumber}`;
let myOtherCombo = myNumber + myOtherNumber;
let myRemainder = myNumber % 5;
let i = 2;
let int = 4;
let myBoolean = false;

//write variables and their values to the screen and console
let msg = '---- INF651 - Assignment 2 Output ----';
msg += '\n\n';
msg += `myNumber (typeof: ${typeof myNumber}) = ${myNumber}`;
msg += '\n\n';
msg += `myOtherNumber (typeof: ${typeof myOtherNumber}) = ${myOtherNumber}`;
msg += '\n\n';
msg += `myTotal (myNumber * myOtherNumber) (typeof: ${typeof myTotal})  = ${myTotal}`;
msg += '\n\n';
msg += `myName (typeof: ${typeof myName}) = ${myName}`;
msg += '\n\n';
msg += `myCombo (\`\${myNumber + myOtherNumber}\`) (typeof: ${typeof myCombo})  = ${myCombo}`;
msg += '\n\n';
msg += `myOtherCombo (myNumber + myOtherNumber) (typeof: ${typeof myOtherCombo}) = ${myOtherCombo}`;
msg += '\n\n';
msg += `myRemainder (myNumber % 5) (typeof: ${typeof myRemainder}) = ${myRemainder}`;
msg += '\n\n';
msg += `i (not good convention to name a variable with one character) (typeof: ${typeof i}) = ${i}`;
msg += '\n\n';
msg += `int (not good convention to name a variable similiar to integer) (typeof: ${typeof int}) = ${int}`;
msg += '\n\n';
msg += `myBoolean (typeof: ${typeof myBoolean}) = ${myBoolean}`;

document.getElementById('dvContent').innerText = msg;
console.log(msg);