
let person={
    name:"hello",
    age:23,
    city:"pune",
    show:function(){
        console.log(`Hi Hello, How are you ?`);
       }
};
console.log(typeof person);

let x= person.name;
console.log(`person name is: ${x}`);
console.table(person);


console.log(`Update property in object`);
person.age = 20;
console.log(person);

console.log(`Delete property from an object`);
delete person.name;
console.log(person);


console.log(`Adding method in an object`);
person.show();
person.display=function(){
    console.log(`I am inside display function`);
}
console.log(person);
person.display();



console.log(`====== Nested Object =======`);
const personElon = {
    name: "Elon Musk",
    age: 54,
    totalCompany: 9,
    companies: {
        tesla: "300B USD",
        twitter: "150B USD",
        spacex: "200B USD"
    },
    kidsName: ["Deny", "Weny", "Rony", "Randy"]
}

console.log(personElon.companies.tesla);






console.log(personElon.companies.tesla);
console.log(personElon.kidsName[0]);
console.log(personElon.kidsName.length);
// "stew"
personElon.kidsName.push("stew");

for (const kid of personElon.kidsName) {
    console.log(kid);
}