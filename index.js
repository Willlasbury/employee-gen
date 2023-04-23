const generateHtml = require("./util/generateHtml");
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inq = require("inquirer");
const fs = require("fs");
const util = require("util");
let createEmployee = require('./lib/crud/createEmployee')

let writeFileProm = util.promisify(fs.writeFile);

let askEmployeeBool = async () => {
  try {
    let response = await inq.prompt([
      {
        type: "confirm",
        name: "addEmployee",
        message: "Do you want to add an employee?",
      },
    ]);
    if (response.addEmployee) {
      return await inq.prompt([
        {
          type: "list",
          name: "typeEmployee",
          message: "Which type of employee are you adding?",
          choices: ["Manager", "Intern", "Engineer"],
        },
      ]);
    }
  } catch (err) {
    throw err;
  }
};

// let logGenEmployee = async (employeeType) => {
//   employeeType;
// };

let team = [];
let init = async () => {
  try {
    let newEmployee = await askEmployeeBool();
    if (newEmployee) {
        let employee = await createEmployee(newEmployee)
        team.push(employee)
        console.log("team:", team)
        init()
      } else{
        return
      }
    }
    catch (err) {
    throw err;
  }
};

init();
