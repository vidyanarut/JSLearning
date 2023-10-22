const array =  [4,  5,  3, 2, 7];
            // [16, 25, 9, 4, 49]

const arrayTransform = array.map( (currentValue)=> {
    return currentValue*currentValue;
} );
console.log(arrayTransform);

// const transformedArray = [];
// array.forEach( (element)=> {
//     transformedArray.push(element*element);
// } );
// console.log(transformedArray);

const arrayNum =  [4,  5,  3, 2, 7];
                //[4,  6,  5, 5, 11]
const newArray = arrayNum.map( (currentValue, index )=> {
     return currentValue + index;
});
console.log(newArray);