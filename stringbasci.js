
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


console.log("========== search() =============== ");
var greet = "Good Morning";
var result = greet.search('orn');
console.log(result);
var result = greet.search('after');
console.log(result);

console.log("========== slice() =============== ");
var greet = 'Hello Good Morning!';
var result = greet.slice(6);
console.log(result);
var result = greet.slice(6, 10);
console.log(result);
console.log("========== split() =============== ");

var result = greet.split("  ");
console.log(result);


var string="It is an instance that allows us to access members in JavaScript.";
var word=string.split("  ");
console.log(word);
console.log("total no of word"+word.length);

console.log(`The most /"user"/ friendly`);

 a=10;
 b=20;
c=a+b;
console.log("addition of c  "+c);

const name = 'javascript';
console.log(`Hello ${name}!`);




function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }
  
  console.log(countWords('bobby hadz com')); // 👉️ 3
  console.log(countWords('This   is   a long string')); // 👉️ 5
  