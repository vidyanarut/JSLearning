




const  doc ={
    1:{Bankname: 'State Bank', location:'Pune'},
    2:{Bankname:'Axis Bank', location:'Satara'},
    3:{Bankname:'Khotak Bank', location:'Dound'},
    4:{Bankname:'HDFC Bank', location:'Sangli'},
    5:{Bankname:'Bank of Baroda', location:'Mumbai'},
    6:{Bankname:'Maharashtra Bank',location:'Sangola'}
  };
  /*
console.log(doc[1]);
console.log(doc[2]);
console.log(doc[3]);
console.log(doc[4]);
console.log(doc[5]);
console.log(doc[6]);
*/
console.log(`Traversing `);

console.log('-------------------');
for (const values in doc[1]) {
  console.log(values, doc[1] [values]);
}
console.log('-------------------');

for (const values in doc[2]) {
  console.log(values, doc[2][values]);
}
console.log('---------------------');

for (const values in doc[3]) {
  console.log(values, doc[3][values]);
}
console.log('----------------------');
for (const values in doc[4]) {
  console.log(values, doc[4][values]);
}
console.log('------------------------');
for (const values in doc[5]) {
  console.log(values, doc[5][values]);
}
console.log('-----------------------');
for (const values in doc[6]) {
  console.log(values, doc[6][values]);
}




///////////////////////////////
console.log('============================================================');

class A{
   Bankname
   AccountNo
   IntersetRate

constructor(Bankname,AccountNo,IntersetRate){

this.Bankname=Bankname;
this.AccountNo=AccountNo;
this.IntersetRate=IntersetRate;
}

}
const obj1 = new A('Bank of india', 749522369,12);
const obj2= new A('HDFC Bank', 6589847125,24);
const obj3= new A('Bank of Baroda',896854571,12);
const obj4= new A('Maharashtra Bank',7852146941,40);

/*
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
*/

console.log(`Traversing of `);
console.log('--------------------');
for (const values in obj1) {
   console.log(values, obj1[values]);
}

console.log('---------------------');
for (const values in obj2) {
  console.log(values, obj2[values]);
}
console.log('------------------------');
for (const values in obj3) {
  console.log(values, obj3[values]);
}
console.log('---------------------');
for (const values in obj4) {
  console.log(values, obj4[values]);
}
