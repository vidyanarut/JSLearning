console.log(`====  1. Arithmetic Operator ====`);
// + - *
var num1 = 10;
var num2 = 2;
var result = num1 * num2;
console.log(`Multiplication result is: ${result}`);

var result = num1 ** 3;
console.log(`Exponential result is: ${result}`);

var result = num1 / num2;
console.log(`Division result is: ${result}`);

var result = num1%num2;
console.log(`Modulus result is: ${result}`);

console.log(`Modulus result is: ${10 % 3}`);

console.log(`Modulus result is: ${15 % 4}`);


var NUM3=5;
NUM3=NUM3+=3;
console.log("result of compoud addtion: ",NUM3);

////////////////////////////////////////

console.log("====== Comparison Operator =========");
var str1 = "Focus";
var str2 = "Locus";

var result = str1 == str2; // typeof result;
console.log(`Result of comparison == is: ${result}`);

var result = str1 === str2;
console.log(`Result of comparison === is: ${result}`);

var num1 = 10;
var num2 = "10";
var result = num1 == num2;
console.log(`Result of comparison == is: ${result}`);

var result = num1 === num2;
console.log(`Result of comparison == is: ${result}`);