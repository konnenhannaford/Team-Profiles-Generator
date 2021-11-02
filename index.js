// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require ('util');
const path = require ('path');
// const generateMarkdown = require('./utils/generateMarkdown.js');
// const Employee = require('./lib/Employee')
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/manager.js')
const Engineer = require('./lib/engineer.js')
const Intern = require('./lib/intern.js')

// TODO: Create an array of questions for user input
const questions = [
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
        message:"Please provide your Project an id",
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
    ];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>{});    
}

// TODO: Create a function to initialize app 
function init() {
    inquirer.prompt(questions)
    .then(inquirerResponses => {
      console.log('Generating card');
      writeToFile('./src/index.js', generateMarkdown({ ...inquirerResponses }));
});
  }
// Function call to initialize app
init();
