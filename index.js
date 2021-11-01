// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require ('util');
// const path = require ('path');
// const generateMarkdown = require('./utils/generateMarkdown.js');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// TODO: Create an array of questions for user input
const questions = [
    {
        name:"title",
        message:"Give your Project a title",
        type:"input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must give a valid name for the file");
            }
            return true;
            }
    },
    {
        name:"description",
        message:"Give your Project a description",
        type:"input",
    },
    {
        name:"justification",
        message:"Give info on purpose of this project and what problems it solves",
        type:"input",
    },
    {
        name:"technologies",
        message:"Give info on technologies used in this project",
        type:"input",
    },
    {
        name:"installation",
        message:"Give info on installing this project",
        type:"input",
    },
    {
        name:"usage",
        message:"Give info on the usage of this project",
        type:"input",
    },
    {
        name:"contributing",
        message:"Give details on how to access site and contribute ",
        type:"input",
    },
    {
        name:"testing",
        message:"Give details on how this can be tested",
        type:"input",
    },
    {
        name:"github",
        message:"Provide a github username",
        type:"input",
    },
    {
        name:"email",
        message:"Provide an email address",
        type:"input",
    },
    {
        name:"credits",
        message:"Give info on assets that require attribution and any collaborators",
        type:"input",
    },
    {
        name: "license",
        message: "Choose your license:",
        type: "list",
        choices: ["No Licence used", "Apache 2.0", "BSD 3", "Eclipse", "GNU General Public license v3", "MIT license", "Mozilla Public license", "Common Development and Distribution license"],
    },
    {
        name: "year",
        message: "Provide a year of copyright for your license:",
        type: "input",
        
    }];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>{});    
}

// TODO: Create a function to initialize app 
function init() {
    inquirer.prompt(questions)
    .then(inquirerResponses => {
      console.log('Generating README...');
      writeToFile('./output/README.md', generateMarkdown({ ...inquirerResponses }));
});
  }
  
// Function call to initialize app
init();
