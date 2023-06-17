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
const lineBreaks = '\n\n';

msg += lineBreaks;
msg += `myNumber (typeof: ${typeof myNumber}) = ${myNumber}`;
msg += lineBreaks;
msg += `myOtherNumber (typeof: ${typeof myOtherNumber}) = ${myOtherNumber}`;
msg += lineBreaks;
msg += `myTotal (myNumber * myOtherNumber) (typeof: ${typeof myTotal})  = ${myTotal}`;
msg += lineBreaks;
msg += `myName (typeof: ${typeof myName}) = ${myName}`;
msg += lineBreaks;
msg += `myCombo (\`\${myNumber + myOtherNumber}\`) (typeof: ${typeof myCombo})  = ${myCombo}`;
msg += lineBreaks;
msg += `myOtherCombo (myNumber + myOtherNumber) (typeof: ${typeof myOtherCombo}) = ${myOtherCombo}`;
msg += lineBreaks;
msg += `myRemainder (myNumber % 5) (typeof: ${typeof myRemainder}) = ${myRemainder}`;
msg += lineBreaks;
msg += `i (not good convention to name a variable with one character) (typeof: ${typeof i}) = ${i}`;
msg += lineBreaks;
msg += `int (not good convention to name a variable similiar to integer) (typeof: ${typeof int}) = ${int}`;
msg += lineBreaks;
msg += `myBoolean (typeof: ${typeof myBoolean}) = ${myBoolean}`;

document.getElementById('dvContent').innerText = msg;
console.log(msg);