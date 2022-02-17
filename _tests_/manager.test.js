const Manager = require('../lib/manager.js');

describe('Manager', () => {


    it("it should get the officenumber",()=>{
        const officeNumber = 69
        const manager = new Manager("Kanye",1,"kanye@gmail.com", officeNumber) 
        expect(manager.getOfficeNum()).toBe(officeNumber);
    })

    it("should get role ()",()=>{
        const role = "Manager"
        const manager = new Manager ("Kanye",1,"kanye@gmail.com")
        expect(manager.getRole()).toBe(role);
    })


})
