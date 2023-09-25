var greet = 'Good Morning';

console.log("========= length property =============");
var totalLength = greet.length;
console.log('Length of the string is: ', totalLength);

console.log("========== charAt() =============== ");
var charAt0 = greet.charAt(0);

var charAt5=greet.charAt(3);
console.log("Character at index 5 is: ", charAt5);


var lastIndexChar = greet.charAt(greet.length-1);
console.log('Last index char is: ', lastIndexChar);


console.log("========== index() =============== ");
var index=greet.indexOf('n');
console.log("Character at index is: ", index);
console.log(greet.indexOf('in'));
console.log(greet.indexOf('D'));


greet.replace('java','maharastra');
console.log(greet);

greet.replace('.',"-");
console.log(greet);

console.log('Index of char o is:', greet.indexOf('o'));



console.log("========== trim() =============== ");
var str = "   Good Afternoon  ";
var lengthBeforeTrim = str.length;
console.log("Length before trim : ", str.length);
var result = str.trim();
console.log("Length after trim: ", result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', result);