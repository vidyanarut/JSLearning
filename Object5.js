
console.log(`SBI Bank Before clone`);
let stew = {
    Name: "Parvin Jagadale",
    BankName:"SBI Bank", 
    AccNO: "123789546412",
    ifsCode: "SBI007537",
    userId: "6987412569"
   
}
console.table(stew);



console.log(`SBI Bank Before clone`);
const address= {
    Street: "Gandhi road",
    city: "Solapur",
    pin:415698
}
Object.assign(stew, address);
console.table(stew);


console.log(`SBI Bank Rateof interset in Details`);
const ye= {
   Homelone:"25%",
   Personallone:"20",
   Due:"7%"

}
Object.assign(stew, ye);
console.table(stew);



console.log(`Traversing of an object...`);
for (const values in stew) {
   console.log(values, stew[values]);
}





