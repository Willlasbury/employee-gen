const generateHtml = require("./util/generateHtml");
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inq = require("inquirer");
const fs = require("fs");
const util = require("util");
let createEmployee = require('./lib/crud/createEmployee')

let writeFileProm = util.promisify(fs.writeFile);

// check if the user wants to create a new employee
let askEmployeeBool = async () => {
  try {
    let response = await inq.prompt([
      {
        type: "confirm",
        name: "addEmployee",
        message: "Do you want to add an employee?",
      },
    ]);
    // if the user wants to create a new employee ask for employee type
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

// global storage for the employee team that resets after the program is closed in the terminal
let team = [];

// initiate application
let init = async () => {
  try {
    // check if the user wants to create a new employee and get employee type
    let newEmployee = await askEmployeeBool();
    if (newEmployee) {
      //create the new employee 
        let employee = await createEmployee(newEmployee)
        // add the empoloyee to the 'team'
        team.push(employee)

        // create the html in the prod folder 
        await writeFileProm('./prod/index.html', generateHtml(team))
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
