const array =[1,2,3,4,5,6];
const sum = 0;
for (let index = 0; index < array.length; index++) {
    if(index%2==0){
        console.log(`Even positioned element:${array[index]}`);
        sum = sum + array[index];
    }
    
}