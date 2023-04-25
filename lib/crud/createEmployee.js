let Manager = require("../Manager");
let Intern = require("../Intern");
let Engineer = require("../Engineer");

// function to create every new type of employee

let genEmployee = async (employee) => {
    try {
  if (employee.typeEmployee.toLowerCase() === "manager") {
    let employeeProps = await Manager.generate();
    return new Manager(
      employeeProps.name,
      employeeProps.employeeID,
      employeeProps.email,
      employeeProps.officeNumber
    );
  } else if (employee.typeEmployee.toLowerCase() === "engineer") {
    let employeeProps = await Engineer.generate();
    return new Engineer(
      employeeProps.name,
      employeeProps.employeeID,
      employeeProps.email,
      employeeProps.github
    );
  } else if (employee.typeEmployee.toLowerCase() === "intern") {
    let employeeProps = await Intern.generate();
    return new Intern(
      employeeProps.name,
      employeeProps.employeeID,
      employeeProps.email,
      employeeProps.school
    );
  } else {
    return 'employee could not be generated'
  }
} catch(err){
    throw err
}};

module.exports = genEmployee