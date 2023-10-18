


function janny(callback){
console.log(`sangola`);
console.log('pandhapure');
callback();
}
let elone=function(){
console.log("solapur");
console.log("sangli");

}
janny(elone);




console.log("=================================");
// 1 sec = 1000 ms
setTimeout( function(){
    console.log('Inside callback function');
}, 
5000);


// IN JS we call function as first class citizen
// 1. FE
// 2. Callback
// 3. Function can return another function

function outer(){
    console.log('Inside outer function');
   return function(){
     console.log('Inside inner function');
   } 
    
}
outer()();








//////////////////////////////////////

function jennyHomework(callback){
    console.log(`Jenny started assignments`);
    console.log('Her assignments solving is in progress');
    console.log(`Jenny's assignment is completed`);
    console.log('==============================');
    callback();
    return function(){
        console.log(`Yahoo. We both completed assignments`);
    }
}
let elonCopyHomework = function(){
    console.log(`Thank you Jenny for calling me back`);
    console.log('Elon started copying assignments');
    console.log('Elon copied all assignments');
    console.log('==============================');
}
// const result = jennyHomework(elonCopyHomework);
// result();
jennyHomework(elonCopyHomework)();