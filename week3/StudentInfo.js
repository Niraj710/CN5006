// arrow function with no name, this function does not take any argument vrbname = () => {} 
// code starts from here: 

const dateofBirth= "16/6/2005" 

const getStudentName =() => {
return "Niraj Chaudhary";
} 

const getCampusName = () => 
{
    return ("UEL Campus ") 
} 

//exporting functions & variable outside the module 
exports.getName=getStudentName 
exports.Location=getCampusName 
exports.dob=dateofBirth 

// How to export function with parameters 
exports.Studentgrade=(marks)=> 
{ 
if (marks>50 && marks <70) return ("B grade") 
else 
return ("A grade") 
}