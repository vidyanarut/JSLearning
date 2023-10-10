
console.log('--------------- step1 ------------------');


class prakash {
   
    Company
    Model
    Transmission
    Seater
    Color
    
    constructor(Company, Model, Transmission, Seater, Color){
    
    this.Company=Company;
    this.Model=Model;
    this.Transmission=Transmission;
    this.Seater=Seater;
    this.Color=Color;
    }
   
}
const x=new prakash('Marute','sore','Manual','5seater',"caffeinebrown");
console.log(x);
const c=new prakash('Ford','ecosport','Manual','6seater',"light blue");
console.log(c);
const m=new prakash('Mahindra ','Corpio','Automatic','9seater',"Silver");
console.log(m);
const k=new prakash('Toyota ','Glanza','Manual','4seater',"White");
console.log(k);
const s=new prakash('Hyundai  ','Creta','Automatic','7seater'," Abyss Black");
console.log(s);

const aPerson = [x, c, m,k,s];
for (const element of aPerson) {

}console.table(aPerson);

console.log('--------------- step2 ------------------');

class suraj {
   

    CollageName
    Location
    Eductionsfiled
    Establishment

    constructor( CollageName, Location, Eductionsfiled, Establishment){
    
        this.CollageName=CollageName;
        this.Location=Location;
        this.Eductionsfiled=Eductionsfiled;
        this.Establishment=Establishment;


        

    }
}       

let u=new suraj('Sangola Collage','Sangola','B.sc,bca',"1989");
console.log(u);


const f=new suraj('SVERI','Pandharpur','Engineering',"1893");
console.log(f);

const b=new suraj('Rajaram College','Kholapur','Computer science',"1991");
console.log(b);
const t=new suraj('Shree Siddheshwar Women College','Solapur','Engineering|Electronics',"1978");
console.log(t);



console.log(`Traversing of an object...`);

for (const values in u) {
    console.log(values, u[values]);
 }

 console.log("=============================");

 for (const values in f) {
    console.log(values, f[values]);
 }

 console.log("=============================");

 for (const values in b) {
    console.log(values, b[values]);
 }



 console.log("=============================");

 for (const values in t) {
    console.log(values, t[values]);
 }