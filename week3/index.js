function EmployeeInfo(name, salary)
{
    console.log("Welcome " + name + "Your monthly salary is " + salary);
}

// Current date and time
const currentDateTime=new Date();
console.log("This is my first program");
console.log("Program run on :" +currentDateTime.toLocaleString());

var empeName="Niraj Chaudhary ";
var EmpSalary=50000;

//Callong the function
EmployeeInfo(empeName, EmpSalary);

// Add for second excercise
const EmpSkill=(Skills, Name, LabGrp)=>{
console.log("Student ID : " + Name + "Expert in " + Skills );
console.log("  Lab Group name "+LabGrp);
}

EmpSkill("Java", "3200410", "Group 19");

const student= require('./StudentInfo')  
const person = require('./Person') 
// because getName is the function so we use ()  
console.log("Student Name:" +student.getName())   
console.log(student.Location())  
console.log(student.dob)  

// because dob is a variable so we do nt use ()  
console.log(student.Studentgrade())  
console.log("grade is "+student.Studentgrade(55) ) 

person1= new person("Niraj","Nepal","chaudharyniraj1736@gmail.com")  
console.log("using Person Module",person1.getPersonInfo()) 
console.log("Programe ended")

os=require("os") 
const util=require('util') 
console.log("temporary directory"+ os.tmpdir() ) 
console.log("hostname: "+ os.hostname()) 
console.log("OS : " + os.platform() +"release:"+ os.release()) 
console.log("Uptime"+ (os.uptime())/3600 +" hours") 
console.log("userInfo" + util.inspect(os.userInfo())) 
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte") 
console.log(" free: "+os.freemem()/1000000000 + "Giga byte") 
console.log("CPU "+ util.inspect(os.cpus())) 
console.log("Network"+ util.inspect(os.networkInterfaces())) 
console.log("programe end")