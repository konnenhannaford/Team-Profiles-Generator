const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";

    }
    

    getOfficeNum() {
        return this.officeNumber
    };

    // getRole() {
    //     return "Manager";
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

module.exports = Manager;