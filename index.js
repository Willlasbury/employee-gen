const generateHtml = require("./util/generateHtml");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inq = require("inquirer");
const fs = require("fs");
const util = require("util");

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

let logGenEmployee = async (employeeType) => {
  employeeType;
};

let init = async () => {
  try {
    let team = [];
    let askForEmployee = await askEmployeeBool();
    if (askForEmployee) {
      if (askForEmployee.typeEmployee === "Manager") {
        let managerProps = Manager.generate();
        let newEmployee = new Manager(
          managerProps.name,
          managerProps.employeeID,
          managerProps.email,
          managerProps.officeNum
        );
        team.push(newEmployee)
      }
    }
    console.log("askForEmployee:", askForEmployee);
    // let generator = await generateHtml(team)
    // console.log("test")
    //   writeFileProm('./prod', generator)
  } catch (err) {
    throw err;
  }
};

init();
