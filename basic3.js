console.log("---------step1---------");
console.log("My Dream Company Name is: Wipro");
console.log("---------step2---------");
console.log("My hobbyare is:", "'Swemming'" ,"'Cricket'","'Bike Ride'");
console.log("---------step3---------");
var str1="'Swemming'";
var str2="'Cricket'";
var str3="'Bike Ride'";
console.log("Concat string: ",str1.concat(str2).concat(str3));

console.log("===============================================");

console.log("------------First String--------------");
var str="  Hey you are doing good, keep it up  ";
console.log(str);
///////

var lengthBeforeTrim = str.length;
var result = str.trim();
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', result);

/////////
var charAt0 = str.charAt(0);
var charAt5=str.charAt(2);
console.log("Character at first index is: ", charAt5);

///////////
var charAt5=str.charAt(35);
console.log("Character at last index is: ", charAt5);
////////

function countWords(str) {
    return str.trim().split(/\s+/).length;
  }
 console.log("Total count of word: ",countWords(str));

///////////
console.log("We print good:",str.substring(20, 24));

/////////////

 console.log("Sub string slice(): ",str.slice(23,25),str.slice(26));
 //////////

 console.log("String start with word 'up': ",(str.includes("up")));