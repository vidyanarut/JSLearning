
let arr = [11,3,4,11,4,7,3]; 
  
function remove(arr) { 
    return [...new Set(arr)]; 
} 
console.log(remove(arr));
//////////////////////////////////////
console.log('---------------------');
const str = [42,  50, 3, 2, 7, 22, 11, 40];

function convertString(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

console.log(convertString(str));

////////////////////////////////////
