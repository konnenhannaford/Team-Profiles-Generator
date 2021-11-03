// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require ('util');
// const path = require ('path');
// // const generateMarkdown = require('./utils/generateMarkdown.js');
// // const Employee = require('./lib/Employee')
const generateHTML = require("./src/generate-html.js");
const Manager = require('./lib/manager.js')
const Engineer = require('./lib/engineer.js')
const Intern = require('./lib/intern.js')
const Employee = require('./lib/employee.js')

// manager info
const ManQuestions = [
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
const EngQuestions = [
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

// student info
const StuQuestions = [
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
// // TODO: Create a function to write README file
// const writeToFile = (fileName, data) => {
//     fs.writeFile(fileName, data, (err) =>{});    
// }

// // TODO: Create a function to initialize app 
// function init() {
//     inquirer.prompt(questions)
//     .then(inquirerResponses => {
//       console.log('Generating card');
//       writeToFile('./src/index.js', generateMarkdown({ ...inquirerResponses }));
// });
//   }
// // Function call to initialize app
// init();









// const inquirer = require('inquirer');
// const fs = require('fs');
// const Manager = require('./lib/manager.js')
// const Engineer = require('./lib/engineer.js')
// const Intern = require('./lib/intern.js');



// function startHtml() {
//     const html = `<!DOCTYPE html>
//     <html lang="en-US">
//       <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
//         <title>Hannaford Corp - Team Profile Generator</title>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
//         <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> -->
//         <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poiret+One&family=Raleway&display=swap" rel="stylesheet">    
//         <link rel="stylesheet" type="text/css" href="index.css"> 
//       </head>
//     <body>
//       <header class="main-header">
//         <h1 >Team Profile Generator</h1>
//         <h2>Sort your staff</h2>     
//     </header>`

//     fs.writeFile("./dist/index.html",html,function(err){
//         if (err) {
//             console.log(err)
//         }
//     })

// }

// const addMember = (id,email,github)=>{
//     const html = `
//     <div class="card" style="width: 18rem;">
//   <div class="card-header">
//     Card title
//   </div>
//   <div class="card-body">
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">ID: ${id} </li>
//       <li class="list-group-item">Email: ${email} </li>
//       <li class="list-group-item">Github: ${github} </li>
//     </ul>
//   </div>
// </div>`
//     fs.appendFile("./dist/index.html",html,function(err){
//         if (err) {
//             console.log(err)
//         }
//     })

// }

// function init() {
//     startHtml()
//     addMember(1,"email@gmail.cm","mygithub")
// }


// init();
