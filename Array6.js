

let c=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`======  First and last element  =========`);
let first = c[0];
let second=c [4];
console.log(first,second);




let x=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`====== Replace in last element   =========`);
const index=0;
const newValue="Papaya";
x[index]=newValue;
console.log(x);


let w=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`====== Remove element in array   =========`);
w.splice(3,1);
console.log(w);




let array1=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`====== Replace in  element   =========`);
array1.push("pineapple");
console.log(array1);



let g=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`====== Insert before element   =========`);
g.splice(4,0,"Dragon Firut");
console.log(g);


console.log(`====== Replace with    =========`);
const arr = ["Banana","Orange","Apple","Mango","Water Melon"];
arr[1] = 'Kiwi';
  console.log(arr);


  let m=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`======  element start from 1 to 4   =========`);
m.splice(1-2);
console.log(m);



let j=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`======  Last 3 element  =========`);
const n = 3;
const result = j.slice(-n);
console.log(result);