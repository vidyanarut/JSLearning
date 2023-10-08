
console.log(`(01===>) Object:professor=======================================================`);
let obj = {
    name:"Manoj Pawar",
    age:31,
    subject :"FrontEnd Development",
    className:"CodeMind",
    teachingAbility:"Superb", 
};
  
  for (let key in obj) {
    console.log(key + ": " + obj[key] )
}





console.log(`(02===>)Adding 'degree' object into 'professor object================================='`);
 let deg={
    engineering:"CSC",
    PHD:"Core Java",
    MTech:"Compurter Network",
}
for (let key in deg) {
    console.log(key + ": " + deg[key] )
}





console.log(`(03===>)Adding array "certificates" into object 'professor===================='`);
let cer={
    cer1:"Hacker Rank Participation",
    cer2:"Certification in IFE Course",
    cer3:"Oracle Certified",
    cer4:"Certification in Adv Programming",
}

for(let key in cer){
    console.log(key + ": "+cer[key])
}


console.log(`(04===>)Adding new property totalExperience:"14 Years"=====================`);
console.log("8 Years Experience");


console.log("=================================================================================");
console.log(`(01===>)professor=======================================================`);
let x = {
    name:"Rohit Mane",
    age:24,
    subject :"Web Development",
    className:"Kiran Accadamy",
    teachingAbility:"High", 
};

  
  for (let key in x) {
    console.log(key + ": " + x[key] )
}




console.log(`(02===>)'degree' ================================='`);
 let w={ 
    
    deg:".Net",
    Msc:"DBMS",
    class:"Profound "
}
for (let key in w) {
    console.log(key + ": " + w[key] )
}


console.log(`(03===>) "certificates" ===================='`);
let m={
    m1:"IBM Data Science Professional Certificate.",
    m2:"Certification in IFE Course",
    m3:"Computer security certifications",
    m4:"Meta Front-End Developer Professional Certificate",
}

for(let key in m){
    console.log(key + ": "+m[key])
}

console.log(`(04===>) totalExperience:=====================`);
console.log("20 Years Experience");
