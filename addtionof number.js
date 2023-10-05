var str = "Devloper";
var reverseStr="";
for(let index=str.length-1;index>=0;index--){
    str.charAt(index);
}











 // Reverse the string
var str = "Developer";
var reverseStr = "";
for (let index = str.length-1; index >=0; index--) {
    reverseStr = reverseStr + str.charAt(index); 
}
console.log(`Reverse string is: ${reverseStr}`);


// Count the vowels
var str = "i am ui developer";
var count = 0;
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index);
    if(char=='a' || char=='e' || char=='i' || char=='o' || char == 'u'){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);

console.log(`=============================`);
var str = "I am ui developer";
var count = 0;
var vowelsCap = "AEIOU";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);




for(let index=1; index<=5; index++){
    result = result + index * index;
}





