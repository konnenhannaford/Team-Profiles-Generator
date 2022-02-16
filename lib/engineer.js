
const Employee = require('./employee');
// const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }
    
    // getRole() {
    //     return "Engineer";
    // }

    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
}

module.exports = Engineer;