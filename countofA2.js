let str="SangOla collAge sangola";
 
let count =0;
const I =['a']

for(let s of str.toLocaleUpperCase()){
    if(I.includes(s)){
        count++
    }
}
console.log(count);