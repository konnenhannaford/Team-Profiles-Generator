// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require ('util');
// const path = require ('path');
// // const generateMarkdown = require('./utils/generateMarkdown.js');
// // const Employee = require('./lib/Employee')
const generateHTML = require("../Team-Profiles-Generator/src/generateahtml");
const Manager = require('./lib/manager.js')
const Engineer = require('./lib/engineer.js')
const Intern = require('./lib/intern.js')
const Employee = require('./lib/employee.js')

// manager info
const ManagerQuestions = [
    {
        name:"name",
        message:"Please provide your name",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid name");
            }
            return true;
            }
    },
    {
        name:"id",
        message:"Please provide your id",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid id");
            }
            return true;
            }
    },
    {
        name:"email",
        message:"Please provide your email",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid email");
            }
            return true;
            }
    },
    {
        name:"office",
        message:"Please provide your office number",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid office number");
            }
            return true;
            }
    },
    ];

// engineer info
const EngineerQuestions = [
    {
        name:"name",
        message:"Please provide your name",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid name");
            }
            return true;
            }
    },
    {
        name:"id",
        message:"Please provide your id",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid id");
            }
            return true;
            }
    },
    {
        name:"email",
        message:"Please provide your email",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid email");
            }
            return true;
            }
    },
    {
        name:"github",
        message:"Please provide your github",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid github");
            }
            return true;
            }
    },
    ];

// intern info
const InternQuestions = [
    {
        name:"name",
        message:"Please provide your name",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid name");
            }
            return true;
            }
    },
    {
        name:"id",
        message:"Please provide your id",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid id");
            }
            return true;
            }
    },
    {
        name:"email",
        message:"Please provide your email",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid email");
            }
            return true;
            }
    },
    {
        name:"school",
        message:"Please provide your school",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid school");
            }
            return true;
            }
    },
    ];

    // loop to the next employee and menu
    const Next = {
        type: "list",
        name: "employee",
        message: "Add another employee?",
        choices: ["Engineer", "Intern", "Exit"],
      };

  
async function ask(questions) {
    let answers = await inquirer.prompt(questions);
    return answers;
  }
  
  // starting inquirer
  async function init() {
    let ManagementResponse = await ask(ManagerQuestions);
    const manager = new Manager(ManagementResponse);
    let next = await ask(Next);
    let team;
    let objectItem;
    let engineers = [];
    let interns = [];

    // moves to the next set of question
    while (next.employee !== "Exit") {
      if (next.employee === "Engineer") {
        team = await ask(EngineerQuestions);
        objectItem = new Engineer(team);
        engineers.push(objectItem);
      } else {
        team = await ask(InternQuestions);
        objectItem = new Intern(team);
        interns.push(objectItem);
      }
      next = await ask(Next);
    }

    
    let generatePage = await generateHTML(manager, engineers, interns);
    writeToFile(generatePage);
  }
  
  init();
  
  function writeToFile(generatePage) {
    fs.writeFile(`./dist/index.html`, generatePage, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Page is generated");
    });
  }