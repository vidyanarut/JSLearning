
class prakash {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){

        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }

    
    
   
}
const x=new prakash(22,"Anil","IT",50000,"TCS");

const c=new prakash(33,"Rasha","Finance",47000,"Wipro");

const m=new prakash(55,"Rishi","Finance",47000,"TCS");

const k=new prakash(66,"Sonali","Finance",45000,"Infy");

const s=new prakash(77,"Monika","IT",40000,"Wipro");

const f=new prakash(88,"Vinayak","IT",75000,"TCS");

const t=new prakash(99,"Mahesh","HR",85000,"Infy");
//////table/////////
const aPerson = [x, c, m,k,s,f,t];
for (const element of aPerson) {

}console.table(aPerson);

const arrayEmployees = [x, c, m,k,s,f,t];

const emp={
    emp_name:"Anil",
    emp_company:"TCS"
}
