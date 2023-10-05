
let numbers = [22,11,44,55,77,33];
 
// Declaring empty Even array
let even = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
}
 
// Printing output
console.log(`Even numbers in an array are: ${even}`);
//////////////////////////////////////////*

const arr = [22,11,44,55,77,33];

const odds = arr.filter(number => {
  return number % 2 !== 0;
});

console.log(odds); 
 //////////////////////////

 let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log("Even element of given Array are ");
for (let index = 1; index < arrayNumbers.length;index+=2) {
    console.log(`${arrayNumbers[index]}`);
}
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    sum += arrayNumbers[index];
}
console.log(`Sum of array Elements ${arrayNumbers} is: "${sum}"`);