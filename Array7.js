 const array = [113,45,56,11,32,45,109,799,56,45]
console.log(array);
array.reverse();


console.log("Reversed Array: ");
    console.log(array);
    
    console.log("Ascending Array: ");
const sortedArray = array.sort();
 console.log(sortedArray);

 console.log("largest Array: ");
const max= Math.max(...array);
console.log(max);

console.log("smolest Array: ");
const min= Math.min(...array);
console.log(min);


console.log("remove duplicate number Array: ");

let newArray=[...new Set(array)];
console.log(newArray);


    
console.table(newArray);