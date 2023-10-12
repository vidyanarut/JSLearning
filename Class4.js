


console.log('--------------- step1 ------------------');

class A {
        firstName
    lastName
    age
    hobbiess
    
    constructor(firstName, lastName, age, hobbiess){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hobbiess = hobbiess;
    }
   
}
 const object1 = new A('Sager', "Chavan", '20' ,"Reading Books");
 console.log(object1);


 console.log('--------------- step2 ------------------');


 class B{
        firstName
        location
        nostd
        type

    constructor(firstName,location,nostd,type){


        this.firstName=firstName;
        this.location=location;
        this.nostd=nostd;
        this.type=type
    }
 }
 const x=new B('Prakash','solapur',155,'Diploma');
 console.log(x);

 
 console.log('--------------- step3 ------------------');


 let arr = ["Sager", "Suraj", "Parvin","Rohit"];
 console.log(arr);

 for(let i = 0; i < arr.length; i++){
   console.log(arr[i]);
 }

 console.log('--------------- step4 ------------------');


 let original = "Technology";
 let reversed = original.split('').reverse().join('');
 console.log(reversed);

 console.log('--------------- step5 ------------------');




    // methods
    class Person {
        // properties
        BankName
        location
        employess
        streeth
        city
        pin
        homelon
        dueintereset
    
        // constructor
        constructor( BankName, location,  employess, streeth, city, pin, homelon, dueintereset){
            this.BankName= BankName;
            this. location= location;
            this. employess= employess;
            this.streeth= streeth;
            this. city=  city;
            this. pin= pin;
            this.homelon= homelon;
            this. dueintereset=  dueintereset;
      
        }
        // methods
    }
     const object = new Person('Boi', "Sangola", 'Mumbai' ,"10,000","7setor","Sangola","20%","95%","10%");
     console.log(object);
     
     console.table(object);
    

     console.log(`Traversing of an object...`);
     for (const values in object) {
        console.log(values, object[values]);
     }
     